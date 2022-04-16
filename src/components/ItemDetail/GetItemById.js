import { products } from "../../Data/Data";


export const GetItemsById = (id) =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === id));

      }, 2000);
    } catch (error) {
      reject(error);
    }
  });