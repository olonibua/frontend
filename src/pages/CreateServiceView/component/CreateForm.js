import React from "react";
var CreateForm = function (_a) {
    var _b, _c, _d;
    var createService = _a.createService, handleFormData = _a.handleFormData, formData = _a.formData;
    var handleCreateService = function () {
        createService();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "grid grid-cols-4 col-span-2" },
            React.createElement("div", { className: "border p-3 md:p-10 " },
                React.createElement("h2", { className: "flex justify-start text-center rounded md:ml-8 text-[15px] md:text-[21px] font-semibold p-2 " }, "Service")),
            React.createElement("div", { className: "col-span-3 border p-6 md:p-10 space-y-4 bg-white0 bg-slate-50 " },
                React.createElement("div", { className: "grid " },
                    React.createElement("label", { className: "flex text-[13px] md:text-[18px] justify-start font-medium" }, "Service:"),
                    React.createElement("input", { type: "text", name: "service", className: "outline-none text-[13px] md:text-[18px] h-8 md:h-10 mt-2 p-2 rounded-md border", onChange: handleFormData, value: formData === null || formData === void 0 ? void 0 : formData.service, placeholder: "input service" })),
                React.createElement("div", { className: "grid" },
                    React.createElement("label", { className: "flex justify-start text-[13px] md:text-[18px] mt-2 font-medium" }, "Category:"),
                    React.createElement("input", { type: "text", name: "category", className: "outline-none text-[13px] md:text-[18px] h-8 md:h-10 mt-2 p-2 rounded-md border", onChange: handleFormData, value: formData === null || formData === void 0 ? void 0 : formData.category, placeholder: "input category" })),
                React.createElement("div", { className: "" },
                    React.createElement("label", { className: "flex mt-5 md:mt-8 justify-start text-[13px] md:text-[18px] my-2 md:my-4 font-semibold" }, "Contact:"),
                    React.createElement("div", { className: "grid md:flex w-full p-2 md:p-0" },
                        React.createElement("div", { className: "grid w-full" },
                            React.createElement("label", { className: "flex justify-start text-[13px] md:text-[18px]  font-medium " }, "Name:"),
                            React.createElement("input", { type: "text", name: "name", className: "outline-none text-[13px] md:text-[18px] h-8 md:h-10 mt-2 p-2 rounded-md border mb-4 md:mb-0", onChange: handleFormData, value: (_b = formData === null || formData === void 0 ? void 0 : formData.contact) === null || _b === void 0 ? void 0 : _b.name, placeholder: "input name" })),
                        React.createElement("div", { className: "grid w-full md:mx-4" },
                            React.createElement("label", { className: "flex justify-start text-[13px] md:text-[18px]  font-medium " }, "Email:"),
                            React.createElement("input", { type: "text", name: "email", className: "outline-none text-[13px] md:text-[18px] h-8 md:h-10 mt-2 p-2 rounded-md border mb-4 md:mb-0", onChange: handleFormData, value: (_c = formData === null || formData === void 0 ? void 0 : formData.contact) === null || _c === void 0 ? void 0 : _c.email, placeholder: "input email" })),
                        React.createElement("div", { className: "grid w-full" },
                            React.createElement("label", { className: "flex justify-start text-[13px] md:text-[18px]  font-medium " }, "Phone:"),
                            React.createElement("input", { type: "text", name: "phone", className: "outline-none text-[13px] md:text-[18px] h-8 md:h-10 mt-2 p-2 rounded-md border mb-4 md:mb-0", onChange: handleFormData, value: (_d = formData === null || formData === void 0 ? void 0 : formData.contact) === null || _d === void 0 ? void 0 : _d.phone, placeholder: "input phone" })))))),
        React.createElement("div", { className: "mx-auto w-[200px]" },
            React.createElement("button", { onClick: handleCreateService, className: "text-center hover:bg-purple-600 hover:text-white hover:border-0s justify-center border bg-white border-[#42424255] bg-[#29292988] h-8 md:h-10 backdrop:bg-[#e4e4e7] rounded-lg my-5 w-[140px] text-[13px] font-semibold" }, "save"))));
};
export default CreateForm;
