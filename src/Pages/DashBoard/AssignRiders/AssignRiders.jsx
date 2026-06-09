import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useInstance from '../../../Hooks/useInstance';
const AssignRiders = () => {
    // ! parcels state here;
    const [sellectedParcel, setSellectedParcel] = useState(null);
    const instance = useInstance();
    const assignModal = useRef(null)
    const handlerModal = (parcel) => {
        assignModal.current.showModal()
        setSellectedParcel(parcel)
    }
    //Todo: deleveryStatus pending-pickup data load in this page!
    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: async () => {
            const res = await instance.get(`/percelDatas?deliveryStatus=pending-pickup`)
            return res.data
        }
    })
    //? Available rider load in riders collection;
    const { data: riders = [] } = useQuery({
        queryKey: ['riders', sellectedParcel?.senderDestrict],
        enabled: !!sellectedParcel,
        queryFn: async () => {
            const res = await instance.get(`/riders?status=Approved&workStatus=available&district=${sellectedParcel?.senderDestrict}`)
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-4xl">Assign Riders (already paid done): {parcels.length}</h2>
            {/*Table formate showing all pending for pickup parcels info */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>District</th>
                            <th>CreatedAt</th>
                            <th>DeliveryStatus</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, i) => <tr key={parcel._id}>
                                <th>{i + 1}</th>
                                <td>{parcel.percelName}</td>
                                <td>{parcel.senderDestrict}</td>
                                <td>{parcel.createdAT}</td>
                                <td>{parcel.deliveryStatus}</td>
                                <td>
                                    <button onClick={() => handlerModal(parcel)} className="btn btn-accent">Find riders</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

            {/* modal code */}
            <dialog ref={assignModal} className="modal modal-bottom sm:modal-middle">
                <div className=" modal-box bg-white text-black shadow-2xl border border-gray-200">
                    <h3 className="font-bold text-lg">Rider for available {riders.length} </h3>
                    {/* available rider in this district table formate show and assing */}
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>About rider</th>
                                    <th>Rider Liceno:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    riders.map((rider,i) => <tr key={i}>
                                        <th>{i+1}</th>
                                        <td>{rider.name}</td>
                                        <td>{rider.yourSelf}</td>
                                        <td>{rider.licenseNumber}</td>
                                        <td>
                                            <button className='btn'>Assign</button>
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
            {/*  parcles */}
            {

            }
        </div>
    );
};

export default AssignRiders;