import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useInstance from '../../../Hooks/useInstance';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const DashBoardAdminHome = () => {
    const instance = useInstance();
    const { data: delivery = [] } = useQuery({
        queryKey: ['delivery-status-stats'],
        queryFn: async () => {
            const res = await instance.get('/percelDatas/delivery-status/stats');
            return res.data;
        }
    })
    //? showing pie data;
    const getPyChartData = (data) => {
        return data.map(item => {
            return { name: item.status, value: item.count }
        })
    }
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

            <div className='w-full h-[400px]'>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={getPyChartData(delivery)}
                        cx="50%"
                        cy="100%"
                        outerRadius="120%"
                        fill="#8884d8"
                        label
                        isAnimationActive={true}

                    />
                    <Legend></Legend>
                    <Tooltip></Tooltip>

                </PieChart>
            </div>

        </div>

    );
};

export default DashBoardAdminHome;