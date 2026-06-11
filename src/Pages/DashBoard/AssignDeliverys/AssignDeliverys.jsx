import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useInstance from '../../../Hooks/useInstance';
import Swal from 'sweetalert2';

const AssignDeliverys = () => {
    const { user } = useAuth();
    const instance = useInstance();
    const { refetch, data: parcels = [] } = useQuery({
        queryKey: ['parcels', user?.email, 'driver-assign'],
        queryFn: async () => {
            const res = await instance.get(`/percelDatas/rider?riderEmail=${user?.email}&deliveryStatus=driver-assign`)
            return res.data
        }
    })
    //? handler accept delivery;
    const handlerParcelDelivered = (parcle,status) => {
        let message = `Thank you with parcel ${status.split('_').join(' ')}`
        const statusInfo = {
            riderId:parcle.riderId, 
            trackingId:parcle.trackingId,
            deliveryStatus: status
         };
        instance.patch(`/percelDatas/${parcle._id}/status`, statusInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <p>Parcels Pending Pickup {parcels.length}</p>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Confarm</th>
                            <th>Other Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* parcels maping and showing table formate */}
                        {
                            parcels.map((parcle, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{parcle.percelName}</td>
                                <td>
                                    {
                                        parcle.deliveryStatus === 'driver-assign' ? <> <button onClick={() => handlerParcelDelivered(parcle,'rider-arriving')} className="btn bg-green-600-400">Accept</button>
                                            <button className="btn ms-2 bg-red-500">Reject</button></> : <span className='text-2xl text-yellow-300'>Accept</span>
                                    }

                                </td>
                                <td>
                                    <button onClick={() => handlerParcelDelivered(parcle,'parcel_picked_up')} className="btn bg-green-600-400">Mark as picked Up</button>
                                    <button onClick={() => handlerParcelDelivered(parcle,'parcel_delivered')} className="btn bg-green-600-400">Mark as Delivered</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignDeliverys;