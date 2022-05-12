import { useContext } from "react"
import { context } from "../../Context/ContextProvider"
import { handleBuy } from "../../services/services"
import { CartEmpty } from "./CartEmpty"
import { CartItem } from "./CartItem"

export const Cart = () => {

  const { cart, handeleDeleteItem, user, totalPrice } = useContext(context)

  const finishBuy = () =>{
    handleBuy(cart, totalPrice)
  }

  return (
    <div>
      {
        (cart.length === 0)
          ? <CartEmpty />
          : cart.map((item, i) => (
            <CartItem
              key={i}
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
          <h6>{totalPrice}</h6>
            <button className="btn btn-primary" onClick={finishBuy}>comprar</button>
    </div>
  )
}