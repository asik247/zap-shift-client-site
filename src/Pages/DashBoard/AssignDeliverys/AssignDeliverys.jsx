import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useInstance from '../../../Hooks/useInstance';

const AssignDeliverys = () => {
    const { user } = useAuth();
    const instance = useInstance();
    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels', user?.email, 'driver-assign'],
        queryFn: async () => {
            const res = await instance.get(`/percelDatas/rider?riderEmail=${user?.email}&deliveryStatus=driver-assign`)
            return res.data
        }
    })
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
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* parcels maping and showing table formate */}
                        {
                            parcels.map((parcle, i) => <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{parcle.percelName}</td>
                            <td>Quality Control Specialist</td>
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