import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Foooter from "./Foooter";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://coolztrick.com/wp-content/uploads/2021/01/Jan-ART_DesktopHero_2days_1500x600_count-down._CB661716422_-min.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">
            Your Shopping Cart <span>({basket?.length} items)</span>
          </h2>
          {/* RENDERING ITEMS FROM ADD TO BASKET BUTTON */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
      <div className="footer__container">
        <Foooter />
      </div>
    </div>
  );
}

export default Checkout;
