import './App.css';
import { ItemListContainer } from './components/Item/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;

