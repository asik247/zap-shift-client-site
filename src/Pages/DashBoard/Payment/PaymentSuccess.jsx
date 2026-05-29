import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useInstance from '../../../Hooks/useInstance';
const PaymentSuccess = () => {
    const instance = useInstance();
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    //!UseEffect send session id in server;
    useEffect(()=>{
        instance.patch(`/payment-success?session_id=${sessionId}`)
        .then(res=>{
            console.log(res.data);
        })
    },[instance,sessionId])
    return (
        <div>
            <p>Pay successfully done✅</p>
        </div>
    );
};

export default PaymentSuccess;