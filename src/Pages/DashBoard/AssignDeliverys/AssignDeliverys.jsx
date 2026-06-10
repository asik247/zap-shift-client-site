import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useInstance from '../../../Hooks/useInstance';

const AssignDeliverys = () => {
    const {user} = useAuth();
    const instance = useInstance();
    const {data:parcels = []} = useQuery({
        queryKey:['parcels',user?.email,'driver-assign'],
        queryFn:async()=>{
            const res = await instance.get(`/percelDatas/rider?riderEmail=${user?.email}&deliveryStatus=driver-assign`)
            return res.data
        }
    })
    return (
        <div>
            <p>Assign Deliverys {parcels.length}</p>
        </div>
    );
};

export default AssignDeliverys;