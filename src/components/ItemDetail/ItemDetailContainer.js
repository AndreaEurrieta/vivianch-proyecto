import { Loader } from "../Loader/Loader";
import { ItemDetail } from "./ItemDetail";
import {useState, useEffect} from "react";
import { products } from "../../Data/Data";


const getItemsById = () =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(products.find(prod=>prod.id));
        
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
      getItemsById()
        .then((products) => {
  
          setItem(products)
          setLoad(false)
        })
    }, []);
  
    return (
      <div>
        {load && <Loader/>}
        <ItemDetail
          item={item}
        />
      </div>
    );
  };