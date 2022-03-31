import './App.css';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemsListContainer } from "./components/ItemsListContainer/ItemsListContainer";

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <ItemsListContainer/>
    </div>
);
}

export default App;
