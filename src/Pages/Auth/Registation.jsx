import React from 'react';
import { useForm } from 'react-hook-form';

const Registation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegistater = (data) => {
        console.log('resigatio data;', data);

    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistater)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register("email",{required:true})} className="input" placeholder="Email" />
                    {errors.email?.type === 'required' && <p className='text-red-600'>Email is Require</p>}
                    <label className="label">Password</label>
                    {/* password field */}
                    <input type="password" {...register("password",{required:true,minLength:6})} className="input" placeholder="Password" />
                    {errors.password?.type ==='required' &&<p className='text-red-600'>Password is requre</p>}
                    {errors.password?.type ==='minLength' &&<p className='text-red-600'>Password must be 6 character or longer</p>}
                    <button className="btn btn-neutral mt-4">Registation</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Registation;