import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getRestaurantById } from "../../services/restaurantService.js";


export default function RestaurantMenu() {

  const { id } = useParams();

  useEffect(() => {
    (async function fetchData() {
      try {
        const res = await getRestaurantById(id);
        console.log(res);
      } catch (error) {
        throw new Error(error)
      }
    })();
  }, [])

  return (
    <>
      <div className="offer-section py-4">
        <div className="container position-relative">
          <img alt="#" src="img/trending1.png" className="restaurant-pic" />
          <div className="pt-3 text-white">
            <h2 className="font-weight-bold">Conrad Chicago Restaurant</h2>
            <p className="text-white m-0">963 Madyson Drive Suite 679</p>
            <div className="rating-wrap d-flex align-items-center mt-2">
              <ul className="rating-stars list-unstyled">
                <li>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star"></i>
                </li>
              </ul>
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
                <p className="text-white m-0">8:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="p-3 bg-primary bg-primary mt-n3 rounded position-relative">
          <div className="d-flex align-items-center">
            <div className="feather_icon">
              <a href="#ratings-and-reviews" className="text-decoration-none text-dark"><i className="p-2 bg-light rounded-circle font-weight-bold  feather-upload"></i></a>
              <a href="#ratings-and-reviews" className="text-decoration-none text-dark mx-2"><i className="p-2 bg-light rounded-circle font-weight-bold  feather-star"></i></a>
              <a href="#ratings-and-reviews" className="text-decoration-none text-dark"><i className="p-2 bg-light rounded-circle font-weight-bold feather-map-pin"></i></a>
            </div>
            <a href="contact-us.html" className="btn btn-sm btn-outline-light ml-auto">Contact</a>
          </div>
        </div>
      </div>
    </>
  )

}