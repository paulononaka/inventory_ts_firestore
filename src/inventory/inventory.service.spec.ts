import { InventoryService } from './inventory.service';
import * as admin from 'firebase-admin';

describe('InventoryService', () => {
  describe('post inventory', () => {
    let inventoryService;

    beforeEach(async () => {
      admin.initializeApp({});
      inventoryService = new InventoryService();
    });

    it('should return "Ok!"', async () => {
      const dto = [{ itemID: 12345, itemName: 'Fancy Dress', quantity: 10 }];
      await expect(inventoryService.save(dto)).resolves.not.toThrow();
    });
  });
});
