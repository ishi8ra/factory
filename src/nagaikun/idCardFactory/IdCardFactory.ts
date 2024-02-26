import { Factory } from "../factory/Factory";
import { IdCard } from "../idCard/IdCard";
import { Product } from "../product/Product";

export class IdCardFactory extends Factory {
  public readonly owners: Array<string> = [];

  protected createProduct(owner: string): Product {
    return new IdCard(owner);
  }

  protected registerProduct(product: Product): void {
    this.owners.push((<IdCard>product).owner);
  }
}
