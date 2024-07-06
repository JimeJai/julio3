// Obtener todos los usuario (users).
// Obtener un usuario por id(users/id).

// Obtener todos los productos (products).
// Obtener un producto por id(products/id).

import net from "net";
import { PORT } from "./constants";

const server = net.createServer();
server.on("connection", (socket) => {
  socket.on("data", (mensaje) => {
    //estructura mensaje cliente: {path: "products"}
    //mensaje es json, hay q parsearlo
    if (mensaje.path == "products") {
    } else if (mensaje.path == "users") {
    }
    console.log(mensaje);
  });
  socket.write("Hola");
});

server.listen(PORT, () =>
  console.log("servidor escuchando en puerto: " + PORT)
);
