import { useContext } from "react"
import { context } from "../../Context/ContextProvider"
import { handleBuy } from "../../services/services"
import { ModalDataUser } from "../Modal/ModalDataUser"
import { CartEmpty } from "./CartEmpty"
import { CartItem } from "./CartItem"

export const Cart = () => {

  const { cart, handeleDeleteItem, totalPrice } = useContext(context)

  const finishBuy = () =>{
    handleBuy(cart, totalPrice)
  }
  return (
    <div  className="cart">
      <div>
      <h2 className="title">mi cesta</h2>
      {
        (cart.length === 0)
          ? <CartEmpty />
          : cart.map((item, i) => (
            <CartItem
              key={i}
              imgUrl={item.imgUrl}
              cant={item.cant}
              category={item.category}
              description={item.description}
              price={item.price}
              title={item.title}
              id={item.id}
              handeleDeleteItem={handeleDeleteItem}
            />
          ))
      }
      </div>
      <div>
        <h6>{totalPrice}</h6>
        <button className="btn btn-primary" onClick={finishBuy}>comprar</button>
        <ModalDataUser />
      </div>
      </div>
  )
}