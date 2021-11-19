import { ShowController } from './show.controller';
import { ItemResponseDto } from './show.dtos';
import { ShowService } from './show.service';

describe('ShowController', () => {
  let showService: ShowService;
  let showController: ShowController;

  beforeEach(async () => {
    showService = new ShowService();
    showController = new ShowController(showService);
  });

  describe('buyItem', () => {
    it('should call buyItem from service', async () => {
      const expected = { message: 'Ok', statusCode: 201 };
      jest
        .spyOn(showService, 'buyItem')
        .mockImplementation(() => new Promise((resolve) => resolve(expected)));

      showController.buyItem('123', '123').then((result) => {
        expect(result).toEqual(expected);
      });
    });
  });

  describe('findByItem', () => {
    it('should call findByItem from service', async () => {
      const expected = new ItemResponseDto('123', 'Fancy Mocked Dress', 1);
      jest
        .spyOn(showService, 'findByItem')
        .mockImplementation(() => new Promise((resolve) => resolve(expected)));

      showController.findByItem('123', '123').then((result) => {
        expect(result).toEqual(expected);
      });
    });
  });

  describe('findAll', () => {
    it('should call findAll from service', async () => {
      const expected = [new ItemResponseDto('123', 'Fancy Mocked Dress', 1)];
      jest
        .spyOn(showService, 'findAll')
        .mockImplementation(() => new Promise((resolve) => resolve(expected)));

      showController.findAll('123').then((result) => {
        expect(result).toEqual(expected);
      });
    });
  });
});
