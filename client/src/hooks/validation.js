import { useState } from "react";

const useValidation = () => {
  const [error, setError] = useState({});

  const validateconfig = {
    name: [{ required: true, message: "name is required" }],
    price: [{ required: true, message: "price is required" }],
  };

  const validateData = (data) => {
    let isValid = true;
    const errorData = {};
    Object.entries(data).forEach(([key, value]) => {
      validateconfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
          isValid = false;
        }
      });
    });
    setError(errorData);
    return isValid;
  };

  return { validateData, error };
};

export default useValidation;
