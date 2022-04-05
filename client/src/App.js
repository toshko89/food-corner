import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Login from './components/auth/Login.js';
import Logout from './components/auth/Logout.js';
// import Profile from './components/auth/Profile.js';
import Register from './components/auth/Register.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import CreateRestaurant from './components/Restaurants/CreateRestaurant.js';
import MyRestaurants from './components/Restaurants/MyRestaurants.js';
import RestaurantMenu from './components/Menu/RestaurantMenu.js'
import { verify } from './services/authService.js';
import OwnerGuard from './guards/OwnerGuard.js';
import { autoLoadFavorites, loginStateChange } from './app/auth.js';
import { Successful } from './components/Orders/Successful.js';
import IsLoggedIn from './guards/IsLoggedIn.js';
import { Loading } from '@nextui-org/react';

const Checkout = lazy(() => import('./components/Restaurants/Checkout.js'));
const Favorites = lazy(() => import('./components/Restaurants/Favorites.js'));
const Profile = lazy(() => import('./components/auth/Profile.js'));

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    (async function fetchData() {
      try {
        const user = await verify();
        dispatch(autoLoadFavorites());
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
        <Route path="/restaurants/:id" element={<RestaurantMenu />}>
          <Route path="edit" element={<OwnerGuard><CreateRestaurant edit={true} /></OwnerGuard>} />
        </Route>
        <Route path="/my-account/:id" element={
          <Suspense fallback={<Loading />}>
            <IsLoggedIn>
              <Profile />
            </IsLoggedIn>
          </Suspense>}>
        </Route>
        <Route path="/my-account/:id/favorites" element={
          <Suspense fallback={<Loading />}>
            <IsLoggedIn>
              <Favorites />
            </IsLoggedIn>
          </Suspense>}>
        </Route>
        <Route path="/my-account/:id/cart" element={
          <Suspense fallback={<Loading />}>
            <IsLoggedIn>
              <Checkout />
            </IsLoggedIn>
          </Suspense>}>
        </Route>
        <Route path="/my-account/:id/cart/success" element={<IsLoggedIn><Successful /></IsLoggedIn>}></Route>
        <Route path="/my-account/:id/create-restaurant" element={<IsLoggedIn><CreateRestaurant /></IsLoggedIn>}></Route>
        <Route path='/my-account/:id/my-restaurants' element={<IsLoggedIn><MyRestaurants /></IsLoggedIn>}></Route>
        <Route path='*' element={<Navigate to="/" replace />}></Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
