import "./cartItems.css";
import { useCart } from "../../context/CartContext";

function CartItems({ singleProduct }) {
  const {
    deleteSingleItem,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useCart();

  return (
    <div className="cart__container">
      {/* Image */}
      <div className="cart__image">
        <img src={singleProduct?.image} alt="product" />
      </div>

      {/* Middle: title + qty */}
      <div className="cart__details">
        <div className="cart__title">
          <p>{singleProduct?.title}</p>
        </div>
        <div className="cart__quantity">
          <div
            className="cart__quantity__dec"
            title="Decrease quantity"
            onClick={() => decreaseItemQuantity(singleProduct)}
          >
            -
          </div>
          <div className="cart__quantity__value">
            <p>{singleProduct.quantity} qty</p>
          </div>
          <div
            className="cart__quantity__add"
            title="Add more"
            onClick={() => {
              increaseItemQuantity(singleProduct);
            }}
          >
            +
          </div>
        </div>
      </div>

      {/* Right: price + delete */}
      <div className="cart__price__delete">
        <div className="cart__price">
          <p>$ {singleProduct?.price * singleProduct.quantity}</p>
        </div>
        <div className="cart__delete">
          <p
            onClick={() => deleteSingleItem(singleProduct)}
            title="Remove Item"
          >
            Delete
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
