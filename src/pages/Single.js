import { useParams, useNavigate } from "react-router-dom";
import pizaass from "../data";
import ".././scss/style.css";


const Single = () => {
  const id = useParams();
  let a = pizaass.filter((elm) => {
    return elm._id === id._id;
  });
  
  let navigate = useNavigate();
  console.log(navigate)

  function handleClick(){
    navigate('/')
  }
  
  return (
    <>
    <button className="backbtn" onClick={handleClick}>back</button>
     <h1 className="hh">this product id:</h1>
     <h2 className="prid">{`${id._id}`}</h2>
    </>
  );
};
export default Single;
