import React from "react";
import { Link } from "react-router-dom";
import { useCreateService } from "./hook/useCreateService";
import { useHandleService } from "./hook/useHandleService";
import CreateForm from "./component/CreateForm";
var CreateService = function () {
    var _a = useHandleService(), formData = _a.formData, handleFormData = _a.handleFormData, resetForm = _a.resetForm;
    var createService = useCreateService(formData, resetForm).createService;
    return (React.createElement("div", { className: "bg-white text-black h-[100vh]" },
        React.createElement("div", { className: "h-16 md:h-20 flex justify-between text-center " },
            React.createElement("h2", { className: "p-5 md:pl-20 text-[15px] md:text-[23px] text-purple-800 font-bold" }, "Create Service"),
            React.createElement("div", null,
                React.createElement(Link, { to: "/service" },
                    React.createElement("button", { className: "text-center md:mr-20 border mx-10 hover:bg-purple-600 hover:text-white bg-white border-[#42424255] bg-[#29292988] h-7 md:h-10 rounded-lg my-5 w-[90px] md:w-[140px] text-[13px] font-semibold" }, "close")))),
        React.createElement(CreateForm, { createService: createService, handleFormData: handleFormData, formData: formData })));
};
export default CreateService;
