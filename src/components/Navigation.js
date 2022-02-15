import React from "react";
import { Link } from "react-router-dom";
import "../scss/style.css";

const Navigation = () => {
  return (
    <>
      <nav>
        <div>
          <Link to="/" className="logo">
            <img src="./images/logo.png" />
          </Link>
          <section className="right">
            <Link to="/" className="link">
              home
            </Link>
            <Link to="/products" className="link">
              products
            </Link>
            <Link to="/cart" className="cart">
              <div>
                <span>2</span>
                <img src="./images/cart.png" />
              </div>
            </Link>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
