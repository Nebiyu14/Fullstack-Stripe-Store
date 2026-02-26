import React from "react";
import "./cardLayout.css";
import Rating from "@mui/material/Rating";

function CardLayout({ product }) {
  return (
    <div className="card__container">
      <div className="card__image">
        <img src={product.image} alt="product image here" />
      </div>
      <div className="card__title">
        <p>{product.title}</p>
      </div>
      <div className="card__price__rating">
        <Rating
          name="half-rating-read"
          defaultValue={product.rating.rate}
          precision={0.5}
          size="small"
          readOnly
        />
        <p>$ {product.price}</p>
      </div>
      <div className="card__add_to_cart_btn">
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default CardLayout;
