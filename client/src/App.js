import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login.js';
import Logout from './components/auth/Logout.js';
import Profile from './components/auth/Profile.js';
import Register from './components/auth/Register.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import AllRestaurants from './components/Restaurants/AllRestaurants.js';
import CreateRestaurant from './components/Restaurants/CreateRestaurant.js';
import MyRestaurants from './components/Restaurants/MyRestaurants.js';
import RestaurantMenu from './components/Menu/RestaurantMenu.js'
import { useEffect } from 'react';
import { verify } from './services/authService.js';
import { useDispatch } from 'react-redux';
import { autoLoadFavorites, loginStateChange } from './app/auth.js';
import OwnerGuard from './guards/OwnerGuard.js';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    (async function fetchData() {
      try {
        const user = await verify();
        dispatch(autoLoadFavorites())
        dispatch(loginStateChange(user))
      } catch (error) {
        throw new Error(error)
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/restaurants" element={<AllRestaurants />}></Route>
        <Route path="/restaurants/:id" element={<RestaurantMenu />}>
          <Route path="edit" element={<OwnerGuard><CreateRestaurant edit={true} /></OwnerGuard>} />
        </Route>
        <Route path="/my-account/:id" element={<Profile />}></Route>
        <Route path="/my-account/:id/create-restaurant" element={<CreateRestaurant />}></Route>
        <Route path='/my-account/:id/my-restaurants' element={<MyRestaurants />}></Route>
        <Route path='*' element={<Navigate to="/" replace />}></Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
