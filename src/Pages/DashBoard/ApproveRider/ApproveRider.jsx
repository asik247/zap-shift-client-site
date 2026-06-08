import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useInstance from '../../../Hooks/useInstance';
import { FcApprove, FcDisapprove } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { FaEye, FaTrashAlt } from 'react-icons/fa';

const ApproveRider = () => {
    const instance = useInstance()
    const [sellectedRider, setSellectedRider] = useState(null)
    const modalRef = useRef(null)
    const { data: riders = [], refetch } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await instance.get('/riders');
            return res.data
        }
    })
    //? approvel + rejected;
    const handlerAppRej = (rider, status) => {
        instance.patch(`/riders/${rider._id}`, { status, email: rider.email })
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
    //? Remove application;
    const handleRemove = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This rider has been deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                refetch()
                instance.delete(`/riders/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your riders has been deleted.",
                                icon: "success"
                            });
                        }
                        // console.log(res.data.deletedCount);
                    })
            }
        });



    }
    //? handler details;
    const handleDetails = (rider) => {
        setSellectedRider(rider)
        modalRef.current.showModal();

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
                            <th>Application Status</th>
                            <th>Work Status</th>
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
                                        <p >{rider.workStatus}</p>
                                    </td>
                                    <td>
                                        <p >{rider.email}</p>
                                    </td>
                                    <td>
                                        <p >{rider.region}</p>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDetails(rider)} className="btn mx-2"><FaEye />
                                        </button>
                                        <button onClick={() => handlerApproval(rider)} className="btn mx-2"><FcApprove />
                                        </button>
                                        <button onClick={() => handlerRejected(rider)} className="btn mx-2"><FcDisapprove /></button>
                                        <button onClick={() => handleRemove(rider._id)} className="btn"><FaTrashAlt /></button>
                                    </td>
                                </tr>)
                        }



                    </tbody>
                </table>
                {/* //! Modal open code; */}
                <div>
                    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-white text-black shadow-2xl border border-gray-200">
                            {sellectedRider && <>
                                <p>{`Name:- ${sellectedRider?.name}`}</p>
                                <p className='py-2'>{`Email:- ${sellectedRider?.email}`}</p>
                                <p className='py-4'>{`Region:- ${sellectedRider?.region}`}</p>
                                <p>{`Status:- ${sellectedRider?.status}`}</p>
                            </>}
                            <div className="modal-action">
                                <form method="dialog">
                                    <button onClick={() => handlerApproval(sellectedRider)} className="btn mx-2"><FcApprove />
                                    </button>
                                    <button onClick={() => handlerRejected(sellectedRider)} className="btn mx-2"><FcDisapprove /></button>
                                    <button onClick={() => handleRemove(sellectedRider._id)} className="btn"><FaTrashAlt /></button>
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default ApproveRider;