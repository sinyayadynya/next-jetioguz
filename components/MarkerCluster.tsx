// ./components/MarkerCluster.tsx
import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.markercluster';

declare module 'leaflet' {
  export function markerClusterGroup(options?: any): any;
}

export default function MarkerCluster({ endpoint }) {
  const map = useMap();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${endpoint}`)
      .then(response => response.json())
      .then(data => setData(data.features));
  }, [endpoint]);

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
