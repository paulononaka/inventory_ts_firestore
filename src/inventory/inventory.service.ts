import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { InventoryDto } from './inventory.dtos';
import { Inventory } from './inventory.models';

@Injectable()
export class InventoryService {
  async save(inventoryDto: InventoryDto[]): Promise<any> {
    inventoryDto.forEach(async (inventoryDto) => {
      const inventory = new Inventory(
        inventoryDto.itemName,
        inventoryDto.quantity,
      );
      await admin
        .firestore()
        .collection('inventory')
        .doc(inventoryDto.itemID.toString())
        .set(JSON.parse(JSON.stringify(inventory)));
    });
  }
}
