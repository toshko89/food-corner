import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login.js';
import Logout from './components/auth/Logout.js';
import Profile from './components/auth/Profile.js';
import Register from './components/auth/Register.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Home from './components/home/Home.js';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/my-account" element={<Profile />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
