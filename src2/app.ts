import {
  allProducts,
  idProducts,
  productsDescription,
} from "./controllers/product";
import { allUsers, idUsers, usersEmail } from "./controllers/user";
import { Messages } from "./utils/messages";

export async function endPoints(mensaje) {
  const mensajeCliente = mensaje.toString();
  const objetoJs = JSON.parse(mensajeCliente);

  if (objetoJs.path == "products") {
    const dameLaData = await allProducts();
    const productsJson = JSON.stringify(dameLaData);
    return productsJson;
  } else if (objetoJs.path == "users") {
    const user = await allUsers();
    const userJson = JSON.stringify(user);
    return userJson;
  } else if (objetoJs.path == "users/id") {
    const userId = await idUsers(objetoJs.id);
    const userIdJson = JSON.stringify(userId);
    return userIdJson;
  } else if (objetoJs.path == "products/id") {
    const productId = await idProducts(objetoJs.id);
    const productIdJson = JSON.stringify(productId);
    return productIdJson;
  } else if (objetoJs.path == "users/email") {
    const userEmail = await usersEmail(objetoJs.email);
    const userEmailJson = JSON.stringify(userEmail);
    return userEmailJson;
  } else if (objetoJs.path == "products/description") {
    const productDescription = await productsDescription(objetoJs.description);
    const productDescJson = JSON.stringify(productDescription);
    return productDescJson;
  } else {
    const messege = JSON.stringify(Messages.BAD_REQUEST);
    return messege;
  }
}
