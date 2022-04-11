import { useEffect, useState } from "react";
import { Loader } from "../loader/Loader";
import { products } from "../../Data/Data";
import { ItemList } from "./ItemList";


const getItems = () =>
  new Promise((resolve, reject) => {
    try {
      // Listado de items
      // Devuelve el listado de items luego de 2 segundos
      setTimeout(() => {
        resolve(products);
        
      }, 2000);
    } catch (error) {
      reject(error);
    }
  });

// Componente
export const ItemListContainer = () => {
  
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(true);
  
  useEffect(() => {
    setLoad(true)
    getItems()
      .then((products) => {

        setItems(products)
        setLoad(false)
      })
  }, []);

  return (
    <div className="row row-cols-2 row-cols-md-3 g-6">
      {load && <Loader/>}
      <ItemList
        items={items}
      />
    </div>
  );
};