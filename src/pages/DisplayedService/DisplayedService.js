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
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveServices } from "../../redux/actions";
import "./DisplayedService.css";
import { useGetServices } from "./hook/useGetServices";
import NavBar from "../../components/NavBar";
import { useHandleDelete } from "./hook/useHandleDelete";
import { useHandleFilterService } from "./hook/useHandleFilterService";
import Footer from "../../components/Footer";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
var DisplayedService = function () {
    var navigate = useNavigate();
    var dispatch = useDispatch();
    var getServices = useGetServices().getServices;
    var handleDelete = useHandleDelete().handleDelete;
    var service = useSelector(function (state) { return state.helpers.services; });
    var getServicesFromApi = function () { return __awaiter(void 0, void 0, void 0, function () {
        var services;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getServices()];
                case 1:
                    services = _a.sent();
                    console.log(services, "userServices");
                    dispatch(saveServices(services));
                    return [2 /*return*/];
            }
        });
    }); };
    var _a = useHandleFilterService(service), filteredService = _a.filteredService, searchWord = _a.searchWord, handleInputSearch = _a.handleInputSearch;
    useEffect(function () {
        getServicesFromApi();
    }, []);
    var handleEdit = function (userData) {
        navigate("/editService", { state: { userData: userData } });
    };
    return (React.createElement("div", null,
        React.createElement(NavBar, null),
        React.createElement("div", { className: "bg-[#ffffff] h-[100vh] p-10" },
            React.createElement("div", { className: " h-[70px] md:h-[103px] max-w-[1300px] movingGradient  mx-auto justify-start rounded-[6px] border p-5 " },
                React.createElement("input", { value: searchWord, onChange: handleInputSearch, className: "max-w-[300px] w-[270px] md:w-[550px] outline-none text-black text-[12px] md:text-[15px] border h-8 md:h-16 p-2 rounded-md", placeholder: "search here", type: "text" })),
            React.createElement("div", null, filteredService === null || filteredService === void 0 ? void 0 : filteredService.map(function (item) {
                var _a, _b, _c;
                return (React.createElement("div", { key: item._id, className: "text-white p-3 md:p-5 flex max-w-[500px] md:max-w-[800px] border-purple-500 mt-5 lg:max-w-[1300px] mx-auto justify-between border h-20 md:h-32 text-center rounded-[12px]" },
                    React.createElement("div", { className: "grid" },
                        React.createElement("div", { className: "flex gap-2 md:gap-3 text-center" },
                            React.createElement("h2", { className: "text-[#371941f5] text-[15px] md:text-[18px] font-bold" }, item.service),
                            React.createElement("h2", { className: "text-[#371941f5] text-[15px] md:text-[18px] font-bold" }, item.category)),
                        React.createElement("div", { className: "flex md:justify-between text-center" },
                            React.createElement("h2", { className: "border-2 text-[9px] md:text-[15px] bg-[#4a93d8] p-1 md:p-2 h-6 md:h-10 font-semibold rounded-lg justify-center align-center" }, (_a = item.contact) === null || _a === void 0 ? void 0 : _a.name),
                            React.createElement("h2", { className: "mx-4 border-2 text-[9px] md:text-[15px] bg-[#bd5de2] p-1 md:p-2 h-6 md:h-10 font-semibold rounded-lg justify-center align-center" }, (_b = item.contact) === null || _b === void 0 ? void 0 : _b.email),
                            React.createElement("h2", { className: "border-2 text-[9px] md:text-[15px] bg-[#bd5de2] p-1 md:p-2 h-6 md:h-10 font-semibold rounded-lg justify-center align-center" }, (_c = item.contact) === null || _c === void 0 ? void 0 : _c.phone))),
                    React.createElement("div", { className: "grid md:flex md:justify-between gap-2 md:gap-28" },
                        React.createElement(FaEdit, { onClick: function () { return handleEdit(item); }, className: "text-center md:hidden text-[#371941f5] bg-white " }),
                        React.createElement("button", { className: "bg-[#371941f5] hidden md:block h-7 md:h-10 my-auto w-16 md:w-24 rounded p-1 text-[12px] md:text-[15px]", onClick: function () { return handleEdit(item); } }, "Edit"),
                        React.createElement(MdDelete, { onClick: function () { return handleDelete(item); }, className: "text-center md:hidden text-[#371941f5] bg-white " }),
                        React.createElement("button", { className: "bg-[#371941f5] h-7 hidden md:block md:h-10 my-auto w-16 md:w-24 rounded p-1 text-[12px] md:text-[15px]", onClick: function () { return handleDelete(item); } }, "Delete"))));
            }))),
        React.createElement(Footer, null)));
};
export default DisplayedService;
