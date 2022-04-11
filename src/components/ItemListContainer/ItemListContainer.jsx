import { useEffect, useState } from "react";
import { products } from "./Item/Item";
import { ItemList } from "./ItemList/ItemList";


const getItems = () =>
  new Promise((resolve, reject) => {
    try {
      // Listado de items
      const _items = ({products});
      // Devuelve el listado de items luego de 2 segundos
      setTimeout(() => {
        resolve(_items);
      }, 2000);
    } catch (error) {
      reject(error);
    }
  });

const generateItemsList = (items) =>
  items.map((item) => (
    <div key={item.id} {...item} className="col">
      <ItemList item={item} />
    </div>
  ));

const loadingSpinner = (
  <div className="text-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// Componente
export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [itemsList, setItemsList] = useState(null);
  useEffect(() => {
    getItems().then((_items) => setItems(_items));
  }, []);
  useEffect(() => {
    setItemsList(generateItemsList(items));
  }, [items]);
  return (
    <div className="row row-cols-2 row-cols-md-3 g-6">
      {!items.length && loadingSpinner}
      {items.length && itemsList}
    </div>
  );
};

