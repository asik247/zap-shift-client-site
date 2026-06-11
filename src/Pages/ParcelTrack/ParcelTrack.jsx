import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useJustInstance from '../../Hooks/useJustInstance';

const ParcelTrack = () => {
    const justInstance = useJustInstance()
    const { trackingId } = useParams()
    //? load tracking id using parcel tracking history and showing timeline formate
    const { data: trackings = [] } = useQuery({
        queryKey: ['tracking', trackingId],
        queryFn: async () => {
            const res = await justInstance.get(`/trackings/${trackingId}/logs`)
            return res.data
        }
    })
    return (
        <div>
            <p>Tracking id this Parcle {trackingId}</p>
            <h2>Tracking parcel so far {trackings.length}</h2>
            {/* Time line showing trackins data */}
            <ul className="timeline timeline-vertical">
                {
                    trackings.map(log => <li key={log._id}>
                        <div className="timeline-start">
                            {new Date(log.createdAT).toLocaleString()}
                        </div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">{log.details}</div>
                    </li>)
                }

            </ul>
        </div>
    );
};

export default ParcelTrack;