import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useInstance from '../../../Hooks/useInstance';
import { FcApprove, FcDisapprove } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';

const ApproveRider = () => {
    const instance = useInstance()
    const { data: riders = [], refetch } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await instance.get('/riders');
            return res.data
        }
    })
    //? approvel + rejected;
    const handlerAppRej = (rider, status) => {
        instance.patch(`/riders/${rider._id}`, { status,email:rider.email })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Your application has been ${status}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch()
            })
    }
    //? approvel;
    const handlerApproval = (rider) => {
        handlerAppRej(rider, 'Approved')

    }
    //? Rejected;
    const handlerRejected = (rider) => {
        handlerAppRej(rider, 'Rejected')
    }
    return (
        <div>
            <p>approval {riders.length}</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.NO</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Email</th>
                            <th>Region</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index) =>

                                <tr key={rider._id}>
                                    <th>{index + 1}</th>
                                    <td>{rider.name}</td>
                                    <td>
                                        <p className={`${rider.status === 'Approved' ? 'text-green-800' : 'text-red-600'}`}>{rider.status}</p>
                                    </td>
                                    <td>
                                        <p >{rider.email}</p>
                                    </td>
                                    <td>
                                        <p >{rider.region}</p>
                                    </td>
                                    <td>
                                        <button onClick={() => handlerApproval(rider)} className="btn mx-2"><FcApprove />
                                        </button>
                                        <button onClick={() => handlerRejected(rider)} className="btn mx-2"><FcDisapprove /></button>
                                        <button className="btn"><FaTrashAlt /></button>
                                    </td>
                                </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRider;