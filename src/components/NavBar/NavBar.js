import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { GetCategories } from '../ItemDetail/GetCategories';
import './CartWidget/CartWidget';
import { CartWidget } from './CartWidget/CartWidget';
import { context } from '../../Context/ContextProvider';

export const NavBar = () => {
  const {cart} = useContext(context)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    GetCategories().then(categories => {
      setCategories(categories)
    })
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {
          (cart.length !== 0) && <CartWidget />
        }
        <Link to='/' className="navbar-brand" href="#">VIVIANCH</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
            {categories.map(cat =>
              <NavLink key={cat.id} to={`/category/${cat.id}`} className="nav-link">{cat.description}</NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}