import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { InventoryDto } from './inventory.dtos';
import { Inventory, InventoryList } from './inventory.models';

@Injectable()
export class InventoryService {
  constructor() { }

  async save(inventoryDto: InventoryDto): Promise<any> {
    const inventory = new Inventory(
      inventoryDto.itemID,
      inventoryDto.itemName,
      inventoryDto.quantity,
    );
    await admin
      .firestore()
      .collection('inventory')
      .add(JSON.parse(JSON.stringify(inventory)));
    return {
      statusCode: 201,
      message: 'Ok',
    };
  }
}
