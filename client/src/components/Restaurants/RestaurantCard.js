

export default function RestaurantCard({ restaurant }) {
  console.log(restaurant);
  return (
    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
      <div className="list-card-image">
        <a href="restaurant.html">
          <img alt="#" src={restaurant.img.secure_url} className="img-fluid item-img w-100" />
        </a>
      </div>
      <div className="p-3 position-relative">
        <div className="list-card-body">
          <h6 className="mb-1"><a href="restaurant.html" className="text-black">{restaurant.name}
          </a>
          </h6>
          <p className="text-gray mb-3">{restaurant.categorie}</p>
          <p className="text-gray mb-3 time"><span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock"></i> 15–25 min</span> <span className="float-right text-black-50"> $500 FOR TWO</span></p>
        </div>
        <div className="list-card-badge">
          <span className="badge badge-danger">OFFER</span> <small>65%</small>
        </div>
      </div>
    </div>
  )
}