import {Navigate } from 'react-router-dom';
// import { Redirect } from "react-router";
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from "./selectors";


// обертка для маршрута
export function PrivateRoute({ children, redirect = '/' }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? children : <Navigate to={ redirect}/>
}