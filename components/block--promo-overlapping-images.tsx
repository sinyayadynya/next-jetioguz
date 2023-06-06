import { DrupalBlock } from 'next-drupal';
import Link from 'next/link';
import { MediaImage } from './media--image';
import { ParagraphPromoOverlappingImageTile } from './paragraph--promo_overlapping_image_tile';

interface BlockPromoOverlappingImagesProps {
    block: DrupalBlock;
}

export function BlockPromoOverlappingImages({
    block,
}: BlockPromoOverlappingImagesProps) {
    return (
        <div className="relative bg-white">
            {/* Background image and overlap */}
            <div
                aria-hidden="true"
                className="absolute inset-0 hidden sm:flex sm:flex-col"
            >
                <div className="relative w-full flex-1 bg-gray-800">
                    <div className="absolute inset-0 overflow-hidden">
                        <MediaImage
                            media={block.field_media_image}
                            priority
                            className="[&>*]:h-full [&>*]:w-full [&>*]:object-cover [&>*]:object-center"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gray-900 opacity-50" />
                </div>
                <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
            </div>

            <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
                {/* Background image and overlap */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 flex flex-col sm:hidden"
                >
                    <div className="relative w-full flex-1 bg-gray-800">
                        <div className="absolute inset-0 overflow-hidden">
                            <MediaImage
                                media={block.field_media_image}
                                priority
                                className="[&>*]:h-full [&>*]:w-full [&>*]:object-cover [&>*]:object-center"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gray-900 opacity-50" />
                    </div>
                    <div className="h-48 w-full bg-white" />
                </div>
                <div className="relative pt-48 pb-32">
                    <h1 className="text-4xl font-heading font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                        {block.field_title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-100">
                        {block.field_tagline}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        {block.field_cta_button && (
                            <Link
                                href={block.field_cta_button.uri.replace(
                                    'internal:',
                                    ''
                                )}
                                passHref
                                className="inline-block rounded-md bg-primary-600 px-3.5 py-2.5 font-semibold text-white hover:bg-primary-700"
                            >
                                {block.field_cta_button.title}
                            </Link>
                        )}

                        {block.field_cta_link && (
                            <Link
                                href={block.field_cta_link.uri.replace(
                                    'internal:',
                                    ''
                                )}
                                passHref
                                className="text-sm font-semibold leading-6 text-white"
                            >
                                {block.field_cta_link.title}{' '}
                                <span aria-hidden="true">→</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <section
                aria-labelledby="collection-heading"
                className="relative -mt-96 sm:mt-0"
            >
                <h2 id="collection-heading" className="sr-only">
                    Destinations
                </h2>
                <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 sm:px-6 lg:gap-x-8 lg:px-8">
                    {block.field_overlapping_image_tiles?.map((item) => (
                        <ParagraphPromoOverlappingImageTile
                            key={item.id}
                            paragraph={item}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
