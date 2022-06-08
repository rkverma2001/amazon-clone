import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';
import {useStateValue} from "./StateProvider";

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="Checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/audio/boat/rts/1500x200.gif"
          alt="Checkout ad"
        />
        <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket.map(item => (
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}/>
            ))}
        </div>
      </div>
        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  );
}

export default Checkout;
