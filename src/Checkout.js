import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <div>
          <p>SAVE DATA</p>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              name={item.name}
              symbol={item.symbol}
              marketcap={item.marketcap}
              volume={item.volume}
              image={item.image}
              priceChange={item.priceChange}
            />
          ))}
        </div>
      </div>
      <Link to="/">
        <div className="check_btn">
          <button className="btn">BACK</button>
        </div>
      </Link>
    </div>
  );
}

export default Checkout;
