import { Factory } from "./factory/Factory";
import { IdCardFactory } from "./idCardFactory/IdCardFactory";
import { Product } from "./product/Product";

var factory: Factory = new IdCardFactory();

var card1: Product = factory.create("やまだ");
var card2: Product = factory.create("すずき");
var card3: Product = factory.create("さとう");

card1.use();
card2.use();
card3.use();
