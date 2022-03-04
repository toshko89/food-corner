import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';


function App() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>

  );
}

export default App;
