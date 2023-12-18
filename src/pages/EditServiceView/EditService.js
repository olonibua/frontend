import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useUserContext } from "../../components/Context/UseContext";
import { useEditService } from "./hook/useEditService";
import { useHandleEdit } from "./hook/useHandleEdit";
import EditForm from "./component/EditForm";
var EditService = function () {
    var _a;
    var user = useUserContext().user;
    var location = useLocation();
    var userData = (_a = location.state) === null || _a === void 0 ? void 0 : _a.userData;
    console.log(userData);
    var _b = useHandleEdit(userData), formData = _b.formData, handleFormData = _b.handleFormData;
    var editService = useEditService(formData, user, userData).editService;
    return (React.createElement("div", { className: "bg-white text-black h-[100vh]" },
        React.createElement("div", { className: "h-16 md:h-20 flex justify-between text-center " },
            React.createElement("h2", { className: "p-5 md:pl-20 text-[15px] md:text-[23px] text-purple-700 font-bold" }, "Edit Service"),
            React.createElement("div", null,
                React.createElement(Link, { to: "/service" },
                    React.createElement("button", { className: "text-center md:mr-20 border mx-10 hover:bg-purple-600 hover:text-white bg-white border-[#42424255] bg-[#29292988] h-7 md:h-10 rounded-lg my-5 w-[90px] md:w-[140px] text-[13px] font-semibold" }, "close")))),
        React.createElement(EditForm, { handleFormData: handleFormData, formData: formData, editService: editService })));
};
export default EditService;
