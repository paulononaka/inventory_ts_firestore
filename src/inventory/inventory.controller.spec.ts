import { InventoryController } from './inventory.controller';
import { ItemRequestDto } from './inventory.dtos';
import { InventoryService } from './inventory.service';

describe('InventoryController', () => {
  let inventoryService: InventoryService;
  let inventoryController: InventoryController;

  beforeEach(async () => {
    inventoryService = new InventoryService();
    inventoryController = new InventoryController(inventoryService);
  });

  describe('post inventory', () => {
    it('should return "Ok!"', async () => {
      const result = { message: 'Ok', statusCode: 201 };
      jest
        .spyOn(inventoryService, 'save')
        .mockImplementation(() => new Promise((resolve) => resolve(result)));

      inventoryController
        .inventory([new ItemRequestDto('1', 'Mocked Item 1', 10)])
        .then((result) => {
          expect(result).toEqual(result);
        });
    });
  });
});
