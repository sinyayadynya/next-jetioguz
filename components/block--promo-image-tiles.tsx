import { DrupalBlock } from 'next-drupal';
import Link from 'next/link';
import { MediaImage } from './media--image';

interface BlockPromoImageTilesProps {
    block: DrupalBlock;
}

export function BlockPromoImageTiles({ block }: BlockPromoImageTilesProps) {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-heading font-bold tracking-tight text-gray-900 sm:text-6xl">
                            {block.field_heading}
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            {block.field_tagline}
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <MediaImage
                                                    media={block.field_media_image_1}
                                                    height={512}
                                                    width={352}
                                                    priority
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <MediaImage
                                                    media={block.field_media_image_2}
                                                    height={512}
                                                    width={352}
                                                    priority
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <MediaImage
                                                    media={block.field_media_image_3}
                                                    height={512}
                                                    width={352}
                                                    priority
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <MediaImage
                                                    media={block.field_media_image_4}
                                                    height={512}
                                                    width={352}
                                                    priority
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <MediaImage
                                                    media={block.field_media_image_5}
                                                    height={512}
                                                    width={352}
                                                    priority
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <MediaImage
                                                    media={block.field_media_image_6}
                                                    height={512}
                                                    width={352}
                                                    priority
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <MediaImage
                                                    media={block.field_media_image_7}
                                                    height={512}
                                                    width={352}
                                                    priority
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {block.field_cta_button && (
                                (<Link
                                    href={block.field_cta_button.uri.replace("internal:", "")}
                                    passHref
                                    className="inline-block rounded-md border border-transparent bg-primary-600 px-8 py-3 text-center font-medium text-white hover:bg-primary-700">

                                    {block.field_cta_button.title}

                                </Link>)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
