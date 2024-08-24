// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Users from '../../../data/users'; // Assuming users.js is in the same directory

const PrivateRoute = ({ element: Element, ...rest }) => {
    // Check if there is a user with admin usertype
    const isAdmin = Users.some(user => user.usertype === 'admin');

    return isAdmin ? <Route {...rest} element={<Element />} /> : <Navigate to="/" />;
};

export default PrivateRoute;
