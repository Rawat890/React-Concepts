import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../store/productSlice";
import Loader from "../commonComponents/Loader/Loader";
import EmptyPlaceholder from "../commonComponents/EmptyPlaceholder/EmptyPlaceholder";

function ProductList() {
  const {
    items: products,
    loading,
    status,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch(); //for dispatching products/fetchProducts

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProductList());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <Loader loading={loading} />;
  }
  if (status === "failed") {
    return <EmptyPlaceholder/>
  }

  return (
    <>
      <NavBar />
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
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
