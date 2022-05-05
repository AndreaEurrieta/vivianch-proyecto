import React from 'react'
import { Link } from 'react-router-dom'

export const CartEmpty = () => {
  return (
    <div>
        <p>Carrito vacio</p>
        <Link to={'/'}>Volver al home</Link>
    </div>
  )
}