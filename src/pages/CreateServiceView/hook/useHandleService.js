var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useState } from "react";
export var useHandleService = function () {
    var initialFormData = {
        service: "",
        category: "",
        contact: { name: "", email: "", phone: "" },
    };
    var _a = useState(initialFormData), formData = _a[0], setFormData = _a[1];
    var handleFormData = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        if (name === "service") {
            setFormData(function (prevFormData) { return (__assign(__assign({}, prevFormData), { service: value })); });
        }
        else if (name === "category") {
            setFormData(function (prevFormData) { return (__assign(__assign({}, prevFormData), { category: value })); });
        }
        else if (name === "name" || name === "email" || name === "phone") {
            setFormData(function (prevFormData) {
                var _a;
                return (__assign(__assign({}, prevFormData), { contact: __assign(__assign({}, prevFormData.contact), (_a = {}, _a[name] = value, _a)) }));
            });
        }
    };
    var resetForm = function () {
        setFormData(initialFormData);
    };
    return {
        formData: formData,
        handleFormData: handleFormData,
        resetForm: resetForm,
    };
};
