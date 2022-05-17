import React from 'react'
import { Link } from 'react-router-dom'
import './CartItem.css'

export const CartEmpty = () => {
  return (
    <div>
      <div class="alert alert-info">La cesta de compras está vacía.</div>
      <Link className="btnInit initBtn" to={'/'}>Volver al home</Link>
    </div>
  )
}