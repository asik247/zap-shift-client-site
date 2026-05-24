import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useInstance from '../../../Hooks/useInstance'; import { data, Link } from 'react-router';
import { MdBrowserUpdated, MdStreetview } from 'react-icons/md';
import { IoTrashBin } from 'react-icons/io5';
import Swal from 'sweetalert2';
``
const MyPercels = () => {
    const { user } = useAuth();
    const instance = useInstance();
    const { data: percels = [], isLoading, refetch } = useQuery({
        queryKey: ['myPercels', user?.email],
        queryFn: async () => {
            const res = await instance(`/percelDatas?email=${user?.email}`)
            return res.data
        }
    })
    if (isLoading) {
        return <p>loading....</p>
    }
    //? handler delete percles;
    const handlerPercelsDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                instance.delete(`/percelDatas/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()

                    })
            }

        });



    }
    return (
        <div>
            <p>All Of My Percel:-{percels.length}</p>
            {/* {console.log(percel)} */}
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.NO</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Delivery Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            percels.map((percel, index) => <tr key={percel._id}>
                                <th>{index + 1}</th>
                                <td>{percel.percelName}</td>
                                <td>{percel.cost}</td>
                                <td>
                                    {
                                        percel.paymentStatus === 'paid' ?<span className='text-green-500'>Paid</span> :
                                        <Link to={`/dashboard/payment/${percel._id}`}>
                                        <button className='btn btn-ghost btn-sm'>Pay</button>
                                        </Link>
                                    }
                                </td>
                                <td>{percel.deliveryStatus}</td>
                                <td>
                                    <button className='btn btn-square'>
                                        <MdBrowserUpdated />
                                    </button>
                                    <button className='btn btn-square mx-2'>
                                        <MdStreetview />
                                    </button>
                                    <button onClick={() => handlerPercelsDelete(percel._id)} className='btn btn-square mx-2'>
                                        <IoTrashBin />
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

export default MyPercels;