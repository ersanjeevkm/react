import React, { useEffect } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../store/StateProvider";

function CheckoutProduct({ index, id, image, price, rating, title, hideBtn }) {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", index: index });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="Product Image" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideBtn && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
