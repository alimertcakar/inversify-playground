const TYPES = {
    UserService: Symbol.for("UserService");
}


import { injectable, inject } from "inversify";
import "reflect-metadata";

interface UserService {
  login: () => String;
}

@injectable()
class UserServiceImpl implements UserService {
  login() {
    return "access token...";
  }
}

@injectable()
class UserController {
    constructor(@inject(TYPES.UserService) private userService: UserService){}

    loginUser(){
      return  this.userService.login();
    }
}


const userService = new UserServiceImpl();
const userController = new UserController(userService);

console.log(userController.loginUser());









import { Container } from "inversify";

const myContainer = new Container();
myContainer.bind<UserService>(TYPES.UserService).to(UserServiceImpl);

const UserService = myContainer.get<UserService>(TYPES.UserService)


console.log(userService.login())



