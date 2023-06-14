import { useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';
import { formatDistance } from 'date-fns';
import { getChannelInfo, getAllPlaylistItems } from 'lib/youtube';
import linkifyHtml from 'linkify-html';

import { Layout, LayoutProps } from 'components/layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import {
    Bars3BottomLeftIcon,
    CogIcon,
    HeartIcon,
    HomeIcon,
    PhotoIcon,
    RectangleStackIcon,
    Squares2X2Icon as Squares2X2IconOutline,
    UserGroupIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import {
    Bars4Icon,
    MagnifyingGlassIcon,
    PencilIcon,
    PlusIcon,
    Squares2X2Icon as Squares2X2IconMini,
} from '@heroicons/react/20/solid';

const tabs = [
    { name: 'Recently Viewed', href: '#', current: true },
    { name: 'Recently Added', href: '#', current: false },
    { name: 'Favorited', href: '#', current: false },
];

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function Channel({ title, videos }) {
    const { t } = useTranslation();

    const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
    const currentVideoRef = useRef(null);

    function selectVideoByIndex(index) {
        if (index > videos.length - 1) {
            setCurrentVideoIndex(0);
        } else {
            if (index < 0) {
                setCurrentVideoIndex(videos.length - 1);
            } else {
                setCurrentVideoIndex(index);
            }
        }

        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }

    return (
        <Layout
            meta={{
                title: t('video'),
            }}
        >
            <div className="mt-16 flex flex-1 items-stretch overflow-hidden">
                <main className="flex-1 overflow-y-auto">
                    <div>
                        <div className="mx-auto max-w-7xl px-4 pt-8 pb-4 sm:px-6 lg:px-8">
                            <h1 className="flex-1 text-2xl font-heading font-bold text-gray-900">
                                Videos
                                <span className="sr-only">{title}</span>
                            </h1>
                        </div>

                        {/* Player */}
                        <div
                            className={classNames(
                                'bg-gray-200 pt-14 p-12 mb-4 relative',
                                {
                                    hidden: currentVideoIndex === null,
                                }
                            )}
                            ref={currentVideoRef}
                        >
                            <div className="absolute top-0 right-0">
                                <button
                                    className="p-2 bg-gray-300 hover:bg-gray-400 focus:bg-gray-400"
                                    type="button"
                                    onClick={() =>
                                        selectVideoByIndex(
                                            currentVideoIndex - 1
                                        )
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="p-2 bg-gray-300 hover:bg-gray-400 focus:bg-gray-400"
                                    type="button"
                                    onClick={() =>
                                        selectVideoByIndex(
                                            currentVideoIndex + 1
                                        )
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="p-2 bg-gray-300 hover:bg-gray-400 focus:bg-gray-400"
                                    type="button"
                                    onClick={() => setCurrentVideoIndex(null)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            {currentVideoIndex !== null && (
                                <div className="mx-auto max-w-7xl px-4 pt-8 pb-4 sm:px-6 lg:px-8">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${videos[currentVideoIndex].snippet.resourceId.videoId}?autoplay=1`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <h2 className="text-3xl font-medium my-6">
                                        {
                                            videos[currentVideoIndex].snippet
                                                .title
                                        }
                                    </h2>
                                    <p
                                        className="prose"
                                        dangerouslySetInnerHTML={{
                                            __html: linkifyHtml(
                                                videos[
                                                    currentVideoIndex
                                                ].snippet.description?.replace(
                                                    /\n/g,
                                                    ' <br />'
                                                ),
                                                {
                                                    target: { url: '_blank' },
                                                }
                                            ),
                                        }}
                                    >
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
                        <div className="flex">
                            <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                                <button
                                    type="button"
                                    className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                                >
                                    <Bars4Icon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">
                                        Use list view
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                                >
                                    <Squares2X2IconMini
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">
                                        Use grid view
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="mt-3 sm:mt-2">
                            <div className="sm:hidden">
                                <label htmlFor="tabs" className="sr-only">
                                    Select a tab
                                </label>
                                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                                <select
                                    id="tabs"
                                    name="tabs"
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                                    defaultValue="Recently Viewed"
                                >
                                    <option>Recently Viewed</option>
                                    <option>Recently Added</option>
                                    <option>Favorited</option>
                                </select>
                            </div>
                            <div className="hidden sm:block">
                                <div className="flex items-center border-b border-gray-200">
                                    <nav
                                        className="-mb-px flex flex-1 space-x-6 xl:space-x-8"
                                        aria-label="Tabs"
                                    >
                                        {tabs.map((tab) => (
                                            <a
                                                key={tab.name}
                                                href={tab.href}
                                                aria-current={
                                                    tab.current
                                                        ? 'page'
                                                        : undefined
                                                }
                                                className={classNames(
                                                    tab.current
                                                        ? 'border-primary-500 text-primary-600'
                                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                                                )}
                                            >
                                                {tab.name}
                                            </a>
                                        ))}
                                    </nav>
                                    <div className="ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex">
                                        <button
                                            type="button"
                                            className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                                        >
                                            <Bars4Icon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">
                                                Use list view
                                            </span>
                                        </button>
                                        <button
                                            type="button"
                                            className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                                        >
                                            <Squares2X2IconMini
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">
                                                Use grid view
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section
                            className="mt-8 pb-16"
                            aria-labelledby="gallery-heading"
                        >
                            <h2 id="gallery-heading" className="sr-only">
                                Recently viewed
                            </h2>

                            <ul
                                role="list"
                                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                            >
                                {videos.map(
                                    (
                                        {
                                            snippet: {
                                                title,
                                                publishedAt,
                                                thumbnails,
                                                resourceId: { videoId },
                                            },
                                        },
                                        index
                                    ) => {
                                        return (
                                            <li
                                                key={videoId}
                                                className="relative"
                                                // onClick={() => selectVideoByIndex(index)}
                                            >
                                                <div
                                                    className={classNames(
                                                        thumbnails.current
                                                            ? 'ring-2 ring-primary-500 ring-offset-2'
                                                            : 'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                                                        'aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100'
                                                    )}
                                                >
                                                    <Image
                                                        src={
                                                            thumbnails.medium
                                                                ?.url
                                                        }
                                                        alt=""
                                                        height={
                                                            thumbnails.medium
                                                                ?.height
                                                        }
                                                        width={
                                                            thumbnails.medium
                                                                ?.width
                                                        }
                                                        className={classNames(
                                                            thumbnails.current
                                                                ? ''
                                                                : 'group-hover:opacity-75',
                                                            'pointer-events-none object-cover'
                                                        )}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            selectVideoByIndex(
                                                                index
                                                            )
                                                        }
                                                        className="absolute inset-0 focus:outline-none"
                                                    >
                                                        <span className="sr-only">
                                                            Watch {title}
                                                        </span>
                                                    </button>
                                                </div>
                                                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                                                    {title}
                                                </p>
                                                <p className="pointer-events-none block text-sm font-medium text-gray-500">
                                                    {formatDistance(
                                                        new Date(publishedAt),
                                                        new Date()
                                                    )}
                                                </p>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </section>
                    </div>
                </main>
            </div>
        </Layout>
    );
}

export async function getServerSideProps({ query, locale }) {
    const { id } = query;
    const info = await getChannelInfo(id);
    const playlistId = info?.items[0].contentDetails.relatedPlaylists.uploads;
    const title = info?.items[0].snippet.title;
    const videos = await getAllPlaylistItems(playlistId);

    return {
        props: {
            title,
            videos,
            ...(await serverSideTranslations(locale, ['common']))
        },
    };
}
