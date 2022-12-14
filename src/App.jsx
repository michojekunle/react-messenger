import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './context/auth';

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Navbar/>
          <Routes>
            <Route path = "/" element={<Home/>} />  
            <Route path = "/register" element={<Register/>} />  
            <Route path = "/login" element={<Login/>} />  
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
