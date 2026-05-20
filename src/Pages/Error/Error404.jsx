import React from 'react';
import error from '/error404.jpg';

const Error404 = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">

            <img
                src={error}
                alt="404 Error"
                className="w-full max-w-md"
            />

            <p className="text-3xl md:text-4xl font-bold text-[#03373D] mt-6">
                404 Error
            </p>

            <p className="text-gray-500 text-sm md:text-base mt-2 text-center">
                Page not found
            </p>
        </div>
    );
};

export default Error404;