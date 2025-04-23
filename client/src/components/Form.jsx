import React, { useState } from "react";
import axios from "axios";
import useValidation from "../hooks/validation";

const Form = ({ getProducts }) => {
  const { validateData, error } = useValidation();
  const [data, setData] = useState({
    name: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //using custom hook
    let isValid = validateData(data);
    if (!isValid) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/products`,
        data
      );

      if (!response.data.success) {
        console.log(response.data.message);
        return;
      }
      getProducts();
      setData({
        name: "",
        price: "",
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add product</h1>
      <div className="inputWrapper">
        <label htmlFor="name">Name</label>
        <input
          value={data.name}
          name="name"
          type="text"
          id="name"
          placeholder="add product name"
          onChange={handleChange}
        />
        {error.name && <p>{error.name}</p>}
      </div>
      <div className="inputWrapper">
        <label htmlFor="price">Price</label>
        <input
          value={data.price}
          name="price"
          type="number"
          id="price"
          placeholder="add product price"
          onChange={handleChange}
        />
        {error.price && <p>{error.price}</p>}
      </div>
      <button type="submit">
        {loading ? <span className="spinner" /> : "Add"}
      </button>
    </form>
  );
};

export default Form;
