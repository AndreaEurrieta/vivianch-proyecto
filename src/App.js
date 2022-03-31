import './App.css';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <ItemListContainer greeting="HOLAAAA TUTOR"/>
    </div>
);
}

export default App;
