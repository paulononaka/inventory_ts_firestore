export class ItemRequestDto {
  itemID: string;
  itemName: string;
  quantity: number;

  constructor(itemID: string, itemName: string, quantity: number) {
    this.itemID = itemID;
    this.itemName = itemName;
    this.quantity = quantity;
  }
}
