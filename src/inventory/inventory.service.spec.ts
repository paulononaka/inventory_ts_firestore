import { InventoryService } from './inventory.service';
import { mockFirebase } from '../../test/mock-firebase';

describe('InventoryService', () => {
  describe('post inventory', () => {
    let inventoryService;
    let set;
    let doc;
    let collection;

    beforeEach(async () => {
      inventoryService = new InventoryService();
      ({ set, doc, collection } = mockFirebase(set, doc, collection));
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
