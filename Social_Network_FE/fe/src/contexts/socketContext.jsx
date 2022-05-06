import { io } from "socket.io-client";
import React from "react";
const socket = io("http://localhost:8080");

const socketContext = React.createContext(socket);

export default socketContext;
// console.log(token);
// socket.on('test', (arg) => {
//   console.log(arg)
// })

// socket.on("connect", () => {
//   console.log(socket.id); // x8WIv7-mJelg7on_ALbx
// });
