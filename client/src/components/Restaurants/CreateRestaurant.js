import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()

  function handleFileChange(e) {
    const file = e.target.files[0];
    setFile(file);
  }

  async function createRestaurant(e) {
    e.preventDefault();
    try {
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
      data.append('CoverPhoto', file, file.name);
      data.append('name', restaurant.name);
      data.append('address', restaurant.address);
      data.append('categorie', restaurant.categorie);
      data.append('city', restaurant.city);
      data.append('workingHours', restaurant.workingHours);
      data.append('OwnerID', user);
      const newResstaurant = await createNewRestaurant(data);
      console.log(newResstaurant);

      if (newResstaurant.message) {
        if (newResstaurant.message.includes('E11000')) {
          setError('Restaurant name is taken, please choose unique one');
          setRestaurant({ ...restaurant, name: '' });
          setFile([]);
          return;
        }
        setError(newResstaurant.message);
        setFile([]);
        return;
      }

      navigate('/my-account/my-restaurants');

    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="container position-relative">
      {error && <div className="error-container" role="alert"><p>{error}</p></div>}
      <div className="py-5 osahan-profile row">
        <div className="col-md-4 mb-3">
          <div className="bg-white rounded shadow-sm sticky_sidebar overflow-hidden">
            <Link to={`/my-account/my-restaurants`} >
              <div className="d-flex align-items-center p-3">
                <div className="right">
                  <h6 className="mb-1 font-weight-bold">{userCredentials}<i className="feather-check-circle text-success"></i></h6>
                </div>
              </div>
            </Link>
            <div className="bg-white profile-details">
              <Link to={`/my-account/my-restaurants`} className="d-flex w-100 align-items-center border-bottom p-3">
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
                      value={restaurant.address}
                      onChange={(e) => { setRestaurant({ ...restaurant, address: e.target.value }) }}
                      onBlur={() => setError(null)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Working hours</label>
                    <input type="text" name="working_hours" className="form-control" id="exampleInputEmail1"
                      value={restaurant.workingHours}
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