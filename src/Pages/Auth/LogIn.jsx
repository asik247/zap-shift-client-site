import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import GoogleLogin from '../SocialLogIn/GoogleLogin';

const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { logInUsers } = useAuth();
    const location = useLocation()
    const handleLoginSubmiter = (data) => {
        console.log(data);
        logInUsers(data.email, data.password)
            .then(res => {
                console.log(res.user);
            }).catch(error => {
                console.log(error.message);
            })
    }

    return (

        <div className="w-full max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">

            {/* Heading */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Welcome back!
                </h2>

                <p className="text-gray-500 mt-2 text-sm">
                    Please Login to continue
                </p>
            </div>

            <form onSubmit={handleSubmit(handleLoginSubmiter)}>
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
                        LogIn
                    </button>


                </fieldset>
            </form>
            <div>
                <GoogleLogin></GoogleLogin>
            </div>
            {/* Bottom Text */}
            <p className="text-center text-sm text-gray-500 mt-6">
                New to zapshift?
                <Link  to={'/registation'} state={location.state} className="text-black font-semibold ml-1 cursor-pointer hover:underline">
                    Register
                </Link>
            </p>
        </div>


    );
};

export default LogIn;