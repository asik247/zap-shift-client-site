import React, { useRef, useState } from 'react';
import useInstance from '../../../Hooks/useInstance';
import { useQuery } from '@tanstack/react-query';

const AssignRiders = () => {
    const [sellectedParcels, setSellectedParcels] = useState(null)
    const instance = useInstance();
    const assignModal = useRef(null)
    const { data: parcles = [],refetch:parcelRefetch } = useQuery({
        queryKey: ['parcels', 'pendign-pickup'],
        queryFn: async () => {
            const res = await instance.get('/percelDatas?deliveryStatus=pending-pickup')
            return res.data
        }
    })
    //? query for availabel rider;
    const { data: riders = [] } = useQuery({
        queryKey: ['riders', sellectedParcels?.senderDestrict],
        enabled: !!sellectedParcels,
        queryFn: async () => {
            const res = await instance.get(`/riders?status=Approved&workStatus=available&district=${sellectedParcels?.senderDestrict}`)
            return res.data

        }
    })
    const handlerModal = (parcel) => {
        setSellectedParcels(parcel)
        assignModal.current.showModal()
    }
    // ? handlerAssign code;
    const handlerRidersAssign = (rider) => {
        // console.log('in the riders',rider);
        const ridersInfo = {
            riderId:rider._id,
            riderEmail:rider.email,
            riderName:rider.name,
            parcleId:sellectedParcels._id,

        }
        instance.patch(`/percelDatas/${sellectedParcels._id}`,ridersInfo)
        .then(res=>{
            if(res.data.modifiedCount){
                parcelRefetch();
                assignModal.current.close();
                alert('Rider has been assign')
            }
        })
        /** {
    "_id": "6a26e36b8264886ce222c581",
    "name": "bablue",
    "licenseNumber": "2222258518",
    "email": "bablue@gmail.com",
    "region": "Barisal",
    "nidNumber": "85202520",
    "phoneNumber": "01211258955",
    "brandModel": "Monoton",
    "bikeRegistrationNumber": "00011222333",
    "yourSelf": "please approved",
    "status": "Approved",
    "createdAT": "2026-06-08T15:44:43.323Z",
    "workStatus": "available"
} */
    }
    return (
        <div>
            <h2 className="text-4xl">Assign Riders: {parcles.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Pickup District</th>
                            <th>Cost</th>
                            <th>CreateAT</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            parcles.map((parcel, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{parcel.percelName}</td>
                                <td>{parcel.senderDestrict}</td>
                                <td>{parcel.cost}</td>
                                <td>{parcel.createdAT}</td>

                                <td>
                                    <button onClick={() => handlerModal(parcel)} className="btn">Find Riders</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* modal code */}
            <dialog ref={assignModal} className="modal modal-bottom sm:modal-middle">
                <div className=" modal-box bg-white text-black shadow-2xl border border-gray-200">
                    <h3 className="font-bold text-lg">Rider for available {riders.length}</h3>

                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    riders.map((rider, index) => <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{rider.name}</td>
                                        <td>{rider.email}</td>
                                        <td>
                                            <button onClick={() => handlerRidersAssign(rider)} className="btn">Assign rider</button>
                                        </td>
                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            {
                // console.log(sellectedParcels)
                // console.log('available rider',Arider)
            }
        </div>
    );
};

export default AssignRiders;