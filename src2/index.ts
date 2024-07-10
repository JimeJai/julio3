import net from "net";
import { PORT } from "./constants";
import {
  allProducts,
  idProducts,
  productsDescription,
} from "./controllers/product";

const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", async (mensaje) => {
    const mensajeCliente = mensaje.toString();
    const objetoJs = JSON.parse(mensajeCliente);

    if (objetoJs.path == "products") {
      const dameLaData = await allProducts();
      const productsJson = JSON.stringify(dameLaData);
      socket.write(productsJson);
    } else if (objetoJs.path == "users") {
      //console.log(objetoJs);
    }
  });

  server.listen(PORT, () =>
    console.log("servidor escuchando en puerto: " + PORT)
  );
});
