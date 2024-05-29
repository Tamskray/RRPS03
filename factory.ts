//factory

class CarFactory {
  public createCar(type: string): Car {
    if (type === "Tesla") {
      return new Tesla();
    } else if (type === "Mercedes") {
      return new Mercedes();
    } else {
      throw new Error("Car type not supported");
    }
  }
}

interface Car {
  model: string;
  drive(): void;
}

class Tesla implements Car {
  public model = "Tesla";

  public drive() {
    console.log(`You are driving a ${this.model}`);
  }
}

class Mercedes implements Car {
  model = "Mercedes";

  public drive() {
    console.log(`You are driving a ${this.model}`);
  }
}

const carFactory = new CarFactory();

const myTesla = carFactory.createCar("Tesla");
myTesla.drive();

const myMercedes = carFactory.createCar("Mercedes");
myMercedes.drive();
