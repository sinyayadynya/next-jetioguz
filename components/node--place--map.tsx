import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';

interface MapData {
    latitude: number
    longitude: number
    className: any
}

const MapComponent = dynamic(() => import('leaflet').then((L) => {
    const leafletStylesheet = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';

    // Dynamically import the Leaflet stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = leafletStylesheet;
    document.head.appendChild(link);

    return import('react-leaflet').then(({ MapContainer, TileLayer, Marker }) => {
        const Map = ({ latitude, longitude, className }: MapData) => {
            const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
            const [markerIcon, setMarkerIcon] = useState(null);

            useEffect(() => {
                const newIcon = new L.Icon({
                    iconUrl: 'https://nomadsland.travel/modules/contrib/leaflet/js/leaflet/dist/images/marker-icon-2x.png',
                    iconSize: [25, 40],
                    iconAnchor: [12, 40],
                });
                setMarkerIcon(newIcon);
                setPosition({ latitude, longitude });
            }, []);
            return (
                markerIcon && <MapContainer center={[position.latitude, position.longitude]} zoom={13} className={className}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[position.latitude, position.longitude]} icon={markerIcon} />
                </MapContainer>
            );
        };

        return Map;
    });
}), { ssr: false });

const Map = ({ latitude, longitude, className }: MapData) => {
    return <MapComponent latitude={latitude} longitude={longitude} className={className} />;
};

export default Map;
