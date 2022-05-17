import React from 'react'
import { Link } from 'react-router-dom'
import './ItemList.css';

export const Item = ({ id, imgUrl, title, price }) => {
  return (
    <div className='col'>
      <div className="card text-center">
        <img src={imgUrl} className="card-img-top" alt="imagen" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">$ {price}</p>
          <Link to={`/item/${id}`} className="btn detailsBtn">Ver detalle</Link>
        </div>
      </div>
    </div>
  )
}
