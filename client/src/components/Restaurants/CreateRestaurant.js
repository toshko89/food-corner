import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CreateRestaurant() {

  const [error, setError] = useState(null);
  const user = useSelector(state => state.auth._id);
  const userCredentials = useSelector(state => state.auth.name || state.auth.email);

  async function createNewRestaurant(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
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
                <form onSubmit={createNewRestaurant}>
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="text" name="name" className="form-control" id="exampleInputName1d"
                      onBlur={() => setError(null)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputNumber1">Categorie</label>
                    <input type="text" name="categorie" className="form-control" id="exampleInputNumber1"
                      onBlur={() => setError(null)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">City</label>
                    <input type="text" name="city" className="form-control" id="exampleInputName1"
                      onBlur={() => setError(null)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Address</label>
                    <input type="text" name="address" className="form-control" id="exampleInputEmail1"
                      onBlur={() => setError(null)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Working hours</label>
                    <input type="text" name="working_hours" className="form-control" id="exampleInputEmail1"
                      onBlur={() => setError(null)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Cover Photo</label>
                    <input type="file" name="cover_photo" className="form-control" id="exampleInputEmail1"
                      onBlur={() => setError(null)} />
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