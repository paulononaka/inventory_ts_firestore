import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ItemRequestDto } from './inventory.dtos';
import { Item } from './inventory.models';

@Injectable()
export class InventoryService {
  async save(inventoryDto: ItemRequestDto[]): Promise<any> {
    inventoryDto.forEach(async (inventoryDto) => {
      const inventory = new Item(inventoryDto.itemName, inventoryDto.quantity);
      await admin
        .firestore()
        .collection('inventory')
        .doc(inventoryDto.itemID.toString())
        .set(JSON.parse(JSON.stringify(inventory)));
    });
  }
}
