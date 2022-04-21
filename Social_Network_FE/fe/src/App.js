import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AboutProfile from './pages/profile/AboutProfile'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
