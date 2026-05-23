import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
const SendAPercel = () => {
    //Todo get fetch all serverCenter datas;
    const servicesCenterDatas = useLoaderData();
    const dublicateRegions = servicesCenterDatas.map(c => c.region);
    const regions = [...new Set(dublicateRegions)];
  
    // ! react hook form;
    const { register,watch, handleSubmit } = useForm()
    //Todo senderREgions;
    const senderRegion = watch('senderRegion');
    // console.log('senderRegions in one',senderRegion);
    //?form submiter handler;
    const handleFormSubmiter = (data) => {
        console.log(data);
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
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                        placeholder="sender name"
                                    />
                                </div>
                                {/* select region */}
                                <fieldset class="$$fieldset">
                                    <legend class="$$fieldset-legend">Sender Region</legend>
                                    <select {...register('senderRegion')} defaultValue="Pick a region" class="$$select">
                                       {
                                        regions.map((r,i)=><option key={i}>{r}</option>)
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
                                {/* Receiver REason */}

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