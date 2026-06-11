import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useInstance from '../../../Hooks/useInstance';

const DashBoardAdminHome = () => {
    const instance = useInstance()
    const {data:deliverys=[]} = useQuery({
        queryKey:['delivery-status-stats'],
        queryFn:async()=>{
            const res = await instance.get('/percelDatas/delivery-status/stats');
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-4xl">DashBoard Admin Home Page!</h2>
            <div className="stats shadow">
                {
                   deliverys.map(stats=> <div key={stats._id} className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">{stats._id}</div>
                    <div className="stat-value">{stats.count}</div>
                  
                </div>)
                }
              

               
            </div>
        </div>
    );
};

export default DashBoardAdminHome;