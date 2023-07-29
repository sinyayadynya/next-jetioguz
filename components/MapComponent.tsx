// ./components/MapComponent.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { useTranslation } from 'react-i18next';

const CustomControl = dynamic(() => import('components/CustomControl'), { ssr: false });

// Dynamically import MapContainer, TileLayer, Marker, Popup
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false } // This line is important. It's what prevents server-side render
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

export default function MapComponent() {
    const { t } = useTranslation();

    const { locale } = useRouter(); // Get the current locale

    const layers = [
        { name: t('accommodations'), endpoint: "/api/jetioguz/accommodation/map", iconUrl: "/images/accommodation-icon.png", color: "text-sky-600 focus:ring-sky-600" },
        { name: t('nature-sites'), endpoint: "/api/jetioguz/nature/map", iconUrl: "/images/nature-site-icon.png", color: "text-green-600 focus:ring-green-600" },
        { name: t('culture-sites'), endpoint: "/api/jetioguz/culture/map", iconUrl: "/images/culture-site-icon.png", color: "text-primary-600 focus:ring-primary-600" },
        { name: t('wellness'), endpoint: "/api/jetioguz/wellness/map", iconUrl: "/images/wellness-icon.png", color: "text-blue-600 focus:ring-blue-600" },
        { name: t('villages'), endpoint: "/api/jetioguz/village/map", iconUrl: "/images/village-icon.png", color: "text-red-600 focus:ring-red-600" },
    ];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const L = require('leaflet');

            delete L.Icon.Default.prototype._getIconUrl;

            L.Icon.Default.mergeOptions({
                iconRetinaUrl: '/images/marker-icon-2x.png', // replace with your image path
                iconUrl: '/images/marker-icon.png', // replace with your image path
                shadowUrl: '/images/marker-shadow.png', // replace with your image path
            });
        }
    }, []);

    return (
        <div style={{ height: 'calc(100vh - 64px)', width: '100%' }} className='mt-16'>
            {typeof window !== 'undefined' && (
                <MapContainer center={[42.35, 78.06]} zoom={11} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <CustomControl layers={layers} language={locale} /> {/* Pass the current locale */}
                </MapContainer>
            )}
        </div>
    )
}
