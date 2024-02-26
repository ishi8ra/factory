/**
 * abstract class Pizza {
  abstract pizzaName: string;
  toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
  open(): void {
    console.log(`Delivery: ${this.pizzaName} with toppings: ${this.toppings.join(", ")}`);
  }
}
class StandardPizza extends Pizza {
  pizzaName = "StandardPizza";
}
class TokyoPizza extends Pizza {
  pizzaName = "TokyoPizza";
}
class OsakaPizza extends Pizza {
  pizzaName = "OsakaPizza";
}
class OkinawaPizza extends Pizza {
  pizzaName = "OkinawaPizza";
}
class VeganPizza extends Pizza {
  pizzaName = "VeganPizza";
}
class SeafoodPizza extends Pizza {
  pizzaName = "SeafoodPizza";
}

interface PizzaFactory {
  makePizza(order: string, toppings: string[]): Pizza;
  createSpecialOffer(offerType: string): Pizza;
}
class TokyoPizzaFactory implements PizzaFactory {
  makePizza(order: string, toppings: string[] = []): Pizza {
    let pizza: Pizza;
    switch (order) {
      case "StandardPizza":
        pizza = new StandardPizza();
        break;
      case "TokyoPizza":
        pizza = new TokyoPizza();
        break;
      case "VeganPizza":
        pizza = new VeganPizza();
        break;
      case "SeafoodPizza":
        pizza = new SeafoodPizza();
        break;
      default:
        throw new Error("Unsupported pizza type");
    }
    toppings.forEach((topping) => pizza.addTopping(topping));
    return pizza;
  }
  createSpecialOffer(offerType: string): Pizza {
    switch (offerType) {
      case "SeasonalSpecial":
        const seasonalPizza = new TokyoPizza();
        seasonalPizza.addTopping("Fresh mozzarella");
        return seasonalPizza;
      case "BuyOneGetOneFree":
        const standardPizza = new StandardPizza();
        return standardPizza;
      default:
        throw new Error("Unsupported offer type");
    }
  }
}
// class OsakaPizzaFactory implements PizzaFactory {
//   makePizza(pizza: "StandardPizza" | "OsakaPizza"): Pizza {
//     switch (pizza) {
//       case "StandardPizza":
//         return new StandardPizza();
//       case "OsakaPizza":
//         return new OsakaPizza();
//     }
//   }
// }
// class OkinawaPizzaFactory implements PizzaFactory {
//   makePizza(order: "StandardPizza" | "OkinawaPizza"): Pizza {
//     switch (order) {
//       case "StandardPizza":
//         return new StandardPizza();
//       case "OkinawaPizza":
//         return new OkinawaPizza();
//     }
//   }
// }

abstract class Store {
  abstract getPizzaFactory(): PizzaFactory;

  order(order: string, toppings: string[]): Pizza {
    const factory = this.getPizzaFactory();
    return factory.makePizza(order, toppings);
  }
  orderSpecialOffer(offerType: string): Pizza {
    const factory = this.getPizzaFactory();
    return factory.createSpecialOffer(offerType);
  }
}

class PizzaStore extends Store {
  factory: PizzaFactory;

  constructor(factory: PizzaFactory) {
    super();
    this.factory = factory;
  }

  getPizzaFactory() {
    return this.factory;
  }
}

const tokyoStore = new PizzaStore(new TokyoPizzaFactory());
const specialOfferPizza = tokyoStore.orderSpecialOffer("SeasonalSpecial");
pizzaOrderedAtTokyoStore.open();

 */
