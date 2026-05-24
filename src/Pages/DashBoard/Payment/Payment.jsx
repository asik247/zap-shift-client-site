import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useInstance from '../../../Hooks/useInstance';

const Payment = () => {
    const {paymentId} = useParams();
    const instance = useInstance()
    const {data:percles=[],isLoading} = useQuery({
        queryKey:['percles',paymentId],
        queryFn:async()=>{
            const res =await instance(`/percelDatas/${paymentId}`)
            return res.data
        }
        
    })
    if(isLoading){
        return <p>Loading....</p>
    }
    return (
        <div>
            <h2>please paymetn</h2>
            {console.log('id percles',percles)}
        </div>
    );
};

export default Payment;