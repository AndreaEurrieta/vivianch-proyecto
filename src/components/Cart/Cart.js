import { useContext } from "react"
import { context } from "../../Context/ContextProvider"
import { CartEmpty } from "./CartEmpty"
import { CartItem } from "./CartItem"

export const Cart = () => {

  const { cart, handeleDeleteItem } = useContext(context)


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
    </div>
  )
}