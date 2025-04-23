import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import ProductList from "./components/ProductList";
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/products`
      );
      if (!response.data.success) {
        console.log(response.data.message);
        return;
      }
      setProducts(response.data.products);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="wrapper">
      <Form getProducts={getProducts} />
      <ProductList loading={loading} products={products} />
    </div>
  );
};

export default App;
