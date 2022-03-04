

export default function Footer() {
  return (
    <footer className="section-footer border-top bg-dark">
      <div className="container">
        <section className="footer-top padding-y py-5">
          <div className="row pt-3">
            <aside className="col-md-4 footer-about">
              <article className="d-flex pb-3">
                <div><img alt="#" src="img/logo_web.png" className="logo-footer mr-3" /></div>
                <div>
                  <h6 className="title text-white">About Us</h6>
                  <p className="text-muted">Some short text about company like You might remember the Dell computer commercials in which a youth reports.</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Facebook" target="_blank" href="/#"><i className="feather-facebook"></i></a>
                    <a className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Instagram" target="_blank" href="/#"><i className="feather-instagram"></i></a>
                    <a className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Youtube" target="_blank" href="/#"><i className="feather-youtube"></i></a>
                    <a className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Twitter" target="_blank" href="/#"><i className="feather-twitter"></i></a>
                  </div>
                </div>
              </article>
            </aside>
            <aside className="col-sm-3 col-md-2 text-white">
              <h6 className="title">Error Pages</h6>
              <ul className="list-unstyled hov_footer">
                <li> <a href="/#" className="text-muted">Not found</a></li>
                <li> <a href="/#" className="text-muted">Maintence</a></li>
                <li> <a href="/#" className="text-muted">Coming Soon</a></li>
              </ul>
            </aside>
            <aside className="col-sm-3 col-md-2 text-white">
              <h6 className="title">Services</h6>
              <ul className="list-unstyled hov_footer">
                <li> <a href="/#" className="text-muted">Delivery Support</a></li>
                <li> <a href="/#" className="text-muted">Contact Us</a></li>
                <li> <a href="/#" className="text-muted">Terms of use</a></li>
                <li> <a href="/#" className="text-muted">Privacy policy</a></li>
              </ul>
            </aside>
            <aside className="col-sm-3  col-md-2 text-white">
              <h6 className="title">For users</h6>
              <ul className="list-unstyled hov_footer">
                <li> <a href="/#" className="text-muted"> User Login </a></li>
                <li> <a href="/#" className="text-muted"> User register </a></li>
                <li> <a href="/#" className="text-muted"> Forgot Password </a></li>
                <li> <a href="/#" className="text-muted"> Account Setting </a></li>
              </ul>
            </aside>
            <aside className="col-sm-3  col-md-2 text-white">
              <h6 className="title">More Pages</h6>
              <ul className="list-unstyled hov_footer">
                <li> <a href="/#" className="text-muted"> Trending </a></li>
                <li> <a href="/#" className="text-muted"> Most popular </a></li>
                <li> <a href="/#" className="text-muted"> Restaurant Details </a></li>
                <li> <a href="/#" className="text-muted"> Favorites </a></li>
              </ul>
            </aside>
          </div>
        </section>
      </div>
      <section className="footer-copyright border-top py-3 bg-light">
        <div className="container d-flex align-items-center">
          <p className="mb-0">2022 Food-Corner This site is made with educational purpose only! No rights reserved</p>
        </div>
      </section>
    </footer>

  );
}