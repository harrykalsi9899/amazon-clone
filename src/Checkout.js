import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Avicii/August/25thLP/NextSale/V214721272_IN_WLME_Avicii_LP_Mob_Hero_1242x450_8._SX1242_CB406230505_.jpg"
          alt="amazon"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>your shopping cart is empty</h2>
            <p>
              you have no items in your cart,to buy one ,click "add to basket"{" "}
            </p>
          </div>
        ) : (
          <div>
            <h2 checkout__title>Your shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
