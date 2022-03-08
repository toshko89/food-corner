import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { changeUserData } from "../../services/authService.js";
import { loginStateChange } from "../../app/auth.js";


export default function Profile() {

  const [error, setError] = useState(null);
  const user = useSelector(state => state.auth._id);
  const userCredentials = useSelector(state => state.auth.name || state.auth.email);
  const dispatch = useDispatch();

  async function changePersonalData(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const city = formData.get('city');
    const address = formData.get('address');

    if (name.trim() == '' || phone.trim() == '' || city.trim() == '' || address.trim() == '') {
      setError('All field are required');
      e.target.reset();
      return;
    }

    const userData = { name, phone, city, address };

    try {
      const userDataChanged = await changeUserData(user, userData);
      if (userDataChanged.message) {
        setError(userDataChanged.message);
        e.target.reset();
        return;
      }
      
      dispatch(loginStateChange(userDataChanged));
      setError('Personal data updated successfully');
      e.target.reset();
    } catch (error) {
      setError(error);
      e.target.reset();
    }

  }

  return (
    <>
      <div className="container position-relative">
        {error && <div className="error-container" role="alert"><p>{error}</p></div>}
        <div className="py-5 osahan-profile row">
          <div className="col-md-4 mb-3">
            <div className="bg-white rounded shadow-sm sticky_sidebar overflow-hidden">
              <Link to={"/my-restaurants"} >
                <div className="d-flex align-items-center p-3">
                  <div className="right">
                    <h6 className="mb-1 font-weight-bold">{userCredentials}<i className="feather-check-circle text-success"></i></h6>
                  </div>
                </div>
              </Link>
              <div className="bg-white profile-details">
                <Link to={"/my-restaurants"} className="d-flex w-100 align-items-center border-bottom p-3">
                  <div className="left mr-3">
                    <h6 className="font-weight-bold mb-1 text-dark">My restaurants</h6>
                    <p className="small text-muted m-0">Add or remove a restaurant</p>
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
              <h5 className="mb-4">My account</h5>
              <div id="edit_profile">
                <div>
                  <form onSubmit={changePersonalData}>
                    <div className="form-group">
                      <label htmlFor="exampleInputName1">Name</label>
                      <input type="text" name="name" className="form-control" id="exampleInputName1d"
                        onBlur={() => setError(null)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputNumber1">Mobile Number</label>
                      <input type="number" name="phone" className="form-control" id="exampleInputNumber1"
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
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}