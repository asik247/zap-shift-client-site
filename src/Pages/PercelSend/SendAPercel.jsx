import React, { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useInstance from '../../Hooks/useInstance';
import useAuth from '../../Hooks/useAuth';
const SendAPercel = () => {
    //Todo useInstance hook;
    const instance = useInstance();
    const navegate = useNavigate()
    //?get curentuser;
    const { user } = useAuth();
    //Todo get db data in mypercel;
    useEffect(() => {
        instance(`/percelDatas?email=${user?.email}`)
            .then(res => {
                // console.log('all percleinfo',res.data);
            })
    }, [instance, user])

    //Todo get fetch all serverCenter datas;
    const servicesCenterDatas = useLoaderData();
    const dublicateRegions = servicesCenterDatas.map(c => c.region);
    const regions = [...new Set(dublicateRegions)];
    // ! react hook form;
    const { register, control, handleSubmit } = useForm()
    //Todo senderREgions;
    const senderRegion = useWatch({ control, name: 'senderRegion' });
    // const receiverRegion = watch('receiverRegion');
    const receiverRegion = useWatch({ control, name: 'receiverRegion' })
    //Todo:mechine for 8 regions --- all districts;
    const regionsByDistricts = (region) => {
        const centerDatas = servicesCenterDatas.filter(c => c.region === region);
        const allDistrictforRegion = centerDatas.map(d => d.district);
        return allDistrictforRegion
    }

    //?form submiter handler;
    const handleFormSubmiter = (data) => {
        // console.log(data);
        const isDocument = data.percelType === 'document';
        const isSameDistrict = data.senderDestrict === data.receiverDistrict;
        const percelWeight = parseFloat(data.percelWeight);
        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (percelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const extraWeight = percelWeight - 3;
                const minimumCarge = isSameDistrict ? 110 : 150;
                const extraCarge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
                cost = minimumCarge + extraCarge;
            }
        }
        // console.log('cost', cost);
        data.cost = cost;
        //?Confarmation message;
        Swal.fire({
            title: "Agree to pay?",
            text: `your cost ${cost} taka`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Agree"
        }).then((result) => {
            if (result.isConfirmed) {
                instance.post('/percelDatas', data)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "your percel created now you pay",
                                showConfirmButton: false,
                                timer: 2500
                            });
                            // navegate('/dashboard/mypercels')
                        }
                    })
            }
        });

    }

    return (
        <div className="mt-15">
            {/* Heading Section */}
            <div className="mb-2">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                    Send A Parcel
                </h2>

                <p className="text-gray-500 text-lg">
                    Enter your parcel details
                </p>
            </div>
            <form onSubmit={handleSubmit(handleFormSubmiter)}>
                {/* radio filed */}
                <div className='flex gap-5 my-5'>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" {...register('percelType')} value="document" className="radio" defaultChecked />
                        Document
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" {...register('percelType')} value="not-document" className="radio" />
                        Not-Document
                    </label>
                </div>
                {/* Percel name + weight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-gray-700 font-semibold mb-2 block">
                            Parcel Name
                        </label>
                        <input
                            type="text"
                            {...register('percelName')}
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                            placeholder="Parcel name"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 font-semibold mb-2 block">
                            Parcel Weight (kg)
                        </label>
                        <input
                            type="number"
                            {...register('percelWeight')}
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                            placeholder="Parcel weight"
                        />
                    </div>
                </div>
                {/* sender + receber details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {/* sender details */}
                    <fieldset >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Sender Details
                            </h3>
                            <div className="space-y-5">
                                {/* sender name field */}
                                <div>
                                    <label className="text-gray-700 font-semibold mb-2 block">
                                        Sender Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register('senderName')}
                                        defaultValue={user?.displayName}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                        placeholder="sender name"
                                    />
                                </div>
                                {/* sender email field */}
                                <div>
                                    <label className="text-gray-700 font-semibold mb-2 block">
                                        Sender Email
                                    </label>
                                    <input
                                        type="text"
                                        {...register('senderEmail')}
                                        defaultValue={user?.email}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                        placeholder="sender email"
                                    />
                                </div>
                                {/* select region */}
                                <fieldset class="$$fieldset">
                                    <legend class="$$fieldset-legend">Sender Region</legend>
                                    <select {...register('senderRegion')} defaultValue="Pick a region" class="$$select">
                                        <option disabled={true}>Pick a region</option>
                                        {
                                            regions.map((r, i) => <option value={r} key={i}>{r}</option>)
                                        }

                                    </select>

                                </fieldset>
                                {/* select district */}
                                <fieldset class="$$fieldset">
                                    <legend class="$$fieldset-legend">Sender Destrict</legend>
                                    <select {...register('senderDestrict')} defaultValue="Pick a district" class="$$select">
                                        <option disabled={true}>Pick a district</option>
                                        {
                                            regionsByDistricts(senderRegion).map((r, i) => <option value={r} key={i}>{r}</option>)
                                        }

                                    </select>

                                </fieldset>
                                {/* sender district */}
                                {/* sender address field */}
                                <div>
                                    <label className="text-gray-700 font-semibold mb-2 block">
                                        Sender Address
                                    </label>

                                    <input
                                        type="text"
                                        {...register('senderAddress')}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                        placeholder="sender address"
                                    />
                                </div>

                            </div>
                        </div>
                    </fieldset>
                    {/* receiver details */}
                    <fieldset >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Recever Details
                            </h3>
                            <div className="space-y-5">
                                {/* Receiver name */}
                                <div>
                                    <label className="text-gray-700 font-semibold mb-2 block">
                                        Receiver Name
                                    </label>

                                    <input
                                        type="text"
                                        {...register('receiverName')}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                        placeholder="receiver name"
                                    />
                                </div>
                                {/* sender email field */}
                                <div>
                                    <label className="text-gray-700 font-semibold mb-2 block">
                                        Receiver Email
                                    </label>
                                    <input
                                        type="text"
                                        {...register('receiverEmail')}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                        placeholder="receiver email"
                                    />
                                </div>
                                {/* Receiver REason */}
                                {/* select region */}
                                <fieldset class="$$fieldset">
                                    <legend class="$$fieldset-legend">Receiver Region</legend>
                                    <select {...register('receiverRegion')} defaultValue="Pick a region" class="$$select">
                                        <option disabled={true}>Pick a region</option>
                                        {
                                            regions.map((r, i) => <option value={r} key={i}>{r}</option>)
                                        }

                                    </select>

                                </fieldset>
                                {/* sellect districts */}
                                <fieldset class="$$fieldset">
                                    <legend class="$$fieldset-legend">Receiver District</legend>
                                    <select {...register('receiverDistrict')} defaultValue="Pick a district" class="$$select">
                                        <option disabled={true}>Pick a district</option>
                                        {
                                            regionsByDistricts(receiverRegion).map((r, i) => <option value={r} key={i}>{r}</option>)
                                        }

                                    </select>

                                </fieldset>
                                {/* Receiver districts */}
                                {/* Receiver Address */}
                                <div>
                                    <label className="text-gray-700 font-semibold mb-2 block">
                                        Receiver Address
                                    </label>
                                    <input
                                        type="text"
                                        {...register('receiverAddress')}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                        placeholder="receiver address"
                                    />
                                </div>

                            </div>
                        </div>
                    </fieldset>
                </div>
                <input
                    className='w-full my-10 py-4 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:scale-[1.01] cursor-pointer'
                    type="submit"
                    value="Send A Parcel"
                />
            </form>
        </div>
    );
};

export default SendAPercel;