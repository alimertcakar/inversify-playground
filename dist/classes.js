"use strict";
// file interfaces.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shuriken = exports.Katana = exports.Ninja = void 0;
// file entities.ts
const inversify_1 = require("inversify");
require("reflect-metadata");
const types_1 = require("./di/types");
let Katana = class Katana {
    hit() {
        return "cut!";
    }
};
Katana = __decorate([
    (0, inversify_1.injectable)()
], Katana);
exports.Katana = Katana;
let Shuriken = class Shuriken {
    throw() {
        return "hit!";
    }
};
Shuriken = __decorate([
    (0, inversify_1.injectable)()
], Shuriken);
exports.Shuriken = Shuriken;
let Ninja = class Ninja {
    constructor(katana, shuriken) {
        this.katana = katana;
        this.shuriken = shuriken;
        this.katana = katana;
        this.shuriken = shuriken;
    }
    fight() {
        return this.katana.hit();
    }
    sneak() {
        return this.shuriken.throw();
    }
};
Ninja = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Weapon)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.ThrowableWeapon)),
    __metadata("design:paramtypes", [Object, Object])
], Ninja);
exports.Ninja = Ninja;
