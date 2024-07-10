// IMPORTO EL MODULO NET NATIVO DE NODE CON TODAS SUS FUNCIONALIDADES
import net from "net";

// ME GUARDO LA LOGICA PARA REALIZAR LA CONEXIÓN CON EL SERVIDOR Y DEFINO EL PUERTO DE COMUNICACIÓN EN EL QUE EL SERVIDOR ESTÁ ESCUCHANDO
const client = net.createConnection({ port: 3000 }); //si fuera a otra compu, desp del port tengo q agregarle la dir ip de ese "host", si no aclaro se entiende q la comunicacion es interna

// ME CONECTO CON EL SERVIDOR
client.on("connect", () => {
  // LE ENVÍO UN MENSAJE AL SERVIDOR
  const data = { path: "products" };
  //const data = { path: "users" }
  //const data = { path: "products", id: 3 }
  //const data = { path: "users", id: 7 }
  const messege = JSON.stringify(data);
  client.write(messege);
  //console.log(data);

  //client.write("Hola server!");
});

// ESCUCHO EL EVENTO "DATA", QUE SE VA A EJECUTAR CUANDO EL SERVIDOR ME ENVÍE INFORMACIÓN
client.on("data", (serverMessage: string) => {
  const mensaje = serverMessage.toString();
  const mensajeJs = JSON.parse(mensaje);
  console.log(mensajeJs);
});
//-----------------------------------------------------------------
// client.on("connect", () => {
//   //const data = { action: "create", body: book }//FUNCIONA
//   //const data = { action: "modify", body: { id: "12", name: "nuevo" } }//funciona
//   //const data = { action: "delete", body: { id: 12 } }//funciona
//   const data = { action: "read" }; //funciona
//   //const data = { action: "readOne", body: { id: 11 } }//funciona
//   //const data = { action: "author", body: {author: "George Orwell"} }//funciona
//   //const data = { action: "name", body: {name: "El Señor de los Anillos"} }//funciona
//   const messegeJSON = JSON.stringify(data);
//   client.write(messegeJSON);
// });

// async function writeDb(title: string) {
//   const data = await readFile("./src/db/history.txt", { encoding: "utf-8" });

//   await writeFile("./src/db/history.txt", `${data}\n${title}`);
// }
