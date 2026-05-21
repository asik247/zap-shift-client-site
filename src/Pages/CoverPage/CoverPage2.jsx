import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const CoverPage2 = () => {
    const position = [23.6850, 90.3563]
    //?useEffect;
    const [datas, setDatas] = useState([])
    const mapRef = useRef(null)
    useEffect(() => {
        fetch('/servicesCenter64District.json')
            .then(res => res.json())
            .then(data => {
                // console.log('64 district in db data',data);
                setDatas(data)
            })
    }, [])
    //? search handler here;
    const handlerSearch = (e) => {
        e.preventDefault();
        const values = e.target.search.value.toLowerCase();
        const districts = datas.find(dis => dis.district.toLowerCase().includes(values))
        // console.log(districts.latitude,districts.longitude);
        // console.log(mapRef);
        if (districts) {
            const coodrt = [districts.latitude, districts.longitude]
            mapRef.current.flyTo(coodrt, 13)
        }
        // console.log(values);
    }
    return (
        <div>
            <p>coverPage 2 hrere</p>
            <p>We are 64 districs supported!</p>
            <div className='my-5'>
                <form onSubmit={handlerSearch}>
                    <label>Search Your Location</label> <br />
                    <input className='bg-gray-600 p-4 rounded-2xl' type="search" name="search" id="" placeholder='search' />
                </form>
            </div>
            {/* Map here */}
            <div className='h-[700px] border border-red-500'>
                <MapContainer ref={mapRef} className='h-[700px]' center={position} zoom={6} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* map districs data */}
                    {
                        datas.map(center => <Marker key={center.id} position={[center.latitude, center.longitude]}>
                            <Popup>
                                <p>{center.service_center}</p> <br /> <strong>{center.cover_area.join(', ')}</strong>
                            </Popup>
                        </Marker>)
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default CoverPage2;