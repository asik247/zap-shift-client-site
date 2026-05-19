import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const CoverPage = () => {
    const services = useLoaderData();
    console.log(services);
    // const position = [51.505, -0.09]
    const position = [23.6850, 90.3563];
    return (
        <div>
            <div>

            </div>
            <div className='border w-full h-[800px]'>
                <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-[800px]'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        services.map((singleServic, index) =>
                            <Marker key={index} position={[singleServic.latitude,singleServic.longitude]}>
                                <Popup>
                                   <strong>{singleServic.district}</strong> <br /> Services Area:{singleServic.covered_area.join(' , ')}
                                </Popup>
                            </Marker>
                        )
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default CoverPage;