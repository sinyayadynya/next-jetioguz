import { DrupalBlock } from 'next-drupal';
import Link from 'next/link';
import { MediaImage } from './media--image';

interface BlockHeroOffsetImageProps {
    block: DrupalBlock;
}

export function BlockHeroOffsetImage({ block }: BlockHeroOffsetImageProps) {
    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <h1 className="max-w-2xl text-4xl font-heading font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                        {block.field_heading}
                    </h1>
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p className="text-lg leading-8 text-gray-600">
                            {block.field_tagline}
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
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
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    {block.field_cta_link.title}{' '}
                                    <span aria-hidden="true">→</span>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className='mt-10 w-full max-w-lg sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'>
                        <MediaImage
                            media={block.field_media_image}
                            priority
                            className="aspect-[6/5] w-full max-w-lg rounded-2xl lg:max-w-none"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
