import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import CartCard from "./CartCard.js";
import { v4 as uuidv4 } from 'uuid';
import { addToCart, removeFromCart } from '../../app/cart.js';
import { useDispatch } from 'react-redux';


export default function Checkout() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  const orders = useSelector(state => state.cart.orders);
  let orderSum = orders.reduce((acc, curr) => {
    return acc + curr.quantity * curr.product.price;
  }, 0);

  function addToCartClick(item) {
    dispatch(addToCart({ restaurantId: item.restaurantId, product: item.product }));
  }

  function removeFromCartClick(item) {
    dispatch(removeFromCart({ restaurantId: item.restaurantId, product: item.product }))
  }


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
        {orders.length === 0 &&
          <>
            <h2 className="font-weight-bold mb-3">Your cart is empty, check your offers:</h2>
            <Link to={'/'} className="btn btn-success btn-block btn-lg">Restaurants<i className="feather-arrow-right"></i></Link>
          </>}
        {orders.length > 0 &&
          <div className="osahan-cart-item rounded rounded shadow-sm overflow-hidden bg-white sticky_sidebar">
            <div className="bg-white border-bottom py-2">
              {orders.map(product => <CartCard item={product} key={uuidv4()}
                addToCartClick={addToCartClick} removeFromCartClick={removeFromCartClick} />)}
            </div>
            <div className="bg-white p-3 clearfix border-bottom">
              <p className="mb-1">Item Total <span className="float-right text-dark">${orderSum}</span></p>
              <p className="mb-1">Delivery Fee<span className="text-info ml-1"></span><span className="float-right text-dark">${orderSum > 20 ? 'Free' : '3.99'}</span></p>
              <h6 className="font-weight-bold mb-0">TO PAY <span className="float-right">${orderSum > 20 ? orderSum : (orderSum += 3.99).toFixed(2)}</span></h6>
            </div>
            <div className="p-3">
              <Link to={`/my-account/${user._id}/cart/success`} state={user.name} className="btn btn-success btn-block btn-lg">PAY ${orderSum.toFixed(2)}<i className="feather-arrow-right"></i></Link>
            </div>
          </div>}
      </div>
    </div>
  )
}