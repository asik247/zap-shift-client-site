import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useInstance from '../../../Hooks/useInstance';
const PaymentSuccess = () => {
    const instance = useInstance();
    //!get success_id with useSearch Paremes;
    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get('session_id');
    useEffect(()=>{
        instance.patch(`/payment-success?session_id=${sessionId}`)
        .then(res=>{
            console.log(res.data);
        })
    },[instance,sessionId])
    return (
        <div>
            <h1>your pay successfully done</h1>
        </div>
    );
};

export default PaymentSuccess;