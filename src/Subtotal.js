import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { Link } from "react-router-dom";
function Subtotal() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            {/* Rendering Subotal number of item and total amount */}
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs."}
      />
      <Link to={user? "/address" : "/login"}>
        <button className="redirect__subtotalButton">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default Subtotal;
//{user?navigate("/payment") : navigate("/login") }
//onClick={(e) => navigate("/address")}
