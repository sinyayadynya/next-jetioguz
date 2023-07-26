// ./components/MapComponent.tsx
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

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

// Import LayersControl and its sub-components
const LayersControl = dynamic(
    () => import('react-leaflet').then((mod) => mod.LayersControl),
    { ssr: false }
  );

  const BaseLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.LayersControl.BaseLayer),
    { ssr: false }
  );

  const Overlay = dynamic(
    () => import('react-leaflet').then((mod) => mod.LayersControl.Overlay),
    { ssr: false }
  );

  const AccommodationLayer = dynamic(() => import('components/MarkerCluster'), { ssr: false });
  const NatureSiteLayer = dynamic(() => import('components/MarkerCluster'), { ssr: false });
  const CultureSiteLayer = dynamic(() => import('components/MarkerCluster'), { ssr: false });
  const WellnessLayer = dynamic(() => import('components/MarkerCluster'), { ssr: false });
  const VillageLayer = dynamic(() => import('components/MarkerCluster'), { ssr: false });

export default function MapComponent() {

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


  const layers = [
    { name: 'Accommodation', endpoint: "/api/jetioguz/accommodation/map", iconUrl: "/images/accommodation-icon.png", color: "text-sky-600 focus:ring-sky-600" },
    { name: 'Nature Sites', endpoint: "/api/jetioguz/nature/map", iconUrl: "/images/nature-site-icon.png", color: "text-green-600 focus:ring-green-600" },
    { name: 'Culture Sites', endpoint: "/en/api/jetioguz/culture/map", iconUrl: "/images/culture-site-icon.png", color: "text-primary-600 focus:ring-primary-600" },
    { name: 'Wellness', endpoint: "/en/api/jetioguz/wellness/map", iconUrl: "/images/wellness-icon.png", color: "text-blue-600 focus:ring-blue-600" },
    { name: 'Villages', endpoint: "/en/api/jetioguz/village/map", iconUrl: "/images/village-icon.png", color: "text-red-600 focus:ring-red-600" },
  ];

  return (
    <div style={{ height: 'calc(100vh - 64px)', width: '100%' }} className='mt-16'>
        {typeof window !== 'undefined' && (
          <MapContainer center={[42.35, 78.06]} zoom={11} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <CustomControl layers={layers} />
          </MapContainer>
        )}
      </div>
  )
}
