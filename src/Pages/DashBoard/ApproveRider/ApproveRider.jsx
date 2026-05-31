import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useInstance from '../../../Hooks/useInstance';
import { FaUserCheck } from 'react-icons/fa';
import { HiUserRemove } from 'react-icons/hi';
import { IoTrashBinOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';

const ApproveRider = () => {
    const instance = useInstance()
    const { data: approved = [],refetch } = useQuery({
        queryKey: ['approved', 'pending'],
        queryFn: async () => {
            const res = await instance.get('/riders')
            return res.data
        }
    })
    //? handler approval;
    const handlerApproval = (id) => {
        const updateInfo = { status: 'approved' }
        instance.patch(`/riders/${id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Rider has been approved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    return (
        <div>
            <h1>Approve rider{approved.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.NO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* approved map */}
                        {
                            approved.map((singleApp, index) => <tr key={singleApp._id}>
                                <th>{index + 1}</th>
                                <td>{singleApp.name}</td>
                                <td>{singleApp.email}</td>
                                <td>{singleApp.region}</td>
                                <td>
                                    <p className={`${singleApp.status === 'approved' ? 'text-green-800' : 'text-red-500'}`}>{singleApp.status}</p>
                                </td>
                                <td>
                                    <button onClick={() => handlerApproval(singleApp._id)} className="btn btn-ghost">
                                        <FaUserCheck />
                                    </button>
                                    <button className="btn btn-ghost">
                                        <HiUserRemove />
                                    </button>
                                    <button className="btn btn-ghost">
                                        <IoTrashBinOutline />
                                    </button>
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