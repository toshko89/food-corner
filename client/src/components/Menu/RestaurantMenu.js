import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { clearRestaurantState, setRestaurantState } from "../../app/restaurant.js";
import { getRestaurantById } from "../../services/restaurantService.js";
import MenuCard from "./MenuCard.js";
import Grid from '@mui/material/Grid';
import RestaurantMenuNavIcons from "./RestaurantMenuNavIcons.js";
import { Loading } from "@nextui-org/react";
import { deleteProduct } from "../../services/productService.js";


export default function RestaurantMenu() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentRestaurant = useSelector(state => state.restaurant);
  const user = useSelector(state => state.auth);
  const isOwner = currentRestaurant.owner === user._id;
  const restaurantInFavorite = user.favorites.includes(currentRestaurant._id);

  useEffect(() => {
    (async function fetchData() {
      try {
        const res = await getRestaurantById(id);
        if (res.message) {
          return;
        }
        dispatch(setRestaurantState(res));
      } catch (error) {
        console.log(error);
        throw new Error(error)
      }
    })();
    return () => {
      dispatch(clearRestaurantState())
    }
  }, [id, dispatch])

  async function deleteProductHandler(productId) {
    try {
      const res = await deleteProduct(id, productId);
      if (res.message) {
        if (res.message === 'Please log in') {
          localStorage.clear('userState');
          navigate('/login');
        } else if (res.message === 'Not authorized to edit this restaurant') {
          navigate('/login');
        }
        return;
      }
      dispatch(clearRestaurantState());
      dispatch(setRestaurantState(res));
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <>
      <div className="offer-section py-4">
        <div className="container position-relative">
          <img alt="restaurant img" src={currentRestaurant.img?.secure_url} className="restaurant-pic" />
          <div className="pt-3 text-white">
            <h2 className="font-weight-bold">{currentRestaurant?.name}</h2>
            <p className="text-white m-0">{currentRestaurant?.city}</p>
            <p className="text-white m-0">{currentRestaurant?.address}</p>
            <div className="rating-wrap d-flex align-items-center mt-2">
              <p className="label-rating text-white ml-2 small"> (245 Reviews)</p>
            </div>
          </div>
          <div className="pb-4">
            <div className="row">
              <div className="col-6 col-md-2">
                <p className="text-white-50 font-weight-bold m-0 small">Delivery</p>
                <p className="text-white m-0">Free</p>
              </div>
              <div className="col-6 col-md-2">
                <p className="text-white-50 font-weight-bold m-0 small">Open time</p>
                <p className="text-white m-0">{currentRestaurant?.working_hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {user._id && <RestaurantMenuNavIcons
          isOwner={isOwner}
          restaurant={currentRestaurant}
          restaurantInFavorite={restaurantInFavorite} />}
        <Outlet />
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {currentRestaurant.products?.length > 0
            ? currentRestaurant.products.map(product =>
              <MenuCard key={product._id}
                isOwner={isOwner}
                deleteProductHandler={deleteProductHandler}
                product={product} />)
            : <Loading type="points" />}
        </Grid>
      </div>
    </>
  )

}
