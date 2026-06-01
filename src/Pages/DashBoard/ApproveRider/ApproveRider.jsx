import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useInstance from '../../../Hooks/useInstance';

const ApproveRider = () => {
    const instance = useInstance()
    const { data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await instance.get('/riders');
            return res.data
        }
    })
    //? approvel;
    const handlerApproval = (id)=>{
        // console.log('id',id);
        const updateInfo = {status:'approved'}
        instance.patch(`/riders/${id}`,updateInfo)
        .then(res=>{
            console.log(res.data);
           
        })

    }
    return (
        <div>
            <p>approval {riders.length}</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index) =>
                            
                            <tr key={rider._id}>
                                <th>{index+1}</th>
                                <td>Cy Ganderton</td>
                                <td>
                                    <p >{rider.status}</p>
                                    
                                </td>
                                <td>
                                    <button onClick={()=>handlerApproval(rider._id)} className="btn mx-2">accept</button>
                                    <button className="btn">reject</button>
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