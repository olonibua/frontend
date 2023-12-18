import axios from "axios";

export const useEditService = (formData: any, userData: any, user: any) => {
  const editService = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${user.accessToken}`,
      };
      const url = `http://localhost:5001/api/services/${userData._id}`;
      const res = await axios.put(url, formData, { headers });

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return { editService };
};
