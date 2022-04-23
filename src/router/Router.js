import { NavBar } from "../components/NavBar/NavBar"
import { ItemListContainer } from "../components/Item/ItemListContainer"
import { ItemDetailContainer } from "../components/ItemDetail/ItemDetailContainer"
import { Cart } from "../components/Cart/Cart"
import { BrowserRouter, Routes, Route} from 'react-router-dom';

export const Router = ()=>{
    return(
        <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element= {<ItemListContainer/>} />
      <Route path='/category/:categoryId' element= {<ItemListContainer/>} />
      <Route path='/item/:productId' element={<ItemDetailContainer/>} />
      <Route path='*' element={<h1>NOT FOUND 404</h1>} />
      <Route path='/Cart' element={<Cart />} />
    </Routes>
  </BrowserRouter>
  </>
    )}