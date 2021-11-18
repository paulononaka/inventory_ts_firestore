export class Inventory {
  itemName: string;
  quantity: number;

  constructor(itemName: string, quantity: number) {
    this.itemName = itemName;
    this.quantity = quantity;
  }
}
