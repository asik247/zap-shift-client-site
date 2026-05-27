import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useInstance from '../../../Hooks/useInstance';
const MyParcel2 = () => {
    //?TranStack Query using load parcles data in db;
    const {user} = useAuth();
    const instance = useInstance()
    const {data:parcel = [],isLoading} = useQuery({
        queryKey:['parcels',user?.email],
        queryFn:async()=>{
            const res = await instance(`/percelDatas?${user?.email}`);
            return res.data
        }
    })
    //?Loading state;
    if(isLoading){
        return <p>Loading...</p>
    }
    return (
        <div>
            <p>My Parcel 2 here!{parcel.length}</p>
            {/* 
            1.db get sender parcels data;
            2.show table formate;
            3.pay btn clicked then some info post backed and send session url;
            4.payment success then success page navegate or canceld page navegate;
            */}
        </div>
    );
};

export default MyParcel2;