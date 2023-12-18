import { useState } from "react";

export const useHandleService = () => {
  const initialFormData = {
    service: "",
    category: "",
    contact: { name: "", email: "", phone: "" },
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "service") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        service: value,
      }));
    } else if (name === "category") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        category: value,
      }));
    } else if (name === "name" || name === "email" || name === "phone") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        contact: {
          ...prevFormData.contact,
          [name]: value,
        },
      }));
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return {
    formData,
    handleFormData,
    resetForm,
  };
};
