import React, { useState } from "react";
// import './.css';'
import "./product.css";
import { useStateValue } from "./StateProvider";
import { Link, NavLink } from "react-router-dom";

function Product({ id, name, symbol, marketcap, volume, image, priceChange }) {
  const [{ basket }, dispatch] = useStateValue();
  const [Btn, setbtn] = useState();

  const addToBasket = () => {
    setbtn(
      <Link to="/checkout">
        <button className="btn_">VIEW</button>
      </Link>
    );
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        symbol: symbol,
        marketcap: marketcap,
        volume: volume,
        image: image,
        priceChange: priceChange,
      },
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

            <button className="btn" onClick={addToBasket}>
              {Btn} SAVE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
