import React from "react";
import "./CheckoutProduct.css";
import "./Product";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  id,
  name,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      name: name,
      symbol: symbol,
      marketcap: marketcap,
      volume: volume,
      image: image,
      priceChange: priceChange,
    });
  };

  return (
    <>
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-volume">${volume.toLocaleString()}</p>

            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}

            <button className="btn" onClick={removeFromBasket}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
