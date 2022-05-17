import React, { createContext, useState } from 'react';

export const context = createContext()
const { Provider } = context;

export const ContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [totalUn, setTotalUn] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [buyerData, setBuyerData] = useState(0)


  const handleAddItem = (item, id, confirmAmount) => {
    const itemsPrice = item.price * confirmAmount;
    if (isInCart(item)) {
      cart.map(product => {
        if (product.id === id) {
          product.cant = product.cant + confirmAmount
        }
      })
    } else {
      item.cant = confirmAmount
      setCart([...cart, item])
    }
    setTotalUn(totalUn + confirmAmount);

    setTotalPrice(totalPrice + itemsPrice);
  };


  const handeleDeleteItem = (id) => {

    const newCartValue = cart.filter(product => product.id !== id)
    cart.map(item => {

      const itemsPrice = item.price * item.cant;

      if (item.id === id) {

        setTotalUn(totalUn - item.cant);
        setTotalPrice(totalPrice - itemsPrice);

      }
    })
    setCart(newCartValue)
  };

  const handleClearCart = () => {
    setCart([])
  };

  const shipingData = (data) => {
    setBuyerData(data)
  }

  const isInCart = (item) => {
    const isInCartValue = cart.includes(item)
    return isInCartValue
  }
  const ContextValue = {
    cart,
    handleAddItem,
    totalUn,
    handeleDeleteItem,
    totalPrice,
    shipingData,
    buyerData
  }
  return (
    <Provider value={ContextValue}>
      {children}
    </Provider>
  )
}
