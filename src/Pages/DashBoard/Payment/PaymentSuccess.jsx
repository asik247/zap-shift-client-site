import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useInstance from '../../../Hooks/useInstance';
const PaymentSuccess = () => {
    const [paymentInfo,setPaymentInfo] = useState({})
    const instance = useInstance();
    //!get success_id with useSearch Paremes;
    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get('session_id');
    useEffect(()=>{
        instance.patch(`/payment-success?session_id=${sessionId}`)
        .then(res=>{
            console.log(res.data);
            setPaymentInfo({
                transactionId:res.data.transactionId,
                trackingId:res.data.trackingId
            })
        })
    },[instance,sessionId])
    return (
        <div>
            <h1>your pay successfully done</h1>
            <br />
            <p>Your TranstationId : {paymentInfo.transactionId}</p>
            <p>Your TrackingId : {paymentInfo.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;