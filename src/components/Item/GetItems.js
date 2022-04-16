import { products } from "../../Data/Data";


export const GetItems = (categoryId) =>
  new Promise((resolve, reject) => {
    try {
      // Listado de items
      // Devuelve el listado de items luego de 2 segundos
      setTimeout(() => {
        resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products);

      }, 2000);
    } catch (error) {
      reject(error);
    }
  });