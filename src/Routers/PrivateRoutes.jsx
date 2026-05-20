import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    if (loading) {
        return <p>Loading....</p>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoutes;