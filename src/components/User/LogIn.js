var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useState } from "react";
import axios from "axios";
import { useUserContext } from "../Context/UseContext";
var LogIn = function (_a) {
    var setOpenSignIn = _a.setOpenSignIn;
    var setLoggedInUser = useUserContext().setLoggedInUser;
    var _b = useState(), email = _b[0], setEmail = _b[1];
    var _c = useState(), password = _c[0], setPassword = _c[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        if (name === "email") {
            setEmail(value);
        }
        else if (name === "password") {
            setPassword(value);
        }
    };
    var signInUser = function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, response, loggedUser, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    user = {
                        email: email,
                        password: password,
                    };
                    console.log(user);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.post("http://localhost:5001/api/users/login", user)];
                case 2:
                    response = _b.sent();
                    console.log("Log In successfully", response.data);
                    loggedUser = response.data;
                    setLoggedInUser(loggedUser);
                    if (loggedUser) {
                        setOpenSignIn(false);
                        // setShowService(true);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.log("Error during sign in", ((_a = error_1.response) === null || _a === void 0 ? void 0 : _a.data) || error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "bg-[#2864a8] bg-opacity-5 " },
        React.createElement("div", { className: "h-[100vh] w-[100vw] overflow-hidden" },
            React.createElement("div", { className: " text-center  text-black mt-32 h-[400px] w-[400px] mx-auto rounded-lg bg-white drop-shadow-md" },
                React.createElement("button", { className: "flex text-[25px] font-medium justify-end float-right mr-3", onClick: function () { return setOpenSignIn(false); } }, "x"),
                React.createElement("div", { className: "pt-20" },
                    React.createElement("h2", { className: "text-[23px] font-semibold pt-10" }, "Sign In"),
                    React.createElement("div", { className: "text-center flex border-2 mt-5 bg-white border-[#42424255] bg-[#29292988] backdrop:bg-[#e4e4e7] rounded-lg w-[350px] text-[13px] font-semibold mx-auto" },
                        React.createElement("label", { className: "text-[20px] mx-2", id: "email-label", "aria-labelledby": "email-label" }, "Email:"),
                        React.createElement("input", { type: "text", name: "email", value: email, onChange: handleChange, placeholder: "Input your Email Address", className: "p-2 outline-none" })),
                    React.createElement("div", { className: "text-center flex border-2 mt-5 bg-white border-[#42424255] bg-[#29292988] backdrop:bg-[#e4e4e7] rounded-lg w-[350px] text-[13px] font-semibold mx-auto" },
                        React.createElement("label", { className: "text-[20px] mx-2 justify-start" }, "Password:"),
                        React.createElement("input", { name: "password", type: "password", value: password, onChange: handleChange, placeholder: "password", className: "p-2 outline-none" }))),
                React.createElement("button", { onClick: signInUser, className: "text-center border-2 mt-5 bg-white border-[#42424255] bg-[#29292988] backdrop:bg-[#e4e4e7] rounded-lg h-10 w-[150px] mx-2 text-[13px] font-semibold" }, "Sign in")))));
};
export default LogIn;
