import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useInstance from '../../../Hooks/useInstance';
import Swal from 'sweetalert2';

const AssignDeliverys = () => {
    const { user } = useAuth();
    const instance = useInstance();
    const { refetch, data: parcels = []  } = useQuery({
        queryKey: ['parcels', user?.email, 'driver-assign'],
        queryFn: async () => {
            const res = await instance.get(`/percelDatas/rider?riderEmail=${user?.email}&deliveryStatus=driver-assign`)
            return res.data
        }
    })
    //? handler accept delivery;
    const handlerAcceptDelivery = (parcle) => {
        const statusInfo = { deliveryStatus: 'rider-arriving' };
        instance.patch(`/percelDatas/${parcle._id}/status`, statusInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you accept this parcle",
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
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* parcels maping and showing table formate */}
                        {
                            parcels.map((parcle, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{parcle.percelName}</td>
                                <td>
                                    <button onClick={() => handlerAcceptDelivery(parcle)} className="btn bg-green-600-400">Accept</button>
                                    <button className="btn ms-2 bg-red-500">Reject</button>
                                </td>
                                <td>Blue</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignDeliverys;