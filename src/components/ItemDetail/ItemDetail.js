import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom";


export const ItemDetail = ({ imgUrl, title, price, description }) => {
    const [amountItemCount, setAmountItemCount] = useState(null);
    const onAdd = (count) => {
        setAmountItemCount(count)
    };

    return (
        <div className="details">
            <div className="big-img">
                <img src={imgUrl} alt="" />
            </div>
            <div className="box">
                <div className="row">
                    <h2>{title}</h2>
                    <span>$ {price}</span>
                </div>
                <p>{description}</p>
                {
                    !amountItemCount && <ItemCount
                        initial={1}
                        stock={10}
                        onAdd={onAdd}
                    />
                }
                {
                    amountItemCount >= 1 && <Link className="cart" to="/Cart">Add to cart</Link>
                }
            </div>
        </div>
    )
}