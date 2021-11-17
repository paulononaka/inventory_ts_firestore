export class Inventory {
  itemID: string;
  itemName: string;
  quantity: number;

  constructor(
    itemID: string,
    itemName: string,
    quantity: number,
  ) {
    this.itemID = itemID;
    this.itemName = itemName;
    this.quantity = quantity;
  }
}

export class InventoryList {
  inventoryList: Inventory[];

  constructor(inventoryList: Inventory[]) {
    this.inventoryList = inventoryList;
  }
}
