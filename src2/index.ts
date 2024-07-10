// Obtener todos los usuario (users).
// Obtener un usuario por id(users/id).

// Obtener todos los productos (products).
// Obtener un producto por id(products/id).

import net from "net";
import { PORT } from "./constants";
//import { products } from "./models/product";
import { getAll, getById, getByDescription } from "./models/product";
const server = net.createServer();
server.on("connection", (socket) => {
  socket.on("data", async (mensaje) => {
    const mensajeCliente = mensaje.toString();
    const mensajeJS = JSON.parse(mensajeCliente);
    //estructura mensaje cliente: {path: "products"}
    //mensaje es json, hay q parsearlo
    if (mensajeJS.path == "products") {
      const allProducts = await getAll();
      const productJson = JSON.stringify(allProducts);
      socket.write(productJson);
      return productJson;
    } else if (mensajeJS.path == "users") {
    }
    // console.log(mensajeJS);
  });
  //socket.write("Hola Client");
});

server.listen(PORT, () =>
  console.log("servidor escuchando en puerto: " + PORT)
);

//-----------------------------------------------

// // IMPORTO EL MODULO NET NATIVO DE NODE CON TODAS SUS FUNCIONALIDADES
// const net = require("net")

// // DEFINO EL PUERTO DE COMUNICACIÓN EN EL QUE MI SERVIDOR VA A ESTAR A LA ESCUCHA DE EVENTOS(PETICIONES DE INFORMACIÓN DE CLIENTES)
// const port = 3000;

// // CREO UN SERVIDOR, EL CUAL VA A PODER COMUNICARSE E INTERCAMBIAR INFORMACIÓN CON OTRAS PCs
// const server = net.createServer()

// // CONJUNTO DE ACCIONES QUE VA A REALIZAR CUANDO UN CLIENTE SE CONECTE
// server.on("connection", (socket) => {
//     console.log("cliente conectado");

//     // ENVÍO INFORMACIÓN AL CLIENTE
//     socket.write("Bienvenido a mi servidor!")

//     // IMPRIMO LA INFORMACIÓN QUE ME ENVÍA EL CLIENTE
//     socket.on("data", (mensajeDelCliente) => {
//         console.log("CLIENTE DICE: " + mensajeDelCliente);
//     })
// })

// // LOS MÉTODOS "ON" HACEN REFERENCIA A UN "ESCUCHADOR" DE EVENTOS, CUANDO SUCEDA ALGÚN EVENTO VA A EJECUTAR ALGO:
// //  - "data" --> EVENTO QUE PERMITE CAPTAR CUANDO ALGUIEN ME ENVÍA ALGO
// //  - "connection" --> EVENTO QUE ME PERMITE CAPTAR CUANDO ALGUIEN SE CONECTE AL SERVIDOR

// // "ENCIENDO" EL SERVIDOR Y COMIENZA A ESTAR A LA ESCUCHA
// server.listen(port, () => { // DEFINO EL PUERTO DE COMUNICACIÓN QUE TIENE QUE ESCUCHAR
//     console.log("SERVIDOR ESCUCHANDO EN EL PUERTO " + port); // IMPRIMO UN MENSAJE PARA CORROBORAR QUE ESTÉ ENCENDIDO MI SERVIDOR
// })

// // Ctrl + c apago el servidor
