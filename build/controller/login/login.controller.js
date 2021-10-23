"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
class LoginController {
    constructor() {
        this.ROUTE_PATH = "/login";
        this.userLogin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let loginOption = {
                page_title: "Sign in to Creative Cookie",
            };
            res.render("login/index", loginOption);
        });
    }
}
exports.LoginController = LoginController;
