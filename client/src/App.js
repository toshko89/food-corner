import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login.js';
import Logout from './components/auth/Logout.js';
import Profile from './components/auth/Profile.js';
import Register from './components/auth/Register.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Home from './components/home/Home.js';
import AllRestaurants from './components/Restaurants/AllRestaurants.js';
import CreateRestaurant from './components/Restaurants/CreateRestaurant.js';
import MyRestaurants from './components/Restaurants/MyRestaurants.js';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/restaurants" element={<AllRestaurants />}></Route>
        
        <Route path="/my-account/:id" element={<Profile />}></Route>
        <Route path="/my-account/:id/create-restaurant" element={<CreateRestaurant />}></Route>
        <Route path='/my-account/:id/my-restaurants' element={<MyRestaurants />}></Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
