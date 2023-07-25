// ./pages/map.tsx
import { useEffect, useState } from 'react';
import { getGlobalElements } from "lib/get-global-elements"
import dynamic from 'next/dynamic';
import { Header, HeaderProps } from "components/header"
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { useMap } from 'react-leaflet';
import { useTranslation } from 'next-i18next';


// Dynamically import MapContainer, TileLayer, Marker, Popup
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false } // This line is important. It's what prevents server-side render
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

// const Marker = dynamic(
//   () => import('react-leaflet').then((mod) => mod.Marker),
//   { ssr: false }
// );

// const Popup = dynamic(
//   () => import('react-leaflet').then((mod) => mod.Popup),
//   { ssr: false }
// );

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

const AccommodationLayer = dynamic(() => import('../components/MarkerCluster'), { ssr: false });
const NatureSiteLayer = dynamic(() => import('../components/MarkerCluster'), { ssr: false });

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
        <div className="absolute top-0 inset-x-0 z-[999]">
            <Header />
        </div>
      <div style={{ height: 'calc(100vh - 64px)', width: '100%' }} className='mt-16'>
        {typeof window !== 'undefined' && (
          <MapContainer center={[42.35, 78.06]} zoom={11} style={{ height: '100%', width: '100%' }}>
          <LayersControl position="topright">
            <BaseLayer checked name="OpenStreetMap">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            </BaseLayer>
            <Overlay name="Accommodation">
              <AccommodationLayer endpoint="/api/jetioguz/accommodation/map" />
            </Overlay>
            <Overlay name="Nature Sites">
              <NatureSiteLayer endpoint="/api/jetioguz/nature/map" />
            </Overlay>
          </LayersControl>
        </MapContainer>
        )}
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
    return {
      props: {
        ...(await getGlobalElements(context)),
        // You can include other props here as well.
      },
    };
  }
