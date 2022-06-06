import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, price, image, rating }) {
  //...
  //pulling or exporting

  const [{}, dispatch] = useStateValue();

  //checking
  // console.log("this is basket", basket);

  // to dispatch the item into the data layer
  // creating a function onClick and dispatching using reducer

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product___title">{title}</p>
        <p className="product__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
