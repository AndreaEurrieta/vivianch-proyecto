import './App.css';
import { ItemListContainer } from './components/Item/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<ItemListContainer/>} />
          <Route path='/category/categoryId' element= {<ItemListContainer/>} />
          <Route path='/item/:productId' element={<ItemDetailContainer/>} />
          <Route patch='*' element={<h1>NOT FOUND 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

