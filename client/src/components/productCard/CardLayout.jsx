import React from "react";
import "./cardLayout.css";
import Rating from "@mui/material/Rating";
import { useCart } from "../../context/CartContext";

function CardLayout({ singleProduct, flex }) {
  const { add_to_cart } = useCart();

  const addToCart = (singleProduct) => {
    add_to_cart(singleProduct);
  };

  return (
    <div className="card__container">
      <div className="card__image">
        <img src={singleProduct?.image} alt="product" />
      </div>
      <div className="card__title">
        <p>{singleProduct?.title}</p>
      </div>
      <div className="card__price__rating">
        <Rating
          name="half-rating-read"
          defaultValue={singleProduct?.rating?.rate}
          precision={0.5}
          size="small"
          readOnly
        />
        <p>$ {singleProduct?.price}</p>
      </div>
      <div className="card__add_to_cart_btn">
        {flex && (
          <button onClick={() => addToCart(singleProduct)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
}

export default CardLayout;
