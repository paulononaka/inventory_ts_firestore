import { ItemResponseDto } from './show.dtos';
import { ShowService } from './show.service';

const mockQueryResponse = jest.fn();
mockQueryResponse.mockResolvedValue({
  id: '123',
  data: jest.fn(() => ({
    itemName: 'Fancy Dress',
  })),
});

const soldItem = {
  data: jest.fn(() => ({
    item: { get: mockQueryResponse },
    quantitySold: 10,
  })),
};

const mockSoldItem = jest.fn();
mockSoldItem.mockResolvedValue(soldItem);

const mockSoldItems = jest.fn();
mockSoldItems.mockResolvedValue({
  docs: [soldItem],
});

jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn(),
  firestore: () => ({
    runTransaction: jest.fn(),
    collection: jest.fn(() => ({
      doc: jest.fn(() => ({
        collection: jest.fn(() => ({
          doc: jest.fn(() => ({
            get: mockSoldItem,
          })),
          get: mockSoldItems,
        })),
      })),
    })),
  }),
}));

describe('ShowService', () => {
  let showService;

  beforeEach(async () => {
    showService = new ShowService();
  });

  it('buyItem should save a sold item', async () => {
    await expect(showService.buyItem('111', '222')).resolves.not.toThrow();
  });

  it('findByItem should return a sold item', async () => {
    const expected = new ItemResponseDto('123', 'Fancy Dress', 10);

    showService.findByItem('111', '222').then((result) => {
      expect(result).toEqual(expected);
    });
  });

  it('findAll should return list of items', async () => {
    const showID = '123';
    const expected = [new ItemResponseDto('123', 'Fancy Dress', 10)];

    showService.findAll(showID).then((result) => {
      expect(result).toEqual(expected);
    });
  });
});
