import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useInstance from '../../../Hooks/useInstance';

const UsersManagement = () => {
    const instance = useInstance()
    //Todo Transtack querey using load users data in db;
    const {data:users = []} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await instance(`/users`);
            return res.data
        }
    })
    return (
        <div>
             <h2 className="text-4xl">Manage users {users.length}</h2>
        </div>
    );
};

export default UsersManagement;