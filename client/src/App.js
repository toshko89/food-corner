import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login.js';
import Register from './components/auth/Register.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
