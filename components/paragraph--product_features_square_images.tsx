import { useState, useEffect } from 'react';
import axios from 'axios';
import { Section } from 'components/section';
import { DrupalParagraph } from 'next-drupal';

import { ViewOffersListing } from 'components/view--offers_listing';

interface Offer {
    name: string;
    area: string;
    image: string;
    type: string;
    url: string;
}

interface View {
    name: string;
    offers: Offer[];
}

interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

export function ParagraphProductFeaturesSquareImages({ paragraphType }: ParagraphProps) {
    const [view, setView] = useState<View | null>(null);

    useEffect(() => {
        axios
            .get("https://nomadsland.travel/en/api/dmo-offers/jetioguz/square-images")
            .then((response) => {
                const offers = response.data.map((offer) => {
                    const parser = new DOMParser();
                    const decodedType = parser.parseFromString(`<!doctype html><body>${offer.type}`, 'text/html').body.textContent;

                    return {
                        ...offer,
                        image: 'https://nomadsland.travel' + new DOMParser().parseFromString(offer.image, "text/html").querySelector("img").getAttribute('src'),
                        type: decodedType
                    };
                });


                setView({
                    name: "dmo_offers",
                    offers: offers
                });
            })
            .catch((error) => {
                console.error("Error fetching API data: ", error);
            });
    }, []);

    if (!view) {
        return <p>Loading...</p>;
    }

    return (
        <Section>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                    <div className="max-w-3xl">
                        <h2
                            id="features-heading"
                            className="font-medium text-gray-500"
                        >
                            {paragraphType.field_label}
                        </h2>
                        <p className="mt-2 text-3xl font-heading font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {paragraphType.field_heading}
                        </p>
                        <p className="mt-4 text-gray-500">
                            {paragraphType.field_tagline}
                        </p>
                    </div>

                    <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                        <div className="flex flex-col-reverse">
                            <ViewOffersListing offers={view.offers} />
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
