// ./pages/map.tsx
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Header } from 'components/header'; // Import the Header component
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.markercluster';

// Dynamically import MapContainer, TileLayer, Marker, Popup
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false } // This line is important. It's what prevents server-side render
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);


const L = dynamic(() => import('leaflet'), {
    ssr: false, // This will prevent server-side render
  });


// Import LayersControl and its sub-components
const LayersControl = dynamic(
    () => import('react-leaflet').then((mod) => mod.LayersControl),
    { ssr: false }
  );

  declare module 'leaflet' {
    export function markerClusterGroup(options?: any): any;
}



function MarkerCluster() {
  const map = useMap();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/api/jetioguz/accommodation/map`)
      .then(response => response.json())
      .then(data => setData(data.features));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const markerClusterGroup = L.markerClusterGroup();

      data.forEach(item => {
        const marker = L.marker(item.geometry.coordinates.reverse());
        marker.bindPopup(`${item.properties.name} - ${item.properties.description}`);
        markerClusterGroup.addLayer(marker);
      });

      map.addLayer(markerClusterGroup);

      return () => {
        map.removeLayer(markerClusterGroup);
      };
    }
  }, [data, map]);

  return null;
}

export default function MapPage() {
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
    <div>
      <Header />
      <div style={{ height: 'calc(100vh - 64px)', width: '100%' }} className='mt-16'>
        {typeof window !== 'undefined' && (
          <MapContainer center={[42.35, 78.06]} zoom={11} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <MarkerCluster />
          </MapContainer>
        )}
      </div>
    </div>
  )
}
