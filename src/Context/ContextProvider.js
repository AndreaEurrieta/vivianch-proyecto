import React from 'react';
import { createContext, useState } from 'react';

export const context= createContext()
const {Provider} = context;

export const ContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const handleAddItem = (item, id, confirmAmount)=>{

        if (isInCart(item)) {
            cart.map(( product )=>{
              if (product.id ===id)  {
                  product.cant = product.cant + confirmAmount
              }
        })
        } else {
            item.cant = confirmAmount
            setCart([...cart, item])
        }
    };

    const handleClearCart = () =>{
        setCart([])
    };

    const handleDeleteItem =(id)=>{
        const newCartValue = cart.filter(product => product.id !==id)
        setCart(newCartValue)
    };

    const  isInCart = (item)=>{
        const isInCartValue = cart.includes(item)
        return isInCartValue
    };

    const ContextValue = {

        cart:cart,
        handleAddItem:handleAddItem,
        total:total
    };


  return (
    <Provider value={ContextValue}>
        { children }
    </Provider>
  )
};
