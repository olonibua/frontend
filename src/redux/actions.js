import { DELETE_SERVICE, GET_SERVICE } from "./const";
export var deleteService = function (serviceId) { return ({
    type: DELETE_SERVICE,
    payload: { serviceId: serviceId },
}); };
export var saveServices = function (services) { return ({
    type: GET_SERVICE,
    payload: services,
}); };
