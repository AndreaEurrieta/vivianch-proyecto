import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../../Context/ContextProvider";
import "./CartWidget.css";
export const CartWidget = () => {

const {totalUn} = useContext(context) 

  return (
    <div>
      <Link to={'/cart'} className="icono-bag">
        <i className="fas fa-shopping-bag"></i>
        <span className="cart-widget-amount">{totalUn}</span>
      </Link>
    </div>
  );
};