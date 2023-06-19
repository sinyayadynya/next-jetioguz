import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { DrupalBlock, DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';

import { drupal } from 'lib/drupal';
import { getGlobalElements } from 'lib/get-global-elements';
import { getParams } from 'lib/get-params';
import { Layout, LayoutProps } from 'components/layout';
import { ProductAccommodationCard } from 'components/product--accommodation--card';
import { BlockHeroOffsetImage } from 'components/block--hero-offset-image';

interface PlacePageProps extends LayoutProps {
    heroOffsetImage: DrupalBlock;
    accommodations: DrupalNode[];
}

import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from '@heroicons/react/20/solid';

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    // { name: 'Best Rating', href: '#', current: false },
    // { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
];
const subCategories = [
    { name: 'Yurts', href: '/accommodation/yurt#list' },
    { name: 'Hotels', href: '/accommodation/hotel#list' },
    { name: 'Guest Houses', href: '/accommodation/guesthouse#list' },
    { name: 'Homestays', href: '/accommodation/homestay#list' },
];
const filters = [
    {
        id: 'color',
        name: 'Area',
        options: [
            { value: 'ak-dobo', label: 'Ak-Döbö', checked: false },
            { value: 'ak-shyyrak', label: 'Ak-Shyyrak', checked: false },
            { value: 'aldashev', label: 'Aldashev', checked: true },
            { value: 'barskoon', label: 'Barskoon', checked: false },
            { value: 'darkan', label: 'Darkan', checked: false },
            { value: 'jargylchak', label: 'Jargylchak', checked: false },
            { value: 'jeti-ogüz', label: 'Jeti-Ögüz', checked: false },
            { value: 'kyzyl-suu', label: 'Kyzyl-Suu', checked: false },
            { value: 'lipenka', label: 'Lipenka', checked: true },
            { value: 'orgochor', label: 'Orgochor', checked: false },
            { value: 'darkan', label: 'Darkan', checked: false },
            { value: 'svetlaya-polyana', label: 'Svetlaya Polyana', checked: false },
            { value: 'tamga', label: 'Tamga', checked: false },
            { value: 'yrdyk', label: 'Yrdyk', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Location',
        options: [
            { value: 'lake', label: 'Lake', checked: false },
            { value: 'plateau', label: 'Plateau', checked: false },
            { value: 'mountain', label: 'Mountain', checked: true },
        ],
    },
    {
        id: 'size',
        name: 'Price',
        options: [
            { value: '0-20', label: '-$20', checked: false },
            { value: '20-40', label: '$20-40', checked: false },
            { value: '40-60', label: '$40-60', checked: false },
            { value: '60-80', label: '$60-80', checked: false },
            { value: '80', label: '$80+', checked: false },
        ],
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function AccommodationPage({
    heroOffsetImage,
    accommodations,
}: // menus,
// blocks,
PlacePageProps) {
    const { t } = useTranslation();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    return (
        <Layout
            //   menus={menus}
            //   blocks={blocks}
            meta={{
                title: t('accommodation'),
            }}
        >
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

                            <button
                                type="button"
                                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                            >
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
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
                            {/* Filters */}
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
                                                                        className="ml-3 text-sm text-gray-600"
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

                            {/* Accommodation grid */}
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8 xl:grid-cols-3">
                                {accommodations.map((accommodation) => (
                                    <ProductAccommodationCard
                                        key={accommodation.id}
                                        node={accommodation}
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

export async function getStaticProps(
    context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PlacePageProps>> {
    // Fetch all published accommodations sorted by date.
    const accommodations = await drupal.getResourceCollectionFromContext<
        DrupalNode[]
    >('product--accommodation', context, {
        params: getParams('product--accommodation')
            .addFilter('stores.meta.drupal_internal__target_id', '3')
            .addFilter('field_accommodation_type.meta.drupal_internal__target_id', '14')
            // .addSort("created", "DESC")
            .getQueryObject(),
    });

    const [heroOffsetImage] = await drupal.getResourceCollectionFromContext<
        DrupalBlock[]
    >('block_content--hero_block_offset_image', context, {
        params: getParams('block_content--hero_block_offset_image')
            .addFilter('info', 'Jeti Oguz Accommodation')
            .addPageLimit(1)
            .getQueryObject(),
    });

    return {
        props: {
            ...(await getGlobalElements(context)),
            heroOffsetImage,
            accommodations,
        },
    };
}
