import { Link } from "react-router-dom";
import Products from '../components/Products';
;

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="left-text">
            <em>Are you hungry?</em>
            <h1>Don't wait !</h1>
            <Link to="#" className="order-btn">
              order now
            </Link>
          </div>
          <div>
            <img src="/images/pizza.png" />
          </div>
        </div>
      </section>
      <Products/>
    </>
  );
};

export default Home;
