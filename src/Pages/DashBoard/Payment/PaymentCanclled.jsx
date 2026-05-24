import React from 'react';
import { Link } from 'react-router';

const PaymentCanclled = () => {
    return (
        <div>
            <h1>pay canclled try agen!</h1>
            <Link to={'/dashboard/mypercels'}><button className='btn btn-ghost'>Tray Agen</button></Link>
        </div>
    );
};

export default PaymentCanclled;