// template method

abstract class Enemy {
  public enemyBehaviour(): void {
    this.attack();
    this.chasePlayer();
    this.patrol();
    this.spawn();
  }

  protected spawn(): void {
    console.log("spawn an enemy");
  }

  // overwrite method
  protected attack(): void {}

  // required
  protected abstract chasePlayer(): void;
  protected abstract patrol(): void;
}

class MeleeEnemy extends Enemy {
  protected attack(): void {
    console.log("attack player with sword");
  }

  protected chasePlayer(): void {
    console.log("chasing player till close range");
  }

  protected patrol(): void {
    console.log("patroling area");
  }
}

class RangeEnemy extends Enemy {
  protected attack(): void {
    console.log("attack player with bow");
  }

  protected chasePlayer(): void {
    console.log("chasing player till shoot range");
  }

  protected patrol(): void {
    console.log("patroling area");
  }
}

const someEnemyWithSword = new MeleeEnemy();
someEnemyWithSword.enemyBehaviour();

console.log("\n\n");

const someEnemyWithBow = new RangeEnemy();
someEnemyWithBow.enemyBehaviour();
