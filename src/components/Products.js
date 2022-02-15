import { useState, useEffect } from "react";
import Product from "./Product";
import pizaass from "../data";

const Products = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    setPizzas(pizaass);
  });

  return (
    <>
      <section className="products">
        <div className="container">
          <h1>products</h1>
          <div className="products-grid">
            {pizzas.map((pizza) => {
              return <Product pizza={pizza} key={pizza._id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
