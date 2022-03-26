import { useEffect, useState } from "react"
import { getAllRestaurants } from "../../services/restaurantService.js";
import { Loading } from '@nextui-org/react';


export default function AllRestaurants() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      try {
        const res = await getAllRestaurants();
        setRestaurants(res)
      } catch (error) {
        throw new Error(error)
      }
    })();
  },[])


  return (
    <div className="osahan-favorites">
      <div className="container most_popular py-5">
        <h2 className="font-weight-bold mb-3">Find your flavour</h2>
        <div className="row">
          {/* {restaurants.length > 0 ? restaurants.map(res => <RestaurantCard key={res._id} restaurant={res} />) : <Loading type="points" />} */}
        </div>
      </div>
    </div>
  )
}