export class SoldItem {
  itemRef: string;
  quantitySold: number;

  constructor(itemRef: string, quantitySold: number) {
    this.itemRef = itemRef;
    this.quantitySold = quantitySold;
  }
}
