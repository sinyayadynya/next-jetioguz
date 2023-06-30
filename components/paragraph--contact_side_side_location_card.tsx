import { DrupalParagraph } from 'next-drupal';
import Map from './node--place--map';

export interface LocationCardProps {
    data: DrupalParagraph;
}

export function LocationCard({ data }: LocationCardProps) {
    return (
        <div className='sm:col-span-2'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8'>

                <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                        {data.field_label}
                    </h3>
                    <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                        <p>{data.field_address.address_line1}</p>
                        <p>{data.field_address.locality}, {data.field_address.administrative_area} {data.field_address.country_code}</p>
                    </address>
                </div>

                <div className="rounded-2xl bg-gray-50 w-full object-cover overflow-hidden">

                    <Map
                        latitude={+data.field_geofield.lat}
                        longitude={+data.field_geofield.lon}
                        className="w-full h-full"
                    />

                </div>
            </div>
        </div>
    );
}
