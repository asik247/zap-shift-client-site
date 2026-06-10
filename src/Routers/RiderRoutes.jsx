import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';

const RiderRoutes = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = useRole();
    console.log('rider route role',role);
    if (loading || roleLoading) {
        return <p>Loading....</p>
    }
    if (role !== 'rider') {
        return <>
            <h2 className='text-2xl text-red-500'>You are forbidien to access the page!</h2>
        </>

    }
    return children
};

export default RiderRoutes;