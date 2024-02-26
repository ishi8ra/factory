import { PizzaStore } from "../src/original/Store/Store";
import { TokyoPizzaFactory } from "../src/original/Factory/TokyoPizzaFactory";

const mockPizza = {
  open: jest.fn(),
};

jest.mock("../src/original/Factory/PizzaFactory", () => {
  return {
    TokyoPizzaFactory: jest.fn().mockImplementation(() => {
      return {
        createSpecialOffer: jest.fn().mockImplementation(() => mockPizza),
      };
    }),
  };
});

describe("Hotpot test", () => {
  it("should order a special offer pizza and open it", () => {
    const tokyoPizzaFactory = new TokyoPizzaFactory();
    const tokyoStore = new PizzaStore(tokyoPizzaFactory);

    // 特別オファーピザの注文と開封のテスト
    const specialOfferPizza = tokyoStore.orderSpecialOffer("BuyOneGetOneFree");

    specialOfferPizza.open();
    expect(mockPizza.open).toHaveBeenCalled();

    // createSpecialOfferメソッドの呼び出しを検証
    expect(tokyoPizzaFactory.createSpecialOffer).toHaveBeenCalledWith("BuyOneGetOneFree");
  });
});
