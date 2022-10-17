import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './selectors';

export function PublicRoute({ children, redirect = '/', restricted = false }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
// публичный ограниченный маршрут 
  return isLoggedIn && restricted ? <Navigate to={redirect} /> : children;
}
