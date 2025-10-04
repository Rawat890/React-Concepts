import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../store/cartSlice";

function Cart() {
  const [quantities, setQuantities] = useState(0);
  const { itemsArray, tempItemsArray, totalPrice } = useSelector(
    (state) => state.shoppingCart
  );
  console.log(itemsArray);
  console.log("Temp - ", tempItemsArray);
  console.log("price - ", totalPrice);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleUpdate = (id) => {
    dispatch(removeFromCart(id));
  };
  const getQuantity = (tempItemsArray, item) => {
    const currentQuantity =
      tempItemsArray.find((tempItem) => tempItem.id === item.id)?.quantity ||
      item.quantity;
    return currentQuantity;
  };

  const navigation = useNavigate();
  return (
    <div className="wrapper">
      <div className="cart-page-container">
        <div className="cart-container">
          <h2>Your cart</h2>
          {itemsArray.map((item) => {
            return (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt="Image-title" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <div>
                    <input
                      type="number"
                      min="1"
                      value={
                        quantities[item.id] ?? getQuantity(tempItemsArray, item)
                      }
                      onChange={(e) =>
                        setQuantities((prev) => ({
                          ...prev,
                          [item.id]: parseInt(e.target.value, 10),
                        }))
                      }
                    />

                    <button onClick={() => handleUpdate(item.id)}>
                      Update
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="card-total">
            <p>Total: ${totalPrice}</p>
            <button className="back-button" onClick={() => navigation("/")}>
              Back to shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
