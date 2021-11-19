import { HttpException, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ItemResponseDto } from './show.dtos';

@Injectable()
export class ShowService {
  async buyItem(showID: string, itemID: string): Promise<any> {
    const db = admin.firestore();
    const itemRef = db.collection('inventory').doc(itemID);
    const soldItemRef = db
      .collection('shows')
      .doc(showID)
      .collection('soldItems')
      .doc(itemID);

    await db.runTransaction(async (t) => {
      const itemDoc = await t.get(itemRef);
      const showItemRefDoc = await t.get(soldItemRef);

      const item = itemDoc.data();
      if (item === undefined) {
        throw new HttpException('Item not found', 404);
      }
      if (item.quantity <= 0) {
        throw new HttpException('Item is no longer in stock', 409);
      }

      t.update(itemRef, { quantity: item.quantity - 1 });
      const soldItem = showItemRefDoc.data();
      const quantitySold =
        soldItem === undefined ? 1 : soldItem.quantitySold + 1;
      t.set(soldItemRef, { itemRef: itemRef, quantitySold: quantitySold });
    });
  }

  async findByItem(showID: string, itemID: string): Promise<ItemResponseDto> {
    const snapshot = await admin
      .firestore()
      .collection('shows')
      .doc(showID)
      .collection('soldItems')
      .doc(itemID)
      .get();
    const soldItem = snapshot.data();
    if (soldItem === undefined) {
      throw new HttpException('Item not found', 404);
    }
    const refItem = await soldItem.itemRef.get();
    const item = refItem.data();
    return new ItemResponseDto(
      refItem.id,
      item.itemName,
      soldItem.quantitySold,
    );
  }

  async findAll(showID: string): Promise<ItemResponseDto[]> {
    const soldItems = [];
    const snapshot = await admin
      .firestore()
      .collection('shows')
      .doc(showID)
      .collection('soldItems')
      .get();
    for (const doc of snapshot.docs) {
      const soldItem = doc.data();
      const refItem = await soldItem.itemRef.get();
      const item = refItem.data();
      soldItems.push(
        new ItemResponseDto(refItem.id, item.itemName, soldItem.quantitySold),
      );
    }
    return soldItems;
  }
}
