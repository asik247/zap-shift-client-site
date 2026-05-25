import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import useInstance from '../../../Hooks/useInstance';
const Payment = () => {
    //Todo user get and instacne and paymentId get;
    const { paymentId } = useParams();
    const {user} = useAuth();
    const instance = useInstance();
    //?TranStack Query implement;
    const {data:percels=[],isLoading} = useQuery({
        queryKey:['percels',paymentId],
        queryFn:async ()=>{
            const res = await instance(`/percelDatas/${paymentId}`,)
            return res.data;
        }
    })
    //?Loding message;
    if(isLoading){
        return <p>loading...</p>
    }
    //!Handler code here;
    const handlePayment = async() => {;
        const paymentInfo = {
            senderEmail:percels.senderEmail,
            percelName:percels.percelName,
            percleId:percels._id,
            cost:percels.cost,
        }
     const res = await instance.post('/create-checkout-session',paymentInfo)
     window.location.href = res.data.url
    }
    return (
        <div>
            <h2>please pay for:-$ {percels.cost} taka this item {percels.percelName}</h2>
            <button onClick={handlePayment} className='btn btn-ghost'>Pay</button>
            {console.log(percels)}
        </div>
    );
};

export default Payment;