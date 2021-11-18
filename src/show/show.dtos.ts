export class ItemResponseDto {
  itemID: string;
  itemName: string;
  quantity_sold: number;

  constructor(itemID: string, itemName: string, quantitySold: number) {
    this.itemID = itemID;
    this.itemName = itemName;
    this.quantity_sold = quantitySold;
  }
}
