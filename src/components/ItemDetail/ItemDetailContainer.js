import { Loader } from "../Loader/Loader";
import { ItemDetail } from "./ItemDetail";
import { useState, useEffect } from "react";
import { products } from "../../Data/Data";
import { GetItemsById } from "./GetItemById";
import { useParams } from "react-router-dom";




export const ItemDetailContainer = () => {

  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(true);

  const { productId } = useParams()

  useEffect(() => {
    setLoad(true)
    GetItemsById(productId)
      .then((products) => {

        setItem(products)
        setLoad(false)
      })
  }, [productId]);

  return (
    <div>
      {load && <Loader />}
      <ItemDetail
        id={item.id}
        imgUrl={item.imgUrl}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    </div>
  );
};