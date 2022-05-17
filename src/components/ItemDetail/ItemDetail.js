import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom";
import { context } from "../../Context/ContextProvider"

export const ItemDetail = ({ item }) => {
    const {imgUrl, title, price, description, id } = item;

    const {cart, handleAddItem} = useContext (context)

    const handleClg =()=>{
        handleAddItem(item, id, amountItemCount)
    }

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
                    amountItemCount >= 1 && 
                    <Link onClick={handleClg} className="button buttonFinish" to="/cart">Terminar compra</Link>
                }
            </div>
        </div>
    )
}