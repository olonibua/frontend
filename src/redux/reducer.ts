// reducers.js
import { ServiceAction, ServiceState } from "../models/Interface";
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

const initialState: ServiceState = {
  services: [], // You might have other properties in your state as well
};

export const serviceReducer = (
  state: ServiceState = initialState,
  action: ServiceAction
) => {
  switch (action.type) {
    case GET_SERVICE:
      return {
        ...state,
        services: action.payload,
      };
    case DELETE_SERVICE:
      const { serviceId } = action.payload;
      // Implement your logic to remove the service with the specified ID
      const updatedServices = state.services.filter(
        (service) => service._id !== serviceId
      );

      return {
        ...state,
        services: updatedServices,
      };

    // Add other cases as needed for different actions

    default:
      return state;
  }
};
