import "./CartItem.css";

export const CartItem = ({ imgUrl, cant, price, title, id, handeleDeleteItem }) => {

  return (
    <div className="cart">
      <div className="containerCart">
        <div className="div1">
          <img className="img-cart" src={imgUrl} />
        </div>
        <div className="div2">
          <h2 className="name-cart">{title}</h2>
          <p><span className="price-cart">${price}</span></p>
          <p><span className="cant-cart">cantidad = {cant}</span></p>
        </div>
        <div className="div3">
          <button className='btn-delete' onClick={() => { handeleDeleteItem(id) }}><i class="far fa-trash-alt"></i></button>
        </div>
      </div>
    </div>
  )
}