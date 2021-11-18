import { InventoryService } from './inventory.service';
import * as admin from 'firebase-admin';

describe('InventoryService', () => {
  describe('post inventory', () => {
    let inventoryService;
    let set;
    let doc;
    let collection;

    beforeEach(async () => {
      admin.initializeApp();
      inventoryService = new InventoryService();
      set = jest.fn();
      doc = jest.fn(() => ({ set }));
      collection = jest
        .spyOn(admin.firestore(), 'collection')
        .mockReturnValue({ doc } as unknown as any);
    });

    it('should return "Ok!"', async () => {
      const dto = [{ itemID: 12345, itemName: 'Fancy Dress', quantity: 10 }];

      await expect(inventoryService.save(dto)).resolves.not.toThrow();

      expect(collection).toHaveBeenCalledWith('inventory');
      expect(doc).toHaveBeenCalledWith('12345');
      expect(set).toHaveBeenCalledWith({
        itemName: 'Fancy Dress',
        quantity: 10,
      });
    });
  });
});
