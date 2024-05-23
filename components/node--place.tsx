import { DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

import Image from 'next/image';
import { MediaImage } from 'components/media--image';
import { Breadcrumbs } from 'components/breadcrumbs';
import { FormattedText } from 'components/formatted-text';
import Map from './node--place--map';
import MapComponent from './node--place--map';
import { absoluteURL } from 'lib/utils';
import Link from 'next/link';

interface NodePlaceProps {
    node: DrupalNode;
}

export function NodePlace({ node, ...props }: NodePlaceProps) {
    const { t } = useTranslation();

    const dmoAreaName = node.field_dmo?.field_dmo_area?.name;
    const dmoCommunityName = node.field_dmo?.field_dmo_community?.name;

    return (
        <div {...props}>
            <Breadcrumbs
                items={[
                    {
                        title: t('destinations'),
                        url: '/destinations',
                    },
                    {
                        title: node.title,
                    },
                ]}
            />

            <article className="pt-6 pb-24">
                {/* Hero Section  */}
                <div className="relative isolate overflow-hidden bg-white">
                    <svg
                        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <rect
                            width="100%"
                            height="100%"
                            strokeWidth={0}
                            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
                        />
                    </svg>
                    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                            <div className="mt-24 sm:mt-32 lg:mt-16">
                                <Link
                                    href="/destinations"
                                    className="inline-flex space-x-6"
                                >
                                    <span className="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10">
                                        {node.field_place_type.name}
                                    </span>
                                    {node.field_dmo && (
                                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                                        <span>{dmoAreaName}</span>
                                        <ChevronRightIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    )}
                                </Link>
                            </div>
                            <h1 className="mt-10 text-4xl font-heading font-bold tracking-tight text-gray-900 sm:text-6xl">
                                {node.title}
                            </h1>

                            <div className="mt-10 text-sm font-medium leading-6 text-gray-600 flex items-center space-x-4">
                                <div>{dmoCommunityName}</div>
                                {node.field_place_altitude && (
                                    <div className="flex items-center space-x-2 text-sm leading-6 text-gray-600">
                                        <span>{t('altitude')}:</span>
                                        <span className="font-semibold lowercase">
                                            {node.field_place_altitude} {t('m')}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                {node.field_place_type.field_description_jetioguz}
                            </p>
                            {/* <div className="mt-10 flex items-center gap-x-6">
                                <a href="#" className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    Read more <span aria-hidden="true">→</span>
                                </a>
                            </div> */}
                        </div>
                        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                    <div className="w-[76rem] rounded-md shadow-2xl overflow-hidden ring-1 ring-gray-900/10">
                                        <MediaImage
                                            media={node.field_media_image}
                                            // priority
                                            className="w-[76rem] sm:max-h-[48rem] rounded-md object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content section */}
                {/* <div className="mt-32 overflow-hidden sm:mt-40"> */}
                <div className="overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                                <h2 className="hidden text-3xl font-heading font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    About
                                </h2>
                                {node.field_place_usp && (
                                    <div className='w-full py-8 lg:hidden'>
                                        <div className="border-l border-primary-600 pl-8">
                                            <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                                                <p>
                                                    “{node.field_place_usp}”
                                                </p>
                                            </blockquote>
                                        </div>
                                    </div>
                                )}
                                {node.body && (
                                    <div className="prose [&>p]:mt-6 [&>*:first-child]:prose-xl [&>*:not(:first-child)]:prose [&>p]:leading-8 [&>p]:text-gray-600">
                                        <FormattedText
                                            text={node.body.processed}
                                        />
                                    </div>
                                )}
                            </div>


                            {node.field_media_images && (
                                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                                    <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">


                                        {node.field_place_usp && (
                                            <div className='hidden lg:flex lg:col-start-2 lg:w-full lg:max-w-lg lg:pb-8 lg:mb-24'>
                                                <div className="border-l border-primary-600 pl-8">
                                                    <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                                                        <p>
                                                            “{node.field_place_usp}”
                                                        </p>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        )}


                                        {node.field_media_images[0]?.field_media_image && (
                                            <MediaImage
                                                media={node.field_media_images[0]}
                                                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                        <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                            {node.field_media_images[1]?.field_media_image && (
                                                <MediaImage
                                                    media={node.field_media_images[1]}
                                                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                                />
                                            )}
                                        </div>
                                        <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                            {node.field_media_images[2]?.field_media_image && (
                                                <MediaImage
                                                    media={node.field_media_images[2]}
                                                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                                />
                                            )}
                                        </div>
                                        <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                            {node.field_media_images[3]?.field_media_image && (
                                                <MediaImage
                                                    media={node.field_media_images[3]}
                                                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                {/* Map section */}
                <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <div className="aspect-[5/2] w-full object-cover overflow-hidden xl:rounded-3xl">
                        {node.field_place_geofield?.lat && node.field_place_geofield?.lon ? (
                            <Map
                                latitude={+node.field_place_geofield.lat}
                                longitude={+node.field_place_geofield.lon}
                                className="w-full h-full"
                            />
                        ) : (
                            <p>{t('Location data is not available')}</p>
                        )}
                    </div>
                </div>
            </article>
        </div>
    );
}
