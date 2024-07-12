import net from "net";
import { PORT } from "./constants";
import { endPoints } from "./app";

const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", async (mensaje) => {
    const entrada = await endPoints(mensaje);
    socket.write(entrada);
  });
});
server.listen(PORT, () =>
  console.log("servidor escuchando en puerto: " + PORT)
);
