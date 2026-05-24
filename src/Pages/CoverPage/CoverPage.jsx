import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import { FaSearchLocation } from 'react-icons/fa';
const CoverPage = () => {
    const services = useLoaderData();
    const position = [23.6850, 90.3563];
    const mapRef = useRef(null);
    const searchSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.location.value;
        const district = services.find((center) =>
            center.district
                .toLowerCase()
                .includes(searchValue.toLowerCase())
        );

        if (district) {
            const coord = [
                district.latitude,
                district.longitude,
            ];

            mapRef.current.flyTo(coord, 13, {
                animate: true,
                duration: 2,
            });
        }
    };

    return (
        <div className="w-11/12 mx-auto py-8 md:py-10">

            {/* Heading */}
            <div className="text-start mb-5 md:mb-6">

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#03373D] leading-tight">
                   We are available in 64 districts
                </h1>

                <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 max-w-xl md:max-w-2xl leading-relaxed">
                    Search your district and explore our delivery coverage across Bangladesh.
                </p>
            </div>

            {/* Search Section */}
            <div className="max-w-3xl mb-5 md:mb-6">

                <form
                    onSubmit={searchSubmit}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-white border border-gray-200 rounded-2xl p-2 shadow-sm"
                >

                    {/* Input */}
                    <div className="relative flex-1">

                        <FaSearchLocation className="absolute left-3 top-1/2 -translate-y-1/2 text-base text-gray-400" />

                        <input
                            type="search"
                            name="location"
                            placeholder="Search district..."
                            className="w-full h-10 sm:h-11 bg-transparent rounded-xl pl-10 pr-3 text-sm outline-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="h-10 sm:h-11 px-5 rounded-xl bg-[#CAEB66] hover:bg-[#b8dd49] text-[#03373D] font-semibold text-sm transition-all duration-300 whitespace-nowrap"
                    >
                        Search
                    </button>
                </form>

                {/* Bottom Text */}
                <div className="mt-2 text-start">
                    <p className="text-gray-500 text-[11px] sm:text-xs md:text-sm">
                        We are available in almost every district in Bangladesh 🇧🇩
                    </p>
                </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl md:rounded-[28px] shadow-xl border border-gray-200">

                <MapContainer
                    ref={mapRef}
                    center={position}
                    zoom={8}
                    scrollWheelZoom={false}
                    className="h-[320px] sm:h-[420px] md:h-[550px] w-full z-0"
                >
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        services.map((singleService, index) => (
                            <Marker
                                key={index}
                                position={[
                                    singleService.latitude,
                                    singleService.longitude,
                                ]}
                            >
                                <Popup>
                                    <div className="space-y-2 min-w-[180px] sm:min-w-[200px]">

                                        <h2 className="text-base sm:text-lg font-bold text-[#03373D]">
                                            {singleService.district}
                                        </h2>

                                        <div className="w-10 sm:w-12 h-1 bg-[#CAEB66] rounded-full"></div>

                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                            <span className="font-semibold">
                                                Covered Areas:
                                            </span>

                                            <br />

                                            {singleService.covered_area.join(', ')}
                                        </p>
                                    </div>
                                </Popup>
                            </Marker>
                        ))
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default CoverPage;