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
    const handlePaymetn =async ()=>{
        const paymentInfo = {
            cost:percles.cost,
            percleId:percles._id,
            senderEmail:percles.senderEmail,
            percelName:percles.percelName
            // name:percels.percelName
        }
        const res = await instance.post('/create-checkout-session',paymentInfo)
        console.log(res.data);
        window.location.href = res.data.url;
    }
    if(isLoading){
        return <p>Loading....</p>
    }
    return (
        <div>
            <h2>please pay ${percles.cost} for : {percles.percelName}</h2>
            <button onClick={handlePaymetn} className='btn btn-ghost'>Pay</button>
            {console.log('id percles',percles)}
        </div>
    );
};

export default Payment;