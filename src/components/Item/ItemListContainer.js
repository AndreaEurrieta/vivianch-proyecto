import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { ItemList } from "./ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../services/firebase";


export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
      ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
      : collection(firestoreDb, 'products')

    getDocs(collectionRef).then(response=>{
      const products = response.docs.map(doc =>{
        return {id:doc.id, ...doc.data()}
      })
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