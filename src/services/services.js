import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestoreDb } from "./firebase";

export const handleBuy = async (
    { name, phoneNumber, email, address },
    cart,
    total
) => {
    try {
        const orderDetails = {
            buyer: {
                name: name,
                phoneNumber: phoneNumber,
                email: email,
                address: address
            },
            items: cart,
            date: serverTimestamp(),
            total: total
        }
        const storeCollection = collection(firestoreDb, "Orders");
        const order = await addDoc(storeCollection, orderDetails)
    } catch (error) {
        console.log(error)
        // errorAlert(error);
    }
};