import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useInstance from '../../../Hooks/useInstance';
import { HiViewGridAdd } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
const MyParcel2 = () => {
    //?TranStack Query using load parcles data in db;
    const { user } = useAuth();
    const instance = useInstance()
    const { data: parcel = [], isLoading, refetch } = useQuery({
        queryKey: ['parcels', user?.email],
        queryFn: async () => {
            const res = await instance(`/percelDatas?${user?.email}`);
            return res.data
        }
    })
    //?Loading state;
    if (isLoading) {
        return <p>Loading...</p>
    }
    //? handler delete parcels;
    const handlerDeleteParcel = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Your parcel his deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed)
                instance.delete(`/percelDatas/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })



        });
    }
    return (
        <div>
            <p>My Parcel 2 here!{parcel.length}</p>
            {/* 
            1.db get sender parcels data;
            2.show table formate;
            3.pay btn clicked then some info post backed and send session url;
            4.payment success then success page navegate or canceld page navegate;
            */}
            {/* Table start */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.NO</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>payment</th>
                            <th>Delivery Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            parcel.map((p, index) => <tr key={p._id}>
                                <th>{index + 1}</th>
                                <td>{p.percelName}</td>
                                <td>{p.cost}</td>
                                <td>{
                                    p.paymentStatus2 === 'paid' ? <span className='text-green-600 font-bold'>Paid</span> : <button className='btn btn-accent'>Pay</button>
                                }</td>
                                <td>{p.deliveryStatus}</td>
                                <td>
                                    <button className='btn btn-ghost'>
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => handlerDeleteParcel(p._id)} className='btn btn-ghost mx-3'>
                                        <MdDelete />
                                    </button>
                                    <button className='btn btn-ghost'>
                                        <HiViewGridAdd />
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

export default MyParcel2;