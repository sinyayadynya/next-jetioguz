import { DrupalParagraph } from 'next-drupal';
import Link from 'next/link';
import { MediaImage } from './media--image';

export interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

const offers = [
    { name: 'How to get there', description: 'From Bishkek', href: '#from-bishkek' },
    { name: "How to get there", description: 'From Cholpon-Ata', href: '#from-cholpon-ata' },
    { name: 'How to get there', description: 'From Almaty', href: '#from-almaty' },
]

export function ParagraphPromoOffersSplitImage({ paragraphType }: ParagraphProps) {
    return (
        <div className="mt-16 bg-white">
            <div className="flex flex-col border-b border-gray-200 lg:border-0">
                <nav aria-label="Offers" className="order-last lg:order-first">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <ul
                            role="list"
                            className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
                        >
                            {offers.map((offer) => (
                                <li key={offer.name} className="flex flex-col">
                                    <a
                                        href={offer.href}
                                        className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
                                    >
                                        <p className="text-sm text-gray-500">
                                            {offer.name}
                                        </p>
                                        <p className="font-semibold text-gray-900">
                                            {offer.description}
                                        </p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className="relative">
                    <div
                        aria-hidden="true"
                        className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
                    />
                    <div className="relative bg-gray-100 lg:bg-transparent">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                            <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                                <div className="lg:pr-16">
                                    <h1 className="text-4xl font-heading font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                        {paragraphType.field_headline}
                                    </h1>
                                    <p className="mt-4 text-xl text-gray-600">
                                        {paragraphType.field_tagline}
                                    </p>
                                    <div className="mt-6">

                                        {paragraphType.field_cta_button && (
                                            <Link
                                                href={paragraphType.field_cta_button.uri.replace(
                                                    'internal:',
                                                    ''
                                                )}
                                                passHref
                                                className="inline-block rounded-md border border-transparent bg-primary-600 px-8 py-3 font-medium text-white hover:bg-primary-700"
                                            >
                                                {paragraphType.field_cta_button.title}
                                            </Link>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
                         {paragraphType?.field_media_image && (
                            <MediaImage
                                media={paragraphType.field_media_image}
                                fill
                                priority
                                className="h-full w-full object-cover object-center"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
