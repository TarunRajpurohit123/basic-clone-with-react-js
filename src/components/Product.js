import React from "react";
import { Link } from "react-router-dom";
const Product = ({ pizza }) => {
  return (
    <>
      <Link
        to={`/products/${pizza._id}`}
        style={{ textDecoration: "none", color: "#262626" }}
      >
        <div className="pizza">
          <img src={pizza.image} />
          <div>
            <h1 className="pizza-name">{pizza.name}</h1>
            <span className="pizza-size">{pizza.size}</span>
          </div>
          <div className="last">
            <span className="price">₹ {pizza.price}</span>
            <button>ADD</button>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Product;
