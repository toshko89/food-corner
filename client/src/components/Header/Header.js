import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'


export default function Header() {

  const userCredentials = useSelector(state => state.auth.name || state.auth.email);
  const userId = useSelector(state => state.auth._id);

  return (
    <header className="section-header">
      <section className="header-main shadow-sm bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-1">
              <Link to={"/"} className="brand-wrap mb-0">
                <img alt="#" className="img-fluid" src="img/logo_web.png" />
              </Link>
            </div>
            <div className="col-3 d-flex align-items-center m-none"></div>
            <div className="col-8">
              <div className="d-flex align-items-center justify-content-end pr-5">
                <Link to={"/search"} className="widget-header mr-4 text-dark">
                  <div className="icon d-flex align-items-center">
                    <i className="feather-search h6 mr-2 mb-0"></i> <span>Search</span>
                  </div>
                </Link>
                <Link to={"/restaurants"} className="widget-header mr-4 text-white btn bg-primary m-none">
                  <div className="icon d-flex align-items-center">
                    <i className="feather-disc h6 mr-2 mb-0"></i> <span>Restaurants</span>
                  </div>
                </Link>
                <Link to={"/login"} className="widget-header mr-4 text-dark m-none">
                  <div className="icon d-flex align-items-center">
                    <i className="feather-user h6 mr-2 mb-0"></i> <span>Sign in</span>
                  </div>
                </Link>
                <div className="dropdown mr-4 m-none">
                  <Link to={`/my-account`} className="dropdown-toggle text-dark py-3 d-block" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-expanded="false"> Hi {userCredentials || 'Guest'}
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <Link to={`/my-account`} className="dropdown-item" >My account</Link>
                    <Link to={`/my-account/my-restaurants`} className="dropdown-item" >My restaurants</Link>
                    <a className="dropdown-item" href="/#">Contant us</a>
                    <a className="dropdown-item" href="/#">Term of use</a>
                    <a className="dropdown-item" href="/#">Privacy policy</a>
                    <Link to={"logout"} className="dropdown-item" >Logout</Link>
                  </div>
                </div>
                <Link to={"/card"} className="widget-header mr-4 text-dark">
                  <div className="icon d-flex align-items-center">
                    <i className="feather-shopping-cart h6 mr-2 mb-0"></i> <span>Cart</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}