import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useInstance from '../../../Hooks/useInstance';
import useAuth from '../../../Hooks/useAuth';

const PaymentHistory = () => {
    const instance = useInstance();
    const { user } = useAuth();
    // console.log('current user',user);
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await instance(`/payment?email=${user?.email}`)
            return res.data;

        }
    })
    return (
        <div>
            <p>History {payments.length}</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.NO</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index+1}</th>
                                <td>{payment.percelName}</td>
                                <td>$ {payment.amount}</td>
                                <td>{payment.transactionId}</td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;