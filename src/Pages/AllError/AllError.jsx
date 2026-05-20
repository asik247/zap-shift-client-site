import React from 'react';
import { useRouteError } from 'react-router';

const AllError = () => {
    const error = useRouteError()
    return (
        <div>
            <p>401 all error{error.message}</p>
        </div>
    );
};

export default AllError;