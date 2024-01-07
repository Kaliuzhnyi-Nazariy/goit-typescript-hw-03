class Key {
  private signature: number = Math.random();

  getSignaure(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: object[] = [];

  constructor(protected key: Key) {}

  comeIn(pearson: Person): void {
    if (this.door) {
      this.tenants.push(pearson);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignaure() === this.key.getSignaure()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
