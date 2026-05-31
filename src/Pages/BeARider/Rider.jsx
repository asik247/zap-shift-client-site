import React from 'react';
import riderImg from '../../assets/agent-pending.png'
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useInstance from '../../Hooks/useInstance';
import Swal from 'sweetalert2';
const Rider = () => {
    //?user + instance;
    const { user } = useAuth();
    const instance = useInstance();
    //! servicesHouse data;
    const servicesHouseData = useLoaderData();
    const dublicatedData = servicesHouseData.map(c => c.region)
    const regionsData = [... new Set(dublicatedData)]
    // console.log(regionsData);
    //? react hook form;
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const regions = useWatch({ control, name: 'region' })
    //Todo:mechine for 8 regions --- all districts;
    const allDistricts = (region) => {
        const centerData = servicesHouseData.filter(c => c.region === region);
        const districts = centerData.map(d => d.district)
        return districts
    }
    //? handler sumbiter;
    const submitRiderForm = (data) => {
        // console.log('rider form clicked', data);
        instance.post('/riders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submited. please awite for approval in 15 days!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <h1 className='font-bold text-2xl my-2'>Be a Rider</h1>
            <p className='my-2'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            {/* form details */}
            <div className='flex justify-between items-center gap-10 mb-4'>
                <div className='flex-1'>
                    <form onSubmit={handleSubmit(submitRiderForm)}>
                        <fieldset >
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                    Tell us about yourself
                                </h3>
                                <div className="space-y-5">
                                    {/*Your name field */}
                                    <div>
                                        <label className="text-gray-700 font-semibold mb-2 block">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            {...register('name', { required: 'Name is required' })}
                                            defaultValue={user?.displayName}

                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                            placeholder="your name"
                                        />
                                        {errors.name && (<p className='text-red-600'>{errors.name.message}</p>)}
                                    </div>
                                    {/* Driving License Number */}
                                    <div>
                                        <label className="text-gray-700 font-semibold mb-2 block">
                                            Driving License Number
                                        </label>
                                        <input
                                            type="number"
                                            {...register('licenseNumber', { required: 'Driving License Number required' })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                            placeholder="Driving License Number"
                                        />
                                        {errors.licenseNumber && (<p className='text-red-600'>{errors.licenseNumber.message}</p>)}
                                    </div>
                                    {/*Your email field */}
                                    <div>
                                        <label className="text-gray-700 font-semibold mb-2 block">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            defaultValue={user?.email}
                                            readOnly={true}
                                            {...register('email', { required: 'Email is required' })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                            placeholder="your email"
                                        />
                                        {errors.email && (
                                            <p className='text-red-600'>{errors.email.message}</p>
                                        )}
                                    </div>
                                    {/* select region */}
                                    <fieldset class="$$fieldset">
                                        <legend class="$$fieldset-legend">Your Region</legend>
                                        <select {...register('region')} defaultValue="Pick a region" class="$$select">
                                            <option disabled={true}>Pick a region</option>
                                            {
                                                regionsData.map((r, i) => <option value={r} key={i}>{r}</option>)
                                            }
                                        </select>

                                    </fieldset>
                                    {/* select district */}
                                    <fieldset class="$$fieldset">
                                        <legend class="$$fieldset-legend">Your Destrict</legend>
                                        <select defaultValue="Pick a district" class="$$select">
                                            <option disabled={true}>Pick a district</option>
                                            {
                                                allDistricts(regions).map((d, i) => <option value={d} key={i}>{d}</option>)
                                            }
                                        </select>

                                    </fieldset>
                                    {/* NID NO */}
                                    <div>
                                        <label className="text-gray-700 font-semibold mb-2 block">
                                            NID No
                                        </label>
                                        <input
                                            type="number"
                                            {...register('nidNumber', { required: 'NID is required' })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                            placeholder="NID"
                                        />
                                        {errors.nidNumber && (
                                            <p className='text-red-600'>{errors.nidNumber.message}</p>
                                        )}
                                    </div>
                                    {/* Phone Number */}
                                    <div>
                                        <label className="text-gray-700 font-semibold mb-2 block">
                                            Phone Number
                                        </label>
                                        <input
                                            type="number"
                                            {...register('phoneNumber', { required: 'phone number is required' })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                            placeholder="phone number"
                                        />
                                        {errors.phoneNumber && (
                                            <p className='text-red-600'>{errors.phoneNumber.message}</p>
                                        )}
                                    </div>
                                    {/* Bike Brand Model and Year */}
                                    <div>
                                        <label className="text-gray-700 font-semibold mb-2 block">
                                            Bike Brand Model and Year
                                        </label>
                                        <input
                                            type="text"
                                            {...register('brandModel', { required: 'Bike Brand Model and year is required' })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                            placeholder="Bike Brand Model and Year"
                                        />
                                        {errors.brandModel && (
                                            <p className='text-red-600'>{errors.brandModel.message}</p>
                                        )}
                                    </div>
                                    {/* Bike Registration Number  */}
                                    <div>
                                        <label className="text-gray-700 font-semibold mb-2 block">
                                            Bike Registration Number
                                        </label>
                                        <input
                                            type="text"
                                            {...register('bikeRegistrationNumber', { required: 'Bike Registration Number is required' })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                            placeholder="Bike Registration Number"
                                        />
                                        {errors.bikeRegistrationNumber && (
                                            <p className='text-red-600'>{errors.bikeRegistrationNumber.message}</p>
                                        )}
                                    </div>
                                    {/* Tell Us About Yourself*/}
                                    <div>
                                        <label className="text-gray-700 font-semibold mb-2 block">
                                            Tell Us About Yourself
                                        </label>
                                        <input
                                            type="text"
                                            {...register('yourSelf')}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                                            placeholder="Tell Us About Yourself"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Submit field */}
                            <input
                                className='w-full my-10 py-4 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:scale-[1.01] cursor-pointer'
                                type="submit"
                                value="Submit"
                            />
                        </fieldset>
                    </form>
                </div>
                {/* rider img */}
                <div className='flex-1'>
                    <img src={riderImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Rider;