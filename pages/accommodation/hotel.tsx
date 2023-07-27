// ./pages/accommodation.tsx

import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { DrupalBlock, DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { drupal } from 'lib/drupal';
import { getGlobalElements } from 'lib/get-global-elements';
import { getParams } from 'lib/get-params';
import { Layout, LayoutProps } from 'components/layout';
import { ProductAccommodationCard } from 'components/product--accommodation--card';
import { BlockHeroOffsetImage } from 'components/block--hero-offset-image';

import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'

import { XMarkIcon } from '@heroicons/react/24/outline'

import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from '@heroicons/react/20/solid';

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
];

const subCategories = [
    { name: 'Yurts', href: '/accommodation/yurt#list' },
    { name: 'Hotels', href: '/accommodation/hotel#list' },
    { name: 'Guest Houses', href: '/accommodation/guesthouse#list' },
    { name: 'Homestays', href: '/accommodation/homestay#list' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function AccommodationPage({ heroOffsetImage }) {
    const { locale } = useRouter();  // Get the current locale
    const { t } = useTranslation();
    const [accommodations, setAccommodations] = useState([]);
    const [filteredAccommodations, setFilteredAccommodations] = useState([]);

    const [locations, setLocations] = useState([]);
    const [areas, setAreas] = useState([]);

    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedAreas, setSelectedAreas] = useState([]);

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const filters = [
        {
            id: 'location',
            name: 'Location',
            options: locations,
        },
        {
            id: 'area',
            name: 'Area',
            options: areas,
        },
    ];

    const handleCheckboxChange = (event, filterType) => {
        const option = event.target.value;
        const selectedOption = filters.find(filter => filter.id === filterType).options.find(opt => opt.value === option);

        if (filterType === 'location') {
            if (event.target.checked) {
                setSelectedLocations([...selectedLocations, selectedOption.id]);
            } else {
                setSelectedLocations(selectedLocations.filter(location => location !== selectedOption.id));
            }
        } else if (filterType === 'area') {
            if (event.target.checked) {
                setSelectedAreas([...selectedAreas, selectedOption.id]);
            } else {
                setSelectedAreas(selectedAreas.filter(area => area !== selectedOption.id));
            }
        }
    };

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${locale}/api/dmo-jetioguz/accommodations`)
            .then((response) => {
                const accommodations = response.data
                    .filter(accommodation => accommodation.type_id === '4')
                    .map(accommodation => ({
                    id: accommodation.id,
                    product_id: accommodation.product_id,
                    name: accommodation.name,
                    type: accommodation.type,
                    url: accommodation.url,
                    image: accommodation.image,
                    locality: accommodation.locality,
                    area: accommodation.area,
                    area_id: accommodation.area_id,
                    location: accommodation.location,
                    location_id: accommodation.location_id
                }));

                setAccommodations(accommodations);
                setFilteredAccommodations(accommodations);

                const uniqueLocations = Array.from(new Set(accommodations.map(accommodation => accommodation.location)));
                const uniqueAreas = Array.from(new Set(accommodations.map(accommodation => accommodation.area)));


                const locationOptions = uniqueLocations.map((location: string) => ({
                    id: accommodations.find(accommodation => accommodation.location === location).location_id,
                    value: location.toLowerCase().replace(/\s+/g, '-'),
                    label: location,
                    checked: false
                })).sort((a, b) => a.id - b.id);

                const areaOptions = uniqueAreas.map((area: string) => ({
                    id: accommodations.find(accommodation => accommodation.area === area).area_id,
                    value: area.toLowerCase().replace(/\s+/g, '-'),
                    label: area,
                    checked: false
                })).sort((a, b) => a.id - b.id);


                setLocations(locationOptions);
                setAreas(areaOptions);
            });
    }, [locale]);  // Add locale to the dependency array

    useEffect(() => {
        if (selectedLocations.length > 0 || selectedAreas.length > 0) {
            const newFilteredAccommodations = accommodations.filter(accommodation =>
                (selectedLocations.length === 0 || selectedLocations.includes(accommodation.location_id)) &&
                (selectedAreas.length === 0 || selectedAreas.includes(accommodation.area_id))
            );
            setFilteredAccommodations(newFilteredAccommodations);
        } else {
            setFilteredAccommodations(accommodations);
        }
    }, [selectedLocations, selectedAreas, accommodations]);

    return (
        <Layout
            meta={{
                title: t('accommodation'),
            }}
        >



            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
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
                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                        <button
                        type="button"
                        className="relative -mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                        >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                        <h3 className="sr-only">Categories</h3>
                        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                        {subCategories.map((category) => (
                            <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3">
                                {category.name}
                            </a>
                            </li>
                        ))}
                        </ul>

                        {filters.map((section) => (
                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                            {({ open }) => (
                            <>
                                <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900">{section.name}</span>
                                    <span className="ml-6 flex items-center">
                                    {open ? (
                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                    )}
                                    </span>
                                </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                    <div className="space-y-6">
                                        {section.options.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center">
                                            <input
                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                            name={`${section.id}[]`}
                                            defaultValue={option.value}
                                            type="checkbox"
                                            defaultChecked={option.checked}
                                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                            onChange={(event) => handleCheckboxChange(event, section.id)}
                                            />
                                            <label
                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                            >
                                            {option.label}
                                            </label>
                                        </div>
                                        ))}
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




            <BlockHeroOffsetImage block={heroOffsetImage} />

            <div>
                <main id="list" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
                        <h2 className="text-4xl font-heading font-bold tracking-tight text-gray-900">
                            {t('find-your-accommodation')}
                        </h2>

                        <div className="flex items-center">
                            <Menu
                                as="div"
                                className="relative inline-block text-left"
                            >
                                {/* <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div> */}

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <Menu.Item key={option.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={option.href}
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
                                                            {option.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            {/* <button
                                type="button"
                                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                            >
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button> */}
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>

                    <section
                        aria-labelledby="products-heading"
                        className="pb-24 pt-6"
                    >
                        <h2 id="products-heading" className="sr-only">
                            Accommodation
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul
                                    role="list"
                                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                                >
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href}>
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {filters.map((section) => (
                                    <Disclosure
                                        as="div"
                                        key={section.id}
                                        className="border-b border-gray-200 py-6"
                                    >
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">
                                                            {section.name}
                                                        </span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <PlusIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    value={option.value}
                                                                    type="checkbox"
                                                                    checked={section.id === 'location' ? selectedLocations.includes(option.id) : selectedAreas.includes(option.id)}
                                                                    onChange={(event) => handleCheckboxChange(event, section.id)}
                                                                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                                                />
                                                                <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: option.label }}>
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}



                            </form>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8 xl:grid-cols-3">
                                {filteredAccommodations.map((accommodation) => (
                                    <ProductAccommodationCard
                                        key={accommodation.id}
                                        accommodation={accommodation}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    );
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<LayoutProps>> {
    const locale = context.locale || 'en'; // default to 'en' if locale is not defined

    const [heroOffsetImage] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
        'block_content--hero_block_offset_image',
        context,
        {
            params: getParams('block_content--hero_block_offset_image')
                .addFilter('info', 'Jeti Oguz Accommodation')
                .addPageLimit(1)
                .getQueryObject(),
        }
    );

    return {
        props: {
            ...(await getGlobalElements(context)),
            heroOffsetImage,
            locale, // pass the locale to your component
        },
    };
}
