import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { DrupalBlock, DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';
import { Fragment, useState } from 'react';
import {
    Dialog,
    Disclosure,
    Menu,
    Popover,
    Transition,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { drupal } from 'lib/drupal';
import { getGlobalElements } from 'lib/get-global-elements';
import { getParams } from 'lib/get-params';
import { Layout, LayoutProps } from 'components/layout';
import { NodePlaceTeaser } from 'components/node--place--teaser';

interface PlacePageProps extends LayoutProps {
    places: DrupalNode[];
    field_feature_item_text_plain: string;
}

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'A-Z', href: '#', current: false },
    { name: 'Altitude: Low to High', href: '#', current: false },
    { name: 'Altitude: High to Low', href: '#', current: false },
];
const filters = [
    {
        id: 'type',
        name: 'Type',
        options: [
            {
                value: 'places',
                label: 'All Places',
                checked: true,
            },
            { value: 'villages', label: 'Villages', checked: false },
            { value: 'nature-sites', label: 'Nature sites', checked: false },
            { value: 'lakes', label: 'Lakes', checked: false },
            { value: 'beaches', label: 'Beaches', checked: false },
            { value: 'wellness', label: 'Wellness', checked: false },
        ],
    },
    {
        id: 'settlements',
        name: 'Settlements',
        options: [
            {
                value: 'settlements',
                label: 'All Settlements',
                checked: true,
            },
            { value: 'ak-dobo', label: 'Ak-Döbö', checked: false },
            { value: 'ak-shyyrak', label: 'Ak-Shyyrak', checked: false },
            { value: 'aldashev', label: 'Aldashev', checked: false },
            { value: 'barskoon', label: 'Barskoon', checked: false },
            { value: 'darkan', label: 'Darkan', checked: false },
            { value: 'jargylchak', label: 'Jargylchak', checked: false },
            { value: 'jeti-oguz', label: 'Jeti-Ögüz', checked: false },
            { value: 'kyzyl-suu', label: 'Kyzyl-Suu', checked: false },
            { value: 'lipenka', label: 'Lipenka', checked: false },
            { value: 'orgochor', label: 'Orgochor', checked: false },
            { value: 'svetlaya-polyana', label: 'Svetlaya Polyana', checked: false },
            { value: 'tamga', label: 'Tamga', checked: false },
            { value: 'yrdyk', label: 'Yrdyk', checked: false },
        ],
    },
];
const activeFilters = [{ value: 'villages', label: 'Villages' }];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

interface JsonApiResource {
    id: string;
    type: string;
}

interface DrupalParagraph extends JsonApiResource {
    id: string;
    type: string;
    langcode: string;
    status: boolean;
    field_feature_item_text_plain: string;
}

export default function PlacesPage({
    places,
    field_feature_item_text_plain,
}: //   menus,
//   blocks,
PlacePageProps) {
    const { t } = useTranslation();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <Layout
            //   menus={menus}
            //   blocks={blocks}
            meta={{
                title: t('shoreline-headline'),
            }}
        >
            <div className="bg-gray-50">
                <div>
                    {/* Mobile filter dialog */}
                    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                        <Dialog
                            as="div"
                            className="relative z-40 sm:hidden"
                            onClose={setMobileFiltersOpen}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-40 flex">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                        <div className="flex items-center justify-between px-4">
                                            <h2 className="text-lg font-medium text-gray-900">
                                                Filters
                                            </h2>
                                            <button
                                                type="button"
                                                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                                onClick={() =>
                                                    setMobileFiltersOpen(false)
                                                }
                                            >
                                                <span className="sr-only">
                                                    Close menu
                                                </span>
                                                <XMarkIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>

                                        {/* Filters */}
                                        <form className="mt-4">
                                            {filters.map((section) => (
                                                <Disclosure
                                                    as="div"
                                                    key={section.name}
                                                    className="border-t border-gray-200 px-4 py-6"
                                                >
                                                    {({ open }) => (
                                                        <>
                                                            <h3 className="-mx-2 -my-3 flow-root">
                                                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                                                                    <span className="font-medium text-gray-900">
                                                                        {
                                                                            section.name
                                                                        }
                                                                    </span>
                                                                    <span className="ml-6 flex items-center">
                                                                        <ChevronDownIcon
                                                                            className={classNames(
                                                                                open
                                                                                    ? '-rotate-180'
                                                                                    : 'rotate-0',
                                                                                'h-5 w-5 transform'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </Disclosure.Button>
                                                            </h3>
                                                            <Disclosure.Panel className="pt-6">
                                                                <div className="space-y-6">
                                                                    {section.options.map(
                                                                        (
                                                                            option,
                                                                            optionIdx
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    option.value
                                                                                }
                                                                                className="flex items-center"
                                                                            >
                                                                                <input
                                                                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                                    name={`${section.id}[]`}
                                                                                    defaultValue={
                                                                                        option.value
                                                                                    }
                                                                                    type="checkbox"
                                                                                    defaultChecked={
                                                                                        option.checked
                                                                                    }
                                                                                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                                                                />
                                                                                <label
                                                                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                                    className="ml-3 text-sm text-gray-500"
                                                                                >
                                                                                    {
                                                                                        option.label
                                                                                    }
                                                                                </label>
                                                                            </div>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            ))}
                                        </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>

                    <main>
                        <div className="bg-white mt-24">
                            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                    {t('shoreline-headline')}
                                </h1>
                                <p className="mt-4 max-w-xl text-sm text-gray-700">
                                    {field_feature_item_text_plain}
                                </p>
                            </div>
                        </div>

                        {/* Filters */}
                        <section aria-labelledby="filter-heading">
                            <h2 id="filter-heading" className="sr-only">
                                Filters
                            </h2>
                            {/* Sorting */}
                            <div className="border-b border-gray-200 bg-white pb-4">
                                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                                    <Menu
                                        as="div"
                                        className="relative inline-block text-left"
                                    >
                                        <div>
                                            <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                                Sort
                                                <ChevronDownIcon
                                                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                    aria-hidden="true"
                                                />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    {sortOptions.map(
                                                        (option) => (
                                                            <Menu.Item
                                                                key={
                                                                    option.name
                                                                }
                                                            >
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <a
                                                                        href={
                                                                            option.href
                                                                        }
                                                                        className={classNames(
                                                                            option.current
                                                                                ? 'font-medium text-gray-900'
                                                                                : 'text-gray-500',
                                                                            active
                                                                                ? 'bg-gray-100'
                                                                                : '',
                                                                            'block px-4 py-2 text-sm'
                                                                        )}
                                                                    >
                                                                        {
                                                                            option.name
                                                                        }
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        )
                                                    )}
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>

                                    <button
                                        type="button"
                                        className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                                        onClick={() =>
                                            setMobileFiltersOpen(true)
                                        }
                                    >
                                        Filters
                                    </button>

                                    <div className="hidden sm:block">
                                        <div className="flow-root">
                                            <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                                                {filters.map(
                                                    (section, sectionIdx) => (
                                                        <Popover
                                                            key={section.name}
                                                            className="relative inline-block px-4 text-left"
                                                        >
                                                            <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                                                <span>
                                                                    {
                                                                        section.name
                                                                    }
                                                                </span>
                                                                {sectionIdx ===
                                                                0 ? (
                                                                    <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                                                                        1
                                                                    </span>
                                                                ) : null}
                                                                <ChevronDownIcon
                                                                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                                    aria-hidden="true"
                                                                />
                                                            </Popover.Button>

                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-100"
                                                                enterFrom="transform opacity-0 scale-95"
                                                                enterTo="transform opacity-100 scale-100"
                                                                leave="transition ease-in duration-75"
                                                                leaveFrom="transform opacity-100 scale-100"
                                                                leaveTo="transform opacity-0 scale-95"
                                                            >
                                                                <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                    <form className="space-y-4">
                                                                        {section.options.map(
                                                                            (
                                                                                option,
                                                                                optionIdx
                                                                            ) => (
                                                                                <div
                                                                                    key={
                                                                                        option.value
                                                                                    }
                                                                                    className="flex items-center"
                                                                                >
                                                                                    <input
                                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                                        name={`${section.id}[]`}
                                                                                        defaultValue={
                                                                                            option.value
                                                                                        }
                                                                                        type="checkbox"
                                                                                        defaultChecked={
                                                                                            option.checked
                                                                                        }
                                                                                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                                                                    />
                                                                                    <label
                                                                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                                        className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                                                                                    >
                                                                                        {
                                                                                            option.label
                                                                                        }
                                                                                    </label>
                                                                                </div>
                                                                            )
                                                                        )}
                                                                    </form>
                                                                </Popover.Panel>
                                                            </Transition>
                                                        </Popover>
                                                    )
                                                )}
                                            </Popover.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Active filters */}
                            <div className="bg-gray-100">
                                <div className="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
                                    <h3 className="text-sm font-medium text-gray-500">
                                        Filters
                                        <span className="sr-only">
                                            , active
                                        </span>
                                    </h3>

                                    <div
                                        aria-hidden="true"
                                        className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
                                    />

                                    <div className="mt-2 sm:ml-4 sm:mt-0">
                                        <div className="-m-1 flex flex-wrap items-center">
                                            {activeFilters.map(
                                                (activeFilter) => (
                                                    <span
                                                        key={activeFilter.value}
                                                        className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                                                    >
                                                        <span>
                                                            {activeFilter.label}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                                                        >
                                                            <span className="sr-only">
                                                                Remove filter
                                                                for{' '}
                                                                {
                                                                    activeFilter.label
                                                                }
                                                            </span>
                                                            <svg
                                                                className="h-2 w-2"
                                                                stroke="currentColor"
                                                                fill="none"
                                                                viewBox="0 0 8 8"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeWidth="1.5"
                                                                    d="M1 1l6 6m0-6L1 7"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Product grid */}
                        <section
                            aria-labelledby="products-heading"
                            className="mx-auto max-w-2xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:px-8"
                        >
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                {places.map((place) => (
                                    <NodePlaceTeaser
                                        key={place.id}
                                        node={place}
                                    />
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </Layout>
    );
}


export async function getStaticProps(
    context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PlacePageProps>> {
    // Fetch all published places sorted by date.
    const places = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
        'node--place',
        context,
        {
            params: getParams('node--place')
                .addFilter(
                    'field_site.meta.drupal_internal__target_id',
                    'jetioguz'
                )
                .addFilter('field_dmo.field_dmo_area.meta.drupal_internal__target_id', '4541') // updated filter
                .getQueryObject(),
        }
    );

    const featureItemSmallIcon = await drupal.getResource<DrupalParagraph>(
        'paragraph--feature_item_small_icon',
        '1ff39fc3-84f2-4c04-98e3-059ef82cefa9',
    );

    const field_feature_item_text_plain = featureItemSmallIcon.field_feature_item_text_plain;

    //   const [banner] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
    //     "block_content--banner_block",
    //     context,
    //     {
    //       params: getParams("block_content--banner_block")
    //         .addFilter("info", "Jeti Oguz Places Banner")
    //         .addPageLimit(1)
    //         .getQueryObject(),
    //     }
    //   )

    return {
        props: {
            ...(await getGlobalElements(context)),
            //   banner,
            places,
            field_feature_item_text_plain,
        },
    };
}