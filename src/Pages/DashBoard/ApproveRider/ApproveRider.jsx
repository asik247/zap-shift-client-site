import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useInstance from '../../../Hooks/useInstance';
import { FaUserCheck } from 'react-icons/fa';
import { HiUserRemove } from 'react-icons/hi';
import { IoTrashBinOutline } from 'react-icons/io5';
const ApproveRider = () => {
    const instance = useInstance()
    const { data: approved = [] } = useQuery({
        queryKey: ['approved', 'pending'],
        queryFn: async () => {
            const res = await instance.get('/riders')
            return res.data
        }
    })
    //? handler approval;
    const handlerApproval = (id)=>{
        console.log('approval clicked',id);
        instance.patch(`/riders/${id}`)
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
                                <td>{singleApp.status}</td>
                                <td>
                                    <button onClick={()=>handlerApproval(singleApp._id)} className="btn btn-ghost">
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