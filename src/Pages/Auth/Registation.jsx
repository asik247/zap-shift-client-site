import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Registation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegistater = (data) => {
        console.log('resigatio data;', data);

    }
    return (
        <div className="w-full max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">

            {/* Heading */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Create Account
                </h2>

                <p className="text-gray-500 mt-2 text-sm">
                    Please register to continue
                </p>
            </div>

            <form onSubmit={handleSubmit(handleRegistater)}>
                <fieldset className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 outline-none focus:border-[#CAEB66] focus:ring-4 focus:ring-lime-100 transition-all"
                            placeholder="Enter your email"
                        />

                        {errors.email?.type === 'required' && (
                            <p className='text-red-500 text-sm mt-2'>
                                Email is required
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            {...register("password", {
                                required: true,
                                minLength: 6
                            })}
                            className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 outline-none focus:border-[#CAEB66] focus:ring-4 focus:ring-lime-100 transition-all"
                            placeholder="Enter your password"
                        />

                        {errors.password?.type === 'required' && (
                            <p className='text-red-500 text-sm mt-2'>
                                Password is required
                            </p>
                        )}

                        {errors.password?.type === 'minLength' && (
                            <p className='text-red-500 text-sm mt-2'>
                                Password must be 6 character or longer
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <button className="w-full h-12 rounded-xl bg-[#CAEB66] hover:bg-lime-300 text-black font-semibold text-base transition-all duration-300 mt-2">
                        Registration
                    </button>

                </fieldset>
            </form>

            {/* Bottom Text */}
            <p className="text-center text-sm text-gray-500 mt-6">
                Already have an account?
                <Link to={'/login'} className="text-black font-semibold ml-1 cursor-pointer hover:underline">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Registation;