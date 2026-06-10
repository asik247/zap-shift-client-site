
import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';

const AdminRoutes = ({children}) => {
    const {loading} = useAuth()
    const {role,roleLoading} = useRole();
    console.log('admin route role',role);
    if(loading || roleLoading){
        return <p>loadinggg.........</p>
    }
    if(role !=='admin'){
        return <>
            <h2 className='text-2xl text-red-500'>You are forbidien to access the page!</h2>
        </>
    }

    return children
};

export default AdminRoutes;