import { Product } from "../product/Product";

export class IdCard extends Product {
  public readonly owner: string;

  constructor(owner: string) {
    super();
    console.log(owner + "のカードを作ります。");
    this.owner = owner;
  }

  public use(): void {
    console.log(this.owner + "のカードを使います。");
  }
}
