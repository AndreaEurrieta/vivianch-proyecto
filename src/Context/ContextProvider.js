import React, { createContext, useState } from 'react';

export const context = createContext()
const { Provider } = context;

export const ContextProvider = ({ children }) => {

const [cart, setCart] = useState([])
const [totalUn, setTotalUn] = useState(0)

const handleAddItem = (item, id, confirmAmount)=>{

  if (isInCart(item)) {
    cart.map( product =>{
      if (product.id === id) {
        product.cant = product.cant + confirmAmount        
      }
    })
  } else {  
    item.cant = confirmAmount
    setCart([...cart, item])
  }
  setTotalUn(totalUn + confirmAmount )

};


const handeleDeleteItem = (id)=>{

  const newCartValue =  cart.filter(product => product.id !== id)
  cart.map(item => (item.id === id) && setTotalUn(totalUn - item.cant))
  setCart(newCartValue)
};

const handleClearCart = ()=>{
  setCart([])
};

const isInCart = (item)=>{
  const isInCartValue = cart.includes(item)
  return isInCartValue
}
const ContextValue = {
  cart,
  handleAddItem,
  totalUn,
  handeleDeleteItem
}
  return (
    <Provider value={ContextValue}>
      {children}
    </Provider>
  )
}
