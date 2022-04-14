import { Loader } from "../Loader/Loader";
import { ItemDetail } from "./ItemDetail";
import {useState, useEffect} from "react";
import { products } from "../../Data/Data";


const getItemsById = (id) =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(products.find(prod=>prod.id===id));
        
      }, 2000);
    } catch (error) {
      reject(error);
    }
  });

  export const ItemDetailContainer = () => {
  
    const [item, setItem] = useState([]);
    const [load, setLoad] = useState(true);
    
    useEffect(() => {
      setLoad(true)
      getItemsById(3)
        .then((products) => {
  
          setItem(products)
          setLoad(false)
        })
    }, []);
  
    return (
      <div>
        {load && <Loader/>}
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