class Key {
  constructor(private signature: number) {
    this.signature = Math.random();
    return this;
  }

  getSignaure(signature: number) {
    return signature;
  }
}

class Pearson {
  private key: Key;

  getKey() {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: Key;
  tenants: object[] = [];
  pearson: Pearson;

  //   constructor(
  //     door: boolean,
  //     key: Key,
  //     tenants: object[] = [],
  //     pearson: Pearson
  //   ) {}

  comeIn(pearson: Pearson) {
    if (this.door) {
      this.tenants.push(pearson);
    }
  }

  openDoor(key: Key) {
    if (key) {
      return true;
    }
    return false;
  }
}

class MyHouse extends House {
  key: Key;

  constructor(savedKey: object) {
    super();
  }
}

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

export {};
