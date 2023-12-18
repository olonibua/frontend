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
import { DELETE_SERVICE, GET_SERVICE } from "./const";
// interface Service {
//   _id: number;
// }
// interface ServiceState {
//   services: Service[];
// }
// interface DeleteServiceAction {
//   type: typeof DELETE_SERVICE;
//   payload: {
//     serviceId: number;
//   }
// }
// interface SaveServicesAction {
//   type: typeof GET_SERVICE;
//   payload: Service[];
// }
// export type ServiceAction = DeleteServiceAction | SaveServicesAction
var initialState = {
    services: [], // You might have other properties in your state as well
};
export var serviceReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case GET_SERVICE:
            return __assign(__assign({}, state), { services: action.payload });
        case DELETE_SERVICE:
            var serviceId_1 = action.payload.serviceId;
            // Implement your logic to remove the service with the specified ID
            var updatedServices = state.services.filter(function (service) { return service._id !== serviceId_1; });
            return __assign(__assign({}, state), { services: updatedServices });
        // Add other cases as needed for different actions
        default:
            return state;
    }
};
