import React from 'react';
import useInstance from '../../../Hooks/useInstance';
import { useQuery } from '@tanstack/react-query';

const AssignRiders = () => {
    const instance = useInstance();
    const {data:parcles = []} = useQuery({
        queryKey:['parcels','pendign-pickup'],
        queryFn:async()=>{
            const res = await instance.get('')
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-4xl">Assign Riders: {parcles.length}</h2>
        </div>
    );
};

export default AssignRiders;