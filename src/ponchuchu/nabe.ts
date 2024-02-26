// abstract Factory
abstract class HotpotFactory {
  abstract getSoup(): Soup;
  abstract getProtein(): Protein;
}

// Concrete Factory
// 水炊き鍋
class MizutakiFactory extends HotpotFactory {
  getSoup(): Soup {
    return new MisoSoup();
  }
  getProtein(): Protein {
    return new Chicken();
  }
}
// キムチ鍋
class KimchiFactory extends HotpotFactory {
  getSoup(): Soup {
    return new KimchiSoup();
  }
  getProtein(): Protein {
    return new Chicken();
  }
}
// すきやき鍋
class SukiyakiFactory extends HotpotFactory {
  getSoup(): Soup {
    return new SukiyakiSoup();
  }

  // 返り値に型が違うのに、なぜエラーにならないのか？
  getProtein(): Soup {
    return new Beef();
  }
}

// abstract Product
abstract class Soup {}
abstract class Protein {}

// concrete Product
class MisoSoup extends Soup {}
class KimchiSoup extends Soup {}
class SukiyakiSoup extends Soup {}

class Chicken extends Protein {}
class Beef extends Protein {}

class Pot {}

// なべ
class HotPot {
  constructor(public pot: Pot, public soup: Soup, public protein: Protein) {}
}

// 主クラス
class HotPotMaker {
  private static factoryMap: { [type: string]: HotpotFactory } = {
    mizutaki: new MizutakiFactory(),
    kimchi: new KimchiFactory(),
    sukiyaki: new SukiyakiFactory(),
  };

  static makeHotPot(type: keyof typeof HotPotMaker.factoryMap): HotPot {
    const factory = HotPotMaker.factoryMap[type];
    if (!factory) {
      throw new Error("Invalid type");
    }
    return new HotPot(new Pot(), factory.getSoup(), factory.getProtein());
  }
}

function main() {
  const mizutakiHotpot = HotPotMaker.makeHotPot("mizutaki");
  console.log(mizutakiHotpot);

  const kimchiHotpot = HotPotMaker.makeHotPot("kimchi");
  console.log(kimchiHotpot);

  const sukiyakiHotpot = HotPotMaker.makeHotPot("sukiyaki");
  console.log(sukiyakiHotpot);
}

main();
