import './App.css';
import { ItemListContainer } from './components/Item/ItemListContainer';
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <ItemListContainer />
    </>
  );
}

export default App;

