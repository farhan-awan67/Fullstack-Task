import React from "react";

const ProductList = ({ loading, products }) => {
  return (
    <div className="products">
      <h1>Product List</h1>
      <div className="cardLabel">
        <p>Product name</p>
        <p>Product price</p>
      </div>
      {/* showing products */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        products?.map((product) => {
          return (
            <div key={product._id} className="productCard">
              <h3>{product.name}</h3>
              <h3>{product.price}</h3>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ProductList;
