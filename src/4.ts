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

  constructor(key: Key) {}

  comeIn(pearson: Person): void {
    if (this.door) {
      this.tenants.push(pearson);
    }
  }

  openDoor(key: Key): void {
    if (key) {
      this.door = true;
    }
  }
}

class MyHouse extends House {
  private key: Key;

  constructor(savedKey: Key) {
    super(savedKey);
    if (savedKey === this.key) {
      this.openDoor(this.key);
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
