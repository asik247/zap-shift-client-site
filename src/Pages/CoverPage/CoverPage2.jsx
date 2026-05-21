import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const CoverPage2 = () => {
    const position = [23.6850, 90.3563]
    //?useEffect;
    useEffect(()=>{
        fetch('/servicesCenter64District.json')
        .then(res=>res.json())
        .then(data=>{
            console.log('64 district in db data',data);
        })
    },[])
    return (
        <div>
            <p>coverPage 2 hrere</p>
            <p>We are 64 districs supported!</p>
            <div className='my-5'>
                <label>Search Your Location</label> <br />
                <input className='bg-gray-600 p-4 rounded-2xl' type="search" name="search" id="" placeholder='search' />
            </div>
            {/* Map here */}
            <div className='h-[700px] border border-red-500'>
                <MapContainer className='h-[700px]' center={position} zoom={10} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                             A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default CoverPage2;