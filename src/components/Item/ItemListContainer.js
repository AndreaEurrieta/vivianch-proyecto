import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { ItemList } from "./ItemList";
import { GetItems } from "./GetItems";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoad(true)
    GetItems(categoryId)
      .then((products) => {

        setItems(products)
        setLoad(false)
      })
  }, [categoryId]);

  return (
    <div className="row row-cols-2 row-cols-md-3 g-6">
      {load && <Loader />}
      <ItemList
        items={items}
      />
    </div>
  );
};