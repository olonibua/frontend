import { useEffect, useState } from "react";
export var useHandleFilterService = function (service) {
    var _a = useState(""), searchWord = _a[0], setSearchWord = _a[1];
    var _b = useState([]), filteredService = _b[0], setFilteredService = _b[1];
    var handleInputSearch = function (event) {
        setSearchWord(event.target.value);
    };
    var searchFilteredServices = function () {
        console.log(service, "tolu");
        var filtered = service.filter(function (item) { var _a; return (_a = item.service) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(searchWord === null || searchWord === void 0 ? void 0 : searchWord.toLowerCase()); });
        setFilteredService(filtered);
    };
    useEffect(function () {
        searchFilteredServices();
    }, [searchWord, service]);
    return {
        filteredService: filteredService,
        searchWord: searchWord,
        handleInputSearch: handleInputSearch,
        searchFilteredServices: searchFilteredServices,
    };
};
