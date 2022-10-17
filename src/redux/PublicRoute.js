import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './selectors';

export function PublicRoute({ children, redirect = '/', restricted = false }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  console.log(shouldRedirect);

  return isLoggedIn && restricted ? <Navigate to={redirect} /> : children;
}
