import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AboutProfile from './pages/profile/AboutProfile'
import User from './pages/User';
import './style/index.css'
import { io } from "socket.io-client";


function App() {

  const socket = io('http://localhost:8080');
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
          <Route path='/user' element={<User />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/about' element={<AboutProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
