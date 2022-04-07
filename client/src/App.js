import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Loading } from '@nextui-org/react';
import Login from './components/auth/Login.js';
import Logout from './components/auth/Logout.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import OwnerGuard from './guards/OwnerGuard.js';
import RestaurantMenu from './components/Menu/RestaurantMenu.js';
import IsLoggedIn from './guards/IsLoggedIn.js';
import { verify } from './services/authService.js';
import { autoLoadFavorites, loginStateChange } from './app/auth.js';
import Profile from './components/auth/Profile.js';
import AllComments from './components/Comments/AllComments.js';

const Register = lazy(() => import('./components/auth/Register.js'));
const MyOrders = lazy(() => import('./components/Orders/MyOrders.js'));
const Successful = lazy(() => import('./components/Orders/Successful.js'));
const Checkout = lazy(() => import('./components/Restaurants/Checkout.js'));
const Favorites = lazy(() => import('./components/Restaurants/Favorites.js'));
const MyRestaurants = lazy(() => import('./components/Restaurants/MyRestaurants.js'));
const CreateRestaurant = lazy(() => import('./components/Restaurants/CreateRestaurant.js'));

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
        <Route path="/register" element={
          <Suspense fallback={<Loading type="points" />}>
            <Register />
          </Suspense>}>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/restaurants/:id" element={<RestaurantMenu />}>
          <Route path="edit" element={
            <Suspense fallback={<Loading type="points" />}>
              <OwnerGuard>
                <CreateRestaurant edit={true} />
              </OwnerGuard>
            </Suspense>} />
        </Route>
        <Route path="/restaurants/:id/comments" element={<AllComments />}></Route>
        <Route path="/my-account/:id" element={<IsLoggedIn><Profile /></IsLoggedIn>}>
          <Route path="orders" element={
            <Suspense fallback={<Loading type="points" />}>
              <IsLoggedIn>
                <MyOrders />
              </IsLoggedIn>
            </Suspense>}>
          </Route>
        </Route>
        <Route path="/my-account/:id/favorites" element={
          <Suspense fallback={<Loading type="points" />}>
            <IsLoggedIn>
              <Favorites />
            </IsLoggedIn>
          </Suspense>}>
        </Route>
        <Route path="/my-account/:id/cart" element={
          <Suspense fallback={<Loading type="points" />}>
            <IsLoggedIn>
              <Checkout />
            </IsLoggedIn>
          </Suspense>}>
        </Route>
        <Route path="/my-account/:id/cart/success" element={
          <Suspense fallback={<Loading type="points" />}>
            <IsLoggedIn>
              <Successful />
            </IsLoggedIn>
          </Suspense>}>
        </Route>
        <Route path="/my-account/:id/create-restaurant" element={
          <Suspense fallback={<Loading type="points" />}>
            <IsLoggedIn>
              <CreateRestaurant />
            </IsLoggedIn>
          </Suspense>}>
        </Route>
        <Route path='/my-account/:id/my-restaurants' element={
          <Suspense fallback={<Loading type="points" />}>
            <IsLoggedIn>
              <MyRestaurants />
            </IsLoggedIn>
          </Suspense>}>
        </Route>
        <Route path='*' element={<Navigate to="/" replace />}></Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
