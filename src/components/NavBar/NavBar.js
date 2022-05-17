import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import './CartWidget/CartWidget';
import { CartWidget } from './CartWidget/CartWidget';
import { context } from '../../Context/ContextProvider';
import { firestoreDb } from '../../services/firebase';
import { getDocs, collection } from 'firebase/firestore';
import './NavBar.css';

export const NavBar = () => {
  const { cart } = useContext(context)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getDocs(collection(firestoreDb, 'categories')).then(response => {
      const categories = response.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
      setCategories(categories)
      console.log(categories)
    })
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav">
      <div className="container-fluid">
        {
          (cart.length !== 0) && <CartWidget />
        }
        <Link to='/' className="navbar-brand" href="#">VIVIANCH</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
            {categories.map(item =>
              <NavLink key={item.id} to={`/category/${item.id}`} className="nav-link">{item.description}</NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}