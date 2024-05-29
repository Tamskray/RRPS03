// observer

interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  attachObserver(observer: Observer): void;
  detachObserver(observer: Observer): void;
  notifyObservers(): void;
}

class EnemyHealth implements Subject {
  constructor(public HP: number) {}

  private observers: Observer[] = [];

  public attachObserver(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Observer has been attached already");
    }

    this.observers.push(observer);
  }

  public detachObserver(observer: Observer): void {
    const removeIndex = this.observers.findIndex((obs) => observer === obs);
    if (removeIndex !== -1) {
      this.observers.splice(removeIndex, 1);
    }
  }

  public notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this);
    }
  }

  public changeHealth(damage: number): void {
    console.log("Enemy changed health");
    this.HP -= damage;
    console.log("Enemy HP: " + this.HP);
    this.notifyObservers();
  }
}

class ConcreteEnemy implements Observer {
  constructor(private name: string) {}

  public update(subject: Subject): void {
    if (subject instanceof EnemyHealth && subject.HP === 0) {
      console.log(`${this.name} is dead`);
    }
  }
}

const product = new EnemyHealth(3);

const enemy1 = new ConcreteEnemy("enemy1");
const enemy2 = new ConcreteEnemy("enemy2");

product.attachObserver(enemy1);
product.attachObserver(enemy2);

product.changeHealth(2);
product.changeHealth(1);
