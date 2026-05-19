import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const CoverPage = () => {
    const services = useLoaderData();
    // console.log(services);
    // const position = [51.505, -0.09]
    const position = [23.6850, 90.3563];
    const mapRef = useRef(null)
    const searchSubmit = e=>{
        e.preventDefault();
        const location = e.target.location.value;
        // console.log(location);
        const districs = services.find(center=>center.district.toLowerCase().includes(location.toLowerCase()));
        if(districs){
            const coord = [districs.latitude,districs.longitude];
            // console.log(coord);
            mapRef.current.flyTo(coord , 14)
        }
    }
    return (
        <div>
            <div>

            </div>
            <div>
                <form onSubmit={searchSubmit}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" name='location' className="grow" placeholder="Search" />
                        
                    </label>
                </form>
            </div>
            <div className='border w-full h-[800px]'>
                <MapContainer ref={mapRef} center={position} zoom={8} scrollWheelZoom={false} className='h-[800px]'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        services.map((singleServic, index) =>
                            <Marker key={index} position={[singleServic.latitude, singleServic.longitude]}>
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