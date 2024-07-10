import net from "net";
const client = net.createConnection({ port: 3000 });

client.on("connect", () => {
  //const mensaje = { path: "users" }
  const mensaje = { path: "products" };
  //const mensaje = { path: "users/id", id: 7 }
  //const mensaje = { path: "products/id", id: 3 };
  //const mensaje = { path: "users/email", email: "" };
  //const mensaje = { path: "products/description", description: "" };

  const message = JSON.stringify(mensaje);
  client.write(message);
});

client.on("data", (serverMessage: string) => {
  const mensaje = serverMessage.toString();
  const mensajeJs = JSON.parse(mensaje);
  console.log(mensajeJs);
});
