"use strict";
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
const TYPES = {
    UserService: Symbol.for("UserService")
};
const inversify_1 = require("inversify");
require("reflect-metadata");
let UserServiceImpl = class UserServiceImpl {
    login() {
        return "access token...";
    }
};
UserServiceImpl = __decorate([
    (0, inversify_1.injectable)()
], UserServiceImpl);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    loginUser() {
        return this.userService.login();
    }
};
UserController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(TYPES.UserService)),
    __metadata("design:paramtypes", [Object])
], UserController);
const inversify_2 = require("inversify");
const myContainer = new inversify_2.Container();
myContainer.bind(TYPES.UserService).to(UserServiceImpl);
const UserService = myContainer.get(TYPES.UserService);
console.log(UserService.login());
