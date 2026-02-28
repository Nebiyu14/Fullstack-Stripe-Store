import { useEffect, useState } from "react";
import CardLayout from "./CardLayout";
import "./productCard.css";

function ProductCard() {
  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      setLoading(true);
      seterror(null);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok)
          throw { message: "HTTP Error", status: response.status };
        const data = await response.json();
        setProductArray(data);
      } catch (error) {
        console.error("Caught error: ", error);
        seterror({ message: error.message, status: error.status });
      } finally {
        setLoading(false);
      }
    }
    fetchAPI();
  }, []);

  if (loading)
    return (
      <div className="product__loading">
        <div className="product__loading__spinner"></div>
        <p>Loading products...</p>
      </div>
    );

  if (error)
    return (
      <div className="product__error">
        <p className="product__error__title">Something went wrong</p>
        <p className="product__error__msg">{error.message}</p>
        {error.status && (
          <p className="product__error__status">Status: {error.status}</p>
        )}
      </div>
    );

  return (
    <div className="card">
      {productArray.map((singleItem) => (
        <CardLayout
          key={singleItem.id}
          singleProduct={singleItem}
          flex={true}
        />
      ))}
    </div>
  );
}

export default ProductCard;
