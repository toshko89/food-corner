import { useSelector } from "react-redux";
import { Link } from "react-router-dom"


export default function Checkout() {

  const user = useSelector(state => state.auth);

  return (
    <div className="container position-relative">
      <div className="osahan-cart-item mb-3 rounded shadow-sm bg-white overflow-hidden">
        <div className="osahan-cart-item-profile bg-white p-3">
          <div className="d-flex flex-column">
            <h6 className="mb-3 font-weight-bold">Delivery Address</h6>
            <div className="row">
              <div className="custom-control col-lg-6 custom-radio mb-3 position-relative border-custom-radio">
                <label className="custom-control-label w-100" htmlFor="customRadioInline1">
                  <div>
                    <div className="p-3 bg-white rounded shadow-sm w-100">
                      <div className="d-flex align-items-center mb-2">
                        <h6 className="mb-0">Home</h6>
                      </div>
                      <p className="small text-muted m-0">{user.address}</p>
                      <p className="small text-muted m-0">{user.city}</p>
                      <p className="small text-muted m-0">{user.phone}</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <Link to={`/my-account/${user._id}`} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"> ADD NEW ADDRESS </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="osahan-cart-item rounded rounded shadow-sm overflow-hidden bg-white sticky_sidebar">
          <div className="d-flex border-bottom osahan-cart-item-profile bg-white p-3">
            <div className="d-flex flex-column">
              <h6 className="mb-1 font-weight-bold">Spice Hut Indian Restaurant</h6>
              <p className="mb-0 small text-muted"><i className="feather-map-pin"></i> 2036 2ND AVE, NEW YORK, NY 10029</p>
            </div>
          </div>
          <div className="bg-white border-bottom py-2">
            <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
              <div className="media align-items-center">
                <div className="media-body">
                  <p className="m-0">Chicken Tikka Sub</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button><input className="count-number-input" type="text" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button></span>
                <p className="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
              </div>
            </div>
            <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
              <div className="media align-items-center">

                <div className="media-body">
                  <p className="m-0">Methi Chicken Dry
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button><input className="count-number-input" type="text" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button></span>
                <p className="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
              </div>
            </div>
            <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
              <div className="media align-items-center">

                <div className="media-body">
                  <p className="m-0">Reshmi Kebab
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button><input className="count-number-input" type="text" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button></span>
                <p className="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
              </div>
            </div>
            <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
              <div className="media align-items-center">

                <div className="media-body">
                  <p className="m-0">Lemon Cheese Dry
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button><input className="count-number-input" type="text" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button></span>
                <p className="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
              </div>
            </div>
            <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2">
              <div className="media align-items-center">

                <div className="media-body">
                  <p className="m-0">Rara Paneer</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button><input className="count-number-input" type="text" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button></span>
                <p className="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 clearfix border-bottom">
            <p className="mb-1">Item Total <span className="float-right text-dark">$3140</span></p>
            <p className="mb-1">Restaurant Charges <span className="float-right text-dark">$62.8</span></p>
            <p className="mb-1">Delivery Fee<span className="text-info ml-1"></span><span className="float-right text-dark">$10</span></p>
            <p className="mb-1 text-success">Total Discount<span className="float-right text-success">$1884</span></p>
            <h6 className="font-weight-bold mb-0">TO PAY <span className="float-right">$1329</span></h6>
          </div>
          <div className="p-3">
            <a className="btn btn-success btn-block btn-lg" href="successful.html">PAY $1329<i className="feather-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}