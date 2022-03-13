import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createNewRestaurant } from "../../services/restaurantService.js";

export default function CreateRestaurant() {

  const [error, setError] = useState(null);
  const [file, setFile] = useState([]);
  const [restaurant, setRestaurant] = useState({
    name: '', categorie: '', city: '',
    address: '', workingHours: ''
  });
  const user = useSelector(state => state.auth._id);
  const userCredentials = useSelector(state => state.auth.name || state.auth.email);

  function handleFileChange(e) {
    const file = e.target.files[0];
    setFile(file);
  }

  async function createRestaurant(e) {
    e.preventDefault();
    if (restaurant.name.trim() == '' || restaurant.categorie.trim() == ''
      || restaurant.city.trim() == '' || restaurant.address.trim() == '') {
      setError('All fields are required');
      setRestaurant({ name: '', categorie: '', city: '', address: '', workingHours: '' })
      return;
    }

    if (file.length === 0) {
      setError('Please add cover photo');
      return;
    }

    const data = new FormData();

    if (file.length !== 0) {
      data.append('Cover Photo', file, file.name);
    }

    data.append('Restaurant name', restaurant.name);
    data.append('Restaurant address', restaurant.address);
    data.append('Restaurant categorie', restaurant.categorie);
    data.append('Restaurant city', restaurant.city);
    data.append('Restaurant working hours', restaurant.workingHours);
    data.append('Owner ID', user);
    const newR = await createNewRestaurant(data);

  }

  return (
    <div className="container position-relative">
      {error && <div className="error-container" role="alert"><p>{error}</p></div>}
      <div className="py-5 osahan-profile row">
        <div className="col-md-4 mb-3">
          <div className="bg-white rounded shadow-sm sticky_sidebar overflow-hidden">
            <Link to={`/my-account/${user}/my-restaurants`} >
              <div className="d-flex align-items-center p-3">
                <div className="right">
                  <h6 className="mb-1 font-weight-bold">{userCredentials}<i className="feather-check-circle text-success"></i></h6>
                </div>
              </div>
            </Link>
            <div className="bg-white profile-details">
              <Link to={`/my-account/${user}/my-restaurants`} className="d-flex w-100 align-items-center border-bottom p-3">
                <div className="left mr-3">
                  <h6 className="font-weight-bold mb-1 text-dark">My restaurants</h6>
                  <p className="small text-muted m-0">See own restaurants</p>
                </div>
                <div className="right ml-auto">
                  <h6 className="font-weight-bold m-0"><i className="feather-chevron-right"></i></h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-8 mb-3">
          <div className="rounded shadow-sm p-4 bg-white">
            <h5 className="mb-4">Create the best restaurant</h5>
            <div id="edit_profile">
              <div>
                <form onSubmit={createRestaurant}>
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="text" name="name" className="form-control" id="exampleInputName1d"
                      value={restaurant.name}
                      onChange={(e) => { setRestaurant({ ...restaurant, name: e.target.value }) }}
                      onBlur={() => setError(null)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputNumber1">Categorie</label>
                    <input type="text" name="categorie" className="form-control" id="exampleInputNumber1"
                      value={restaurant.categorie}
                      onChange={(e) => { setRestaurant({ ...restaurant, categorie: e.target.value }) }}
                      onBlur={() => setError(null)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">City</label>
                    <input type="text" name="city" className="form-control" id="exampleInputName1"
                      value={restaurant.city}
                      onChange={(e) => { setRestaurant({ ...restaurant, city: e.target.value }) }}
                      onBlur={() => setError(null)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Address</label>
                    <input type="text" name="address" className="form-control" id="exampleInputEmail1"
                      onChange={(e) => { setRestaurant({ ...restaurant, address: e.target.value }) }}
                      onBlur={() => setError(null)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Working hours</label>
                    <input type="text" name="working_hours" className="form-control" id="exampleInputEmail1"
                      onChange={(e) => { setRestaurant({ ...restaurant, workingHours: e.target.value }) }}
                      onBlur={() => setError(null)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Cover Photo</label>
                    <input type="file" name="cover_photo" className="form-control" id="exampleInputEmail1"
                      onBlur={() => setError(null)} onChange={handleFileChange} />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block">Create Restaurant</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}