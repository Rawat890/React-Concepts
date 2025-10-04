import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchShopData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
    setProducts(data.products);
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
              <img src={product.images} alt="Image-title" />
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
