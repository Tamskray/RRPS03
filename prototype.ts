// prototype

interface IEnemyPrototype {
  clone(): IEnemyPrototype;
}

class MeleeEnemy implements IEnemyPrototype {
  constructor(
    private name: string,
    private level: number,
    private health: number
  ) {}

  clone(): MeleeEnemy {
    return new MeleeEnemy(this.name, this.level, this.health);
  }

  describe() {
    console.log(
      `name -> ${this.name}\nlevel -> ${this.level}\nHP -> ${this.health}`
    );
  }
}

const draugr = new MeleeEnemy("Draugr", 2, 100);

const clonedDraugr = draugr.clone();
clonedDraugr.describe();
