import { useState, useEffect } from 'react';
import axios from 'axios';
import { Section } from 'components/section';
import { DrupalParagraph } from 'next-drupal';

import { ViewOffersListing } from 'components/view--offers_listing';

interface Offer {
    id: string;
    name: string;
    area: string;
    image: string;
    type: string;
    duration: string;
    path: string;
    from: string;
}

interface View {
    name: string;
    offers: Offer[];
}

interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

export function ParagraphProductFeaturesSquareImages({
    paragraphType,
}: ParagraphProps) {
    const [view, setView] = useState<View | null>(null);

    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/en/api/dmo-offers/jetioguz/square-images`
            )
            .then((response) => {
                const offers = response.data.map((offer) => {
                    const parser = new DOMParser();
                    const decodedType = parser.parseFromString(
                        `<!doctype html><body>${offer.type}`,
                        'text/html'
                    ).body.textContent;

                    const imageElement = new DOMParser()
                        .parseFromString(offer.image.trim(), 'text/html')
                        .querySelector('img');
                    const image = `${
                        process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
                    }${offer.image}`;


                    const processedOffer = {
                        ...offer,
                        image: image,
                        type: decodedType,
                        from: offer.from,
                        duration: offer.duration,
                    };

                    return processedOffer;
                });

                setView({
                    name: 'dmo_offers',
                    offers: offers,
                });
            })

            .catch((error) => {
                console.error('Error fetching API data: ', error);
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
                            {paragraphType.field_headline}
                        </p>
                        <p className="mt-4 text-gray-500">
                            {paragraphType.field_tagline}
                        </p>
                    </div>

                    <ViewOffersListing offers={view.offers} />

                </div>
            </div>
        </Section>
    );
}
