import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const Registation = () => {
    //!userinfo get authProvider;
    const { registerUsers, updateUserProfile } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const location = useLocation();
    const navegate = useNavigate();
    console.log('in the location for regiter',location);
    const handleRegistater = (data) => {
        // console.log('resigatio data;', data.photo[0]);
        //Todo:profileImg;
        const profileImg = data.photo[0];
        registerUsers(data.email, data.password)
            .then(res => {
                console.log(res.user);
                navegate(location.state || '/')
                //Todo: store the img and get the imgaebb url;
                const formData = new FormData();
                formData.append('image', profileImg);
                const image_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imagebb_key}`
                // console.log('get image url', image_api_url);
                // imgagebb url and get my photo url;
                axios.post(image_api_url, formData)
                    .then(res => {
                        // console.log('my current img url',res.data.data);
                        const userProfile = {
                            displayName: data.name,
                            photoURL: res.data.data.url
                        }
                        console.log(userProfile);
                        updateUserProfile(userProfile)
                        .then(()=>{

                        }).catch(error=>{
                            console.log(error);
                        })
                    })
                // const formData = new FormData();
                // formData.append('image',profileImg);
                // const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imagebb_key}`

                // axios.post(image_API_URL,formData)
                // .then(res=>{
                //     const userProfile = {
                //         displayName:data.name,
                //         photoURL:res.data.data.url
                //     }
                //     updateUserProfile(userProfile)
                //     .then(()=>{
                //         console.log('successfully update profile');
                //     }).catch(error=>{
                //         console.log(error);
                //     })
                // })
            }).catch(error => {
                console.log(error.message);
            })

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
                            Your Name
                        </label>

                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 outline-none focus:border-[#CAEB66] focus:ring-4 focus:ring-lime-100 transition-all"
                            placeholder="Enter your name"
                        />

                        {errors.name?.type === 'required' && (
                            <p className='text-red-500 text-sm mt-2'>
                                Name is required
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Photo
                        </label>
                        {/* <input type="file" className="file-input" /> */}
                        <input
                            type="file"
                            {...register("photo", { required: true })}
                            className=" file-input"
                            placeholder="PhotoURL"
                        />

                        {errors.photo?.type === 'required' && (
                            <p className='text-red-500 text-sm mt-2'>
                                photo is requre
                            </p>
                        )}
                    </div>
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
                <Link state={location.state} to={'/login'} className="text-black font-semibold ml-1 cursor-pointer hover:underline">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Registation;