import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useInstance from '../../../Hooks/useInstance';
const DashBoardAdminHome = () => {
    const instance = useInstance();
    const { data: delivery = [] } = useQuery({
        queryKey: ['delivery', 'deliveryStatus'],
        queryFn: async () => {
            const res = await instance.get('/percelDatas/delivery-status/stats');
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-4xl">DashBoard Admin Home Page!</h2>

            <div className="stats shadow my-15 px-4">

                {
                    delivery.map(logs => <div key={logs._id} className="stat place-items-center">
                        <div className="stat-title">{logs._id}</div>
                        <div className="stat-value">{logs.count}</div>
                        <div className="stat-desc">From January 1st to February 1st</div>
                    </div>)
                }

            </div>

        </div>
    );
};

export default DashBoardAdminHome;