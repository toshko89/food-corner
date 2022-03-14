import { useEffect, useState } from "react";
import { getOwnRestaurants } from "../../services/restaurantService.js";
import { Loading } from '@nextui-org/react';
import RestaurantCard from "./RestaurantCard.js";

export default function MyRestaurants() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      try {
        const res = await getOwnRestaurants()
        setRestaurants(res);
      } catch (error) {
        throw new Error(error)
      }
    })();
  }, [])

  console.log(restaurants);

  return (
    <div className="osahan-favorites">
      <div className="container most_popular py-5">
        <h2 className="font-weight-bold mb-3">My Restaurants</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            {restaurants.length > 0 ? restaurants.map(res => <RestaurantCard key={res._id} restaurant={res} />) : <Loading type="points" />}
          </div>
        </div>
      </div>
    </div>
  );
}