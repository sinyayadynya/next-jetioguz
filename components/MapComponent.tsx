// ./components/MapComponent.tsx
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

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

  const AccommodationLayer = dynamic(() => import('./MarkerCluster'), { ssr: false });
  const NatureSiteLayer = dynamic(() => import('./MarkerCluster'), { ssr: false });
  const CultureSiteLayer = dynamic(() => import('./MarkerCluster'), { ssr: false });
  const WellnessLayer = dynamic(() => import('./MarkerCluster'), { ssr: false });
  const VillageLayer = dynamic(() => import('./MarkerCluster'), { ssr: false });

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


  return (
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
              <AccommodationLayer endpoint="/api/jetioguz/accommodation/map" iconUrl="/images/accommodation-icon.png" />
            </Overlay>
            <Overlay name="Nature Sites">
              <NatureSiteLayer endpoint="/api/jetioguz/nature/map" iconUrl="/images/nature-site-icon.png" />
            </Overlay>
            <Overlay name="Culture Sites">
              <CultureSiteLayer endpoint="/en/api/jetioguz/culture/map" iconUrl="/images/culture-site-icon.png" />
            </Overlay>
            <Overlay name="Wellness">
              <WellnessLayer endpoint="/en/api/jetioguz/wellness/map" iconUrl="/images/wellness-icon.png" />
            </Overlay>
            <Overlay name="Villages">
              <VillageLayer endpoint="/en/api/jetioguz/village/map" iconUrl="/images/village-icon.png" />
            </Overlay>
          </LayersControl>
        </MapContainer>
        )}
      </div>
  )
}
