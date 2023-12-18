import React from "react";
import axios from "axios";
import { useUserContext } from "../../../components/Context/UseContext";

export const useGetServices = () => {
  const { user } = useUserContext();
  const getServices = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${user?.accessToken}`,
      };

      const url = "http://localhost:5001/api/services";
      const response = await axios.get(url, { headers });

      console.log("User Services:", response.data);
      // setUserService(response.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  return { getServices };
};
