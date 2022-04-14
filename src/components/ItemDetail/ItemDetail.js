import "./ItemDetail.css";
export const ItemDetail = ({imgUrl, title, price, description}) => {
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
                <button className="cart">Add to cart</button>
            </div>
        </div>
    )
}