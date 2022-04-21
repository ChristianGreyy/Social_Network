import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import User from "./pages/User";
import Messages from "./pages/Messages";
import "./style/index.css";
import { io } from "socket.io-client";
import authContext from "./contexts/authContext";
import { useContext } from "react";

function App() {
  const socket = io("http://localhost:8080");
  const token = useContext(authContext);
  // console.log(token);
  // socket.on('test', (arg) => {
  //   console.log(arg)
  // })

  // socket.on("connect", () => {
  //   console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  // });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/messages" element={token ? <Messages /> : <Login />} />
          <Route path="/" element={token ? <Home /> : <Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
