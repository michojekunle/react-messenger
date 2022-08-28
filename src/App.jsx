import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>} />  
        <Route path = "/register" element={<Register/>} />  
        <Route path = "/login" element={<Login/>} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
