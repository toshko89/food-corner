

export default function Header() {
  return (
    <header className="section-header">
      <section className="header-main shadow-sm bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-1">
              <a href="/#" className="brand-wrap mb-0">
                <img alt="#" className="img-fluid" src="img/logo_web.png" />
              </a>
            </div>
            <div className="col-3 d-flex align-items-center m-none"></div>
            <div className="col-8">
              <div className="d-flex align-items-center justify-content-end pr-5">
                <a href="/#" className="widget-header mr-4 text-dark">
                  <div className="icon d-flex align-items-center">
                    <i className="feather-search h6 mr-2 mb-0"></i> <span>Search</span>
                  </div>
                </a>
                <a href="/#" className="widget-header mr-4 text-white btn bg-primary m-none">
                  <div className="icon d-flex align-items-center">
                    <i className="feather-disc h6 mr-2 mb-0"></i> <span>Restaurants</span>
                  </div>
                </a>
                <a href="/#" className="widget-header mr-4 text-dark m-none">
                  <div className="icon d-flex align-items-center">
                    <i className="feather-user h6 mr-2 mb-0"></i> <span>Sign in</span>
                  </div>
                </a>
                <div className="dropdown mr-4 m-none">
                  <a href="/#" className="dropdown-toggle text-dark py-3 d-block" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-expanded="false">
                    Hi
                    Osahan
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/#">My account</a>
                    <a className="dropdown-item" href="/#">Delivery support</a>
                    <a className="dropdown-item" href="/#">Contant us</a>
                    <a className="dropdown-item" href="/#">Term of use</a>
                    <a className="dropdown-item" href="/#">Privacy policy</a>
                    <a className="dropdown-item" href="/#">Logout</a>
                  </div>
                </div>
                <a href="/#" className="widget-header mr-4 text-dark">
                  <div className="icon d-flex align-items-center">
                    <i className="feather-shopping-cart h6 mr-2 mb-0"></i> <span>Cart</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}