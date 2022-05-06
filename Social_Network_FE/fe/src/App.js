import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import User from "./pages/User";
import Messages from "./pages/Messages";
import "./style/index.css";
import authContext from "./contexts/authContext";
import socketContext from "./contexts/socketContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function App() {
  const token = useContext(authContext);
  const [user, setUser] = useState(null);
  const decoded = jwt_decode(token);
  const { userId } = decoded;

  const fetchUser = async (userId) => {
    try {
      const res = await axios(`http://localhost:8080/api/user/${userId}`, {
        headers: {
          authorization: token,
        },
      });
      const data = res.data.data;
      const user = data.user;
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser(userId);
  }, []);

  const pathMessages = "/messages" || "/messages/:userId";

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/messages" element={user ? <Messages /> : <Login />}>
            <Route
              path=":userId"
              element={user ? <Messages /> : <Login />}
            ></Route>
          </Route>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
