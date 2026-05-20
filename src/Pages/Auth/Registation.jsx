import React from 'react';
import { useForm } from 'react-hook-form';

const Registation = () => {
    const {register,handleSubmit} = useForm()
    const handleRegistater = (data)=>{
        console.log('resigatio data;',data);

    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistater)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register("email")} className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    {/* password field */}
                    <input type="password" {...register("password")} className="input" placeholder="Password" />
                    
                    <button className="btn btn-neutral mt-4">Registation</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Registation;