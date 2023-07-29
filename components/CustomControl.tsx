// ./components/CustomControl.tsx
import { useEffect, useRef } from 'react'; // Import useRef
import { useMap } from 'react-leaflet';
import L, { Control, Layer, LayerGroup } from 'leaflet'; // Import types from 'leaflet'
import 'leaflet.markercluster';

declare module 'leaflet' {
    export function markerClusterGroup(options?: any): any;
}

export default function CustomControl({ layers, language }) {
    const map = useMap();
    const prevLayersRef = useRef<Record<string, LayerGroup>>({}); // Provide explicit type
    const customControlRef = useRef<Control>(); // Provide explicit type

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Fade out old layers
            if (prevLayersRef.current) {
                for (const layerGroup of Object.values(prevLayersRef.current)) {
                    const group = layerGroup as any; // Use 'any' type
                    group.eachLayer((layer: any) => {
                        if (layer instanceof L.Marker) {
                            layer.setOpacity(0); // Set opacity to 0
                        }
                    });
                }
            }

            // Remove old control
            if (customControlRef.current) {
                map.removeControl(customControlRef.current);
            }

            const newLayerGroups = {};

            layers.forEach(layer => {
                const markerClusterGroup = L.markerClusterGroup();
                newLayerGroups[layer.name] = markerClusterGroup;

                fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${language}${layer.endpoint}`)
                    .then(response => response.json())
                    .then(data => {
                        data.features.forEach(item => {
                            const customIcon = new L.Icon({
                                iconUrl: layer.iconUrl,
                                iconRetinaUrl: layer.iconUrl.replace('.png', '-2x.png'),
                                shadowUrl: '/images/marker-shadow.png',
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            });

                            const marker = L.marker(item.geometry.coordinates.reverse(), { icon: customIcon });
                            marker.bindPopup(`${item.properties.name} - ${item.properties.description}`);
                            markerClusterGroup.addLayer(marker);
                        });

                        map.addLayer(markerClusterGroup);
                    });
            });

            // Fade in new layers
            for (const layerGroup of Object.values(newLayerGroups)) {
                const group = layerGroup as any; // Use 'any' type
                group.eachLayer((layer: any) => {
                    if (layer instanceof L.Marker) {
                        layer.setOpacity(1); // Set opacity to 1
                    }
                });
            }

            prevLayersRef.current = newLayerGroups; // Update the reference to the current layers

            const customControl = L.Control.extend({
                options: {
                    position: 'topright'
                },
                onAdd: function () {
                    const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom z-50');
                    container.className = "border-gray-300 relative flex flex-col cursor-pointer rounded-lg border bg-white px-3 py-1 shadow-sm";
                    const fieldset = L.DomUtil.create('fieldset', '', container);
                    const legend = L.DomUtil.create('legend', 'sr-only', fieldset);
                    legend.innerHTML = "Overlays";
                    const div = L.DomUtil.create('div', 'divide-gray-200 divide-y', fieldset);
                    layers.forEach(layer => {
                        const label = L.DomUtil.create('label', 'relative flex items-start', div);
                        const div2 = L.DomUtil.create('div', 'flex h-8 items-center', label);
                        const input = L.DomUtil.create('input', '', div2);
                        input.type = 'checkbox';
                        input.checked = true;
                        input.className = `h-4 w-4 rounded border-gray-300 ${layer.color}`;
                        L.DomEvent.on(input, 'click', function () {
                            if (this.checked) {
                                map.addLayer(newLayerGroups[layer.name]);
                            } else {
                                map.removeLayer(newLayerGroups[layer.name]);
                            }
                        });
                        const div3 = L.DomUtil.create('div', 'ml-3 text-sm leading-8', label);
                        const label2 = L.DomUtil.create('label', 'font-medium text-gray-900', div3);
                        label2.innerHTML = ` ${layer.name}`;
                    });
                    return container;
                }
            });

            const newCustomControl = new customControl();
            map.addControl(newCustomControl);
            customControlRef.current = newCustomControl; // Update the reference to the current control
        }
    }, [map, layers, language]);

    return null;
}
