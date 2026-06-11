import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useInstance from '../../../Hooks/useInstance';
import { useQuery } from '@tanstack/react-query';

const CompleteDeliveries = () => {
    const { user } = useAuth();
    const instance = useInstance();
    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels', user?.email, 'driver-assign'],
        queryFn: async () => {
            const res = await instance.get(`/percelDatas/rider?riderEmail=${user?.email}&deliveryStatus=parcel_delivered`)
            return res.data
        }
    })
    //? rider got taka✅✅;
    const calculatePaymentTaka = (parcle)=>{
        if(parcle.senderDestrict === parcle.receiverDistrict){
            return parcle.cost *0.8
        }
        else{
            return parcle.cost*0.6
        }
    }
    return (
        <div>
            <p>Complete Deliveries {parcels.length}</p>
              <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>PayOut</th>
                            <th>Other Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* parcels maping and showing table formate */}
                        {
                            parcels.map((parcle, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{parcle.percelName}</td>
                                <td>{parcle.cost}</td>
                                <td>{calculatePaymentTaka(parcle)}</td>
                                {/* <td>
                                    {
                                        parcle.deliveryStatus === 'driver-assign' ? <> <button onClick={() => handlerParcelDelivered(parcle,'rider-arriving')} className="btn bg-green-600-400">Accept</button>
                                            <button className="btn ms-2 bg-red-500">Reject</button></> : <span className='text-2xl text-yellow-300'>Accept</span>
                                    }

                                </td> */}
                                <td>
                                    <button  className="btn bg-green-600-400">Cash Out</button>
                                    {/* <button onClick={() => handlerParcelDelivered(parcle,'parcel_delivered')} className="btn bg-green-600-400">Mark as Delivered</button> */}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
        </div>
    );
};

export default CompleteDeliveries;