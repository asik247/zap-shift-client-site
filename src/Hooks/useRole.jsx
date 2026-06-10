
import React from 'react';
import useAuth from './useAuth';
import useInstance from './useInstance';
import { useQuery } from '@tanstack/react-query';
const useRole = () => {
    const {user} = useAuth();
    const instance = useInstance();
    //? using react query;
    const {isLoading:roleLoading,data:role='user'} = useQuery({
        queryKey:['user-role',user?.email],
        queryFn:async()=>{
            const res = await instance.get(`/users/${user?.email}/role`)
            return res.data.role
        }
    })
    return {role,roleLoading}
};

export default useRole;