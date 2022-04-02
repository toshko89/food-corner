import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const OwnerGuard = ({ children, restaurant }) => {
  console.log(restaurant);
  const user = useSelector(state => state.auth);
  console.log(user);
  if (user && user._id === restaurant.owner) {
    return children;
  } else {
    return <Navigate to={'/login'} replace />;
  }

}

export default OwnerGuard