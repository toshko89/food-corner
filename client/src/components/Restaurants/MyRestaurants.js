import { useEffect, useState } from "react";
import { getOwnRestaurants } from "../../services/restaurantService.js";
import { Loading } from '@nextui-org/react';
import RestaurantCard from "./RestaurantCard.js";
import { useNavigate } from "react-router-dom";

export default function MyRestaurants() {

  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async function fetchData() {
      try {
        const res = await getOwnRestaurants();
        if (res.message) {
          navigate('/login')
        }
        setRestaurants(res);
      } catch (error) {
        throw new Error(error)
      }
    })();
  }, [])


  return (
    <div className="osahan-favorites">
      <div className="container most_popular py-5">
        <h2 className="font-weight-bold mb-3">My Restaurants</h2>
        <div className="row">
          {restaurants.length > 0 ? restaurants.map(res => <RestaurantCard key={res._id} restaurant={res} />) : <Loading type="points" />}
        </div>
      </div>
    </div>
  );
}