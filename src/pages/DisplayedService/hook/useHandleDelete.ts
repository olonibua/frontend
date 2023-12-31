import React from "react";
import axios from "axios";

import { useUserContext } from "../../../components/Context/UseContext";
import { useDispatch } from "react-redux";
import { deleteService } from "../../../redux/actions";

export const useHandleDelete = () => {
  const { user } = useUserContext();
  const dispatch = useDispatch();
  const handleDelete = async (userData: any) => {
    try {
      const headers = {
        Authorization: `Bearer ${user?.accessToken}`,
      };
      console.log(userData._id, "tolu");
      const url = `http://localhost:5001/api/services/${userData._id}`;
      const res = await axios.delete(url, { headers });
      console.log(res.data);

      if (res.status >= 200 && res.status < 300) {
        dispatch(deleteService(userData._id));
      } else {
        // Handle non-successful response, e.g., display an error message to the user
        console.error(`Delete request failed with status ${res.status}`);
      }
    } catch (err) {
      console.error(err);

      // Handle the error, e.g., display an error message to the user
    }
  };

  return { handleDelete };
};
