import { DrupalParagraph } from 'next-drupal';
import Link from 'next/link';
import { MediaImage } from './media--image';
import { ContactCard } from './paragraph--contact_side_side_contact_card';
import { LocationCard } from './paragraph--contact_side_side_location_card';


export interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

export function ParagraphContactSideBySideGrid({ paragraphType }: ParagraphProps) {

    const gridItems = paragraphType.field_grid_items || [];

    const componentMapper = {
        'paragraph--contact_side_side_contact_card': ContactCard,
        'paragraph--contact_side_side_location_card': LocationCard,
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 border-b border-gray-100 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-heading font-bold tracking-tight text-gray-900">
                                {paragraphType.field_headline}
                            </h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                {paragraphType.field_tagline}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            {gridItems.map((item: any, index: number) => {
                                const Component = componentMapper[item.type];
                                return <Component key={index} data={item} />;
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}




{/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
    <div>
        <h2 className="text-3xl font-heading font-bold tracking-tight text-gray-900">
            Locations
        </h2>
        <p className="mt-4 leading-7 text-gray-600">
            We operate offices in both the scenic Jeti-Oguz region and the capital city of Bishkek to serve you.
        </p>
    </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
        <div className="rounded-2xl bg-gray-50 p-10">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
                Kyzyl Suu
            </h3>
            <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                <p>Manas 148</p>
                <p>Kyzyl Suu, Issyk Kul</p>
            </address>
        </div>
        <div className="rounded-2xl bg-gray-50 p-10">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
                Bishkek
            </h3>
            <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                <p>Nezhinsky lane 27</p>
                <p>Bishkek, Chuy</p>
            </address>
        </div>
    </div>
</div> */}
