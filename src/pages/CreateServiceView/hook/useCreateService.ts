import React from "react";
import axios from "axios";
import { useUserContext } from "../../../components/Context/UseContext";
import { User } from "../../../models/Interface";

export const useCreateService = (formData: any, resetForm: any) => {
  const { user } = useUserContext();
  const createService = async () => {
    try {
      if (user) {
        const headers = {
          Authorization: `Bearer ${user?.accessToken}`,
        };
        const url = "http://localhost:5001/api/services/";
        const res = await axios.post(url, formData, { headers });
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
    resetForm();
  };

  return { createService };
};
