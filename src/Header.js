import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  //increasing basket count using useStateValue function

  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  //
  return (
    <div className="header">
      {/* LINK TO HOME PAGE VIA CLICKING ON LOGO */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        ></img>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      {/* LINK TO LOGIN PAGE */}
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLine1">
              Hello {!user ? "Guest" : user?.email.slice(0, 7)}
            </span>
            <span className="header__optionLine2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <Link to="/orders" className="orders_link">
            <span className="header__optionLine1">Returns</span>
            <span className="header__optionLine2">& Orders</span>
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Prime</span>
        </div>
        {/* LINKING ADD TO BASKET BUTTON TO REDIRECT TO CHECKOUT.JS */}
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon fontSize="large" />
            <span className="header__optionLine2 header__basketCount">
              {/* using function here from product.js to increase basket count by 1 */}
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
