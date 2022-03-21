import { useEffect, useState } from "react";
import { getAllRestaurants } from "../../services/restaurantService.js";
import { Grid, Loading, Spacer } from '@nextui-org/react';
import HomeCard from "./HomeCard.js";


export default function Home() {

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
  }, [])

  return (
    <>
      <div className="container">
        <div className="py-3 title d-flex align-items-center">
          <h2 className="font-weight-bold mb-3">Most popular</h2>
        </div>
        <div className="most_popular">
          <Grid.Container gap={2} justify="center">
            {restaurants.length > 0
              ? restaurants.map(res => <HomeCard key={res._id} data={res} />)
              : <Loading color="success" size="xl" />}
          </Grid.Container>
        </div>
      </div>
    </>
  );
}
