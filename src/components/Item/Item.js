import React from 'react'

export const Item = ({imgUrl, title, price}) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={imgUrl} className="card-img-top" alt="imagen" />
        <div className="card-body">
          <h5 className="card-title" style={{ color: 'black' }}>{title}</h5>
          <p className="card-text" style={{ color: 'black' }}>$ {price}</p>
          <a href="#" className="btn btn-dark">+ Info</a>
        </div>
      </div>
    </div>
  )
}