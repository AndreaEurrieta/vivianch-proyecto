import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ id, imgUrl, title, price }) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={imgUrl} className="card-img-top" alt="imagen" />
        <div className="card-body">
          <h5 className="card-title" style={{ color: 'black' }}>{title}</h5>
          <p className="card-text" style={{ color: 'black' }}>$ {price}</p>
          <Link to={`/item/${id}`} className="btn btn-dark">Ver detalle</Link>
        </div>
      </div>
    </div>
  )
}