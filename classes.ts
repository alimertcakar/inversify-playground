// file interfaces.ts

export interface Warrior {
  fight(): string;
  sneak(): string;
}

export interface Weapon {
  hit(): string;
}

export interface ThrowableWeapon {
  throw(): string;
}

// file entities.ts

import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "./di/types";

@injectable()
class Katana implements Weapon {
  public hit() {
    return "cut!";
  }
}

@injectable()
class Shuriken implements ThrowableWeapon {
  public throw() {
    return "hit!";
  }
}

@injectable()
class Ninja implements Warrior {

  public constructor(
    @inject(TYPES.Weapon) private katana: Weapon,
    @inject(TYPES.ThrowableWeapon) private shuriken: ThrowableWeapon
  ) {
    this.katana = katana;
    this.shuriken = shuriken;
  }

  public fight() {
    return this.katana.hit();
  }
  public sneak() {
    return this.shuriken.throw();
  }
}

export { Ninja, Katana, Shuriken };
