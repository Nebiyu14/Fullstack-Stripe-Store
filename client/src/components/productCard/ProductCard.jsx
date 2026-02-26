import { useEffect, useState } from "react";
import CardLayout from "./CardLayout";
import "./productCard.css";

function ProductCard() {
  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);

  // async/await method
  useEffect(() => {
    async function fetchAPI() {
      //reset states
      setLoading(true);
      seterror(null);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        console.log(response.ok);

        //http errror throw here manually
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

  //loading
  if (loading) return <h2>Loading product...</h2>;

  //error handling
  if (error)
    return (
      <div style={{ color: "red" }}>
        <h3>Error occurred:</h3>
        <p>{error.message}</p>
        {error.status && <p>status code:{error.status} </p>}
      </div>
    );
  return (
    <div className="card">
      {productArray.map((item) => {
        return <CardLayout key={item.id} product={item} />;
      })}
    </div>
  );
}

export default ProductCard;
