// datos (https://dummyjson.com/) que contiene usuarios y productos
// (Ruta para acceder a los usuarios: https://dummyjson.com/users
//     y la ruta para acceder a los products: https://dummyjson.com/products)
import { URL_API } from "../constants";

async function getData(ruta: string) {
  const response = await fetch(URL_API + ruta);
  const data = await response.json(); //extrae body y convierte a js
  //console.log(data);

  return data;
}

export { getData };
