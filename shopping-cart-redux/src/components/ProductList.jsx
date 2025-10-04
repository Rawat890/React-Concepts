import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchShopData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchShopData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="product-list">
        {products.map((product) => {
          return(<div className="product-card" key={product.id}>
              <img src={product.image} alt="Image-title" />
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <button>Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
