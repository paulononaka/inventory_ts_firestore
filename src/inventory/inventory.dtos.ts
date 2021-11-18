export class InventoryDto {
  itemID: string;
  itemName: string;
  quantity: number;

  constructor(itemID: string, itemName: string, quantity: number) {
    this.itemID = itemID;
    this.itemName = itemName;
    this.quantity = quantity;
  }
}
