import React from 'react';
import { useForm } from 'react-hook-form';
// import { data } from 'react-router';

const SendAPercel = () => {
    const { register, handleSubmit } = useForm();
    const handleFormSubmiter = (data) => {
        console.log(data);
    }
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="rounded-3xl p-8 border border-gray-300">
                {/* Heading Section */}
                <div className="mb-2">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                        Send A Parcel
                    </h2>

                    <p className="text-gray-500 text-lg">
                        Enter your parcel details
                    </p>
                </div>
                <div className="flex flex-wrap gap-8 items-center bg-gray-50 p-5 rounded-2xl mb-8">
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
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                                    placeholder="Parcel name"
                                />
                            </div>

                            <div>
                                <label className="text-gray-700 font-semibold mb-2 block">
                                    Parcel Weight (kg)
                                </label>

                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                                    placeholder="Parcel weight"
                                />
                            </div>
                        </div>
                        {/* sender + receber details */}
                        <div className='mt-10'>
                            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* sender details */}
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                        Sender Details
                                    </h3>

                                    <div className="space-y-5">
                                        <div>
                                            <label className="text-gray-700 font-semibold mb-2 block">
                                                Email
                                            </label>

                                            <input
                                                type="email"
                                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-gray-700 font-semibold mb-2 block">
                                                Password
                                            </label>

                                            <input
                                                type="password"
                                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                                placeholder="Enter password"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* receiver details */}
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                        Receiver Details
                                    </h3>

                                    <div className="space-y-5">
                                        <div>
                                            <label className="text-gray-700 font-semibold mb-2 block">
                                                Email
                                            </label>

                                            <input
                                                type="email"
                                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-gray-700 font-semibold mb-2 block">
                                                Password
                                            </label>

                                            <input
                                                type="password"
                                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                                placeholder="Enter password"
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
            </div>


        </div>
    );
};

export default SendAPercel;