import { SoldItem } from './show.models';

describe('SoldItem', () => {
  it('can create a Sold Item', async () => {
    const expected = new SoldItem('123', 10);

    expect(expected.itemRef).toEqual('123');
    expect(expected.quantitySold).toEqual(10);
  });
});
