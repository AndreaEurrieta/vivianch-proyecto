import { Loader } from "../Loader/Loader";
import { ItemDetail } from "./ItemDetail";
import { useState, useEffect } from "react";
import { firestoreDb } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";




export const ItemDetailContainer = () => {

  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(true);

  const { productId } = useParams()

  useEffect(() => {
    getDoc(doc(firestoreDb, 'products', productId)).then(response => {
      const item = { id: response.id, ...response.data() }
      setItem(item)
      setLoad(false)
    })
  }, [productId]);

  return (
    <div>
      {load && <Loader />}
      <ItemDetail
        item={item}
      />
    </div>
  );
};