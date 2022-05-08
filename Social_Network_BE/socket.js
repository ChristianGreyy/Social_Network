const { Server } = require("socket.io");
const Messenger = require("./models/messenger.model");

const socketOptions = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
    transports: ["polling"],
    maxHttpBufferSize: 8e6,
  });

  io.on("connection", (socket) => {
    console.log("user conneciton");
    socket.emit("test", "hahaha");
    socket.on(
      "/client-to-server/postMessage",
      async ({ inputValue, userId, myUserId }) => {
        console.log(userId, myUserId);
        let messenger = new Messenger({
          content: inputValue,
          receiverId: userId,
          senderId: myUserId,
        });

        await messenger.save();
        const messengers = await Messenger.find({
          $or: [
            {
              senderId: userId,
              receiverId: myUserId,
            },
            {
              senderId: myUserId,
              receiverId: userId,
            },
          ],
        })
          .populate("receiverId")
          .populate("senderId");
        io.emit("/server-to-client/postMessage", messengers);
      }
    );
  });
};

module.exports = socketOptions;
