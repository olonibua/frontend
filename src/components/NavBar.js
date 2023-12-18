import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "./Context/UseContext";
import LogIn from "./User/LogIn";
import CreateAccount from "./User/CreateAccount";
var NavBar = function () {
    var logoutUser = useUserContext().logoutUser;
    var navigate = useNavigate();
    var user = useUserContext().user;
    var _a = useState(false), openSignIn = _a[0], setOpenSignIn = _a[1];
    var _b = useState(false), openRegister = _b[0], setOpenRegister = _b[1];
    var _c = useState(false), showService = _c[0], setShowService = _c[1];
    var logOut = function () {
        logoutUser();
        navigate("/");
    };
    function openService() {
        setShowService(true); // Delay navigation slightly to allow state update
        navigate("/service");
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "h-24 text-center border-b-2 drop-shadow-sm bg-[#ffffff] border-[#e9e9e9] text-black p-5" },
            React.createElement("div", { className: "flex justify-between mt-2" },
                React.createElement("h2", { className: "text-[15px] md:text-[25px] text-[#181818] font-semibold md:pl-20" }, "Service Crud"),
                React.createElement("div", { className: "flex md:pr-16" },
                    !user ? (React.createElement("div", null,
                        React.createElement("button", { onClick: function () { return setOpenSignIn(!openSignIn); }, className: "text-center border-2 bg-white border-[#42424255] bg-[#29292988] mx-1 md:mx-4 backdrop:bg-[#e4e4e7] rounded-lg h-8 w-[90px] md:w-[100px] text-[11px] md:text-[13px] font-semibold" }, "Sign in"),
                        React.createElement("button", { onClick: function () { return setOpenRegister(!openRegister); }, className: "text-center border-2 bg-white border-[#42424255] bg-[#29292988] mx-1 md:mx-4 backdrop:bg-[#e4e4e7] rounded-lg h-8 w-[90px] md:w-[120px] text-[11px] md:text-[13px] font-semibold" }, "Create account"))) : null,
                    React.createElement("div", { className: "flex align-middle justify-items-center" }, user ? (React.createElement("div", null,
                        React.createElement("button", { className: "text-[11px] md:text-[15px] mx-2 mt-2 md:mt-1 cursor-pointer", onClick: function () {
                                openService();
                            } }, "Services"),
                        React.createElement(Link, { to: "/createService" },
                            React.createElement("button", { className: "text-[11px] md:text-[15px] mx-2 mt-2 md:mt-1 cursor-pointer" }, "Create service")),
                        React.createElement("button", { onClick: logOut, className: "text-center border-2 bg-white border-[#42424255] bg-[#29292988] mx-1 md:mx-4 backdrop:bg-[#e4e4e7] rounded-lg h-8 w-[90px] md:w-[100px] text-[11px] md:text-[13px] font-semibold" }, "Sign out"))) : null)))),
        React.createElement("div", { className: openSignIn ? "z-1000" : "z-0" }, openSignIn && (React.createElement("div", { className: "absolute top-0 mx-auto" },
            React.createElement(LogIn, { setOpenSignIn: setOpenSignIn })))),
        React.createElement("div", { className: openRegister ? "z-1000" : "z-0" }, openRegister && (React.createElement("div", { className: "absolute top-0 mx-auto" },
            React.createElement(CreateAccount, { setOpenRegister: setOpenRegister, setOpenSignIn: setOpenSignIn }))))));
};
export default NavBar;
