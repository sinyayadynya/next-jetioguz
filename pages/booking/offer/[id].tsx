import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Layout, LayoutProps } from 'components/layout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const OfferForm = dynamic(() => import('components/webform--offer'), {
    ssr: false,
});

const Offer = ({ product }) => {
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

    return (
        <Layout
            meta={{
                title: product.name,
            }}
        >
            <main className="pt-16 sm:pt-24">
                <nav aria-label="Breadcrumb">
                    <ol
                        role="list"
                        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                    >
                        <li>
                            <div className="flex items-center">
                                <Link
                                    href="/booking/offers"
                                    className="mr-2 text-sm font-medium text-gray-900"
                                >
                                    {t('offers')}
                                </Link>
                                <svg
                                    width={16}
                                    height={20}
                                    viewBox="0 0 16 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-5 w-4 text-gray-300"
                                >
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li className="text-sm">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: product.type,
                                }}
                            ></span>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <Image
                            src={product.images1}
                            alt={product.name}
                            width={688}
                            height={930}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <Image
                                src={product.images2}
                                alt={product.name}
                                width={688}
                                height={930}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <Image
                                src={product.images3}
                                alt={product.name}
                                width={688}
                                height={930}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <Image
                            src={product.images4}
                            alt={product.name}
                            width={688}
                            height={930}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            {product.name}
                        </h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">{t('from')} {product.pax10}</p>

                        <div className='lg:mt-4'>
                            <h3 className="text-sm font-medium text-gray-900">
                                {t('price-per-person')}
                            </h3>
                            <div className='text-sm text-gray-600'>
                                1 Pax: {product.pax1}<br />
                                2 Pax: {product.pax2}<br />
                                3-4 Pax: {product.pax3}<br />
                                5-9 Pax: {product.pax5}<br />
                                10+ Pax: {product.pax10}
                            </div>
                        </div>

                        <div className='lg:mt-4'>
                            <h3 className="text-sm font-medium text-gray-900">
                                {t('duration')}
                            </h3>
                            <div className='text-sm text-gray-600'>
                                {product.duration}
                            </div>
                        </div>

                        <div className='lg:mt-4'>
                            <h3 className="text-sm font-medium text-gray-900">
                                {t('minimum-group-size')}
                            </h3>
                            <div className='text-sm text-gray-600'>
                                {product.min}
                            </div>
                        </div>

                        <button
                            type="submit"
                            onClick={() => setOpen(true)}
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-50 lg:mt-12"
                        >
                            {t('book-now')}
                        </button>


                        <div className='lg:mt-12'>
                            <div className='bg-gray-100 border border-gray-300 rounded-lg py-4 px-4'>
                                <div dangerouslySetInnerHTML={{ __html: product.info }} className="text-sm text-gray-600"></div>
                            </div>
                        </div>

                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                {/* <p className="text-base text-gray-900">{product.description}</p> */}
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">
                                {t('highlights')}
                            </h3>
                            <div className="mt-4">
                                <div dangerouslySetInnerHTML={{ __html: product.highlights }} className="[&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-4 [&>ul]:text-sm [&>ul>li]:text-gray-400"></div>
                            </div>
                        </div>

                        <section
                            aria-labelledby="program-heading"
                            className="mt-10"
                        >
                            <h2
                                id="program-heading"
                                className="text-sm font-medium text-gray-900"
                            >
                                {t('program')}
                            </h2>

                            <div className="mt-4 space-y-6">
                                <div dangerouslySetInnerHTML={{ __html: product.details }} className="text-sm text-gray-600 [&>p]:mt-4"></div>
                            </div>
                        </section>

                        <section
                            aria-labelledby="included-heading"
                            className="mt-10"
                        >
                            <h3
                                id="included-heading"
                                className="text-sm font-medium text-gray-900"
                            >
                                {t('included')}
                            </h3>

                            <div className="mt-4 space-y-6">
                                <div dangerouslySetInnerHTML={{ __html: product.included }} className="text-sm text-gray-600 [&>p]:mt-4"></div>
                            </div>
                        </section>

                        <section
                            aria-labelledby="not_included-heading"
                            className="mt-10"
                        >
                            <h3
                                id="not_included-heading"
                                className="text-sm font-medium text-gray-900"
                            >
                                {t('not-included')}
                            </h3>

                            <div className="mt-4 space-y-6">
                                <div dangerouslySetInnerHTML={{ __html: product.not_included }} className="text-sm text-gray-600 [&>p]:mt-4"></div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        {/* Reviews */}
                        <section
                            aria-labelledby="reviews-heading"
                            className="border-t border-gray-200 pt-10 lg:pt-16"
                        ></section>
                    </div>
                </div>
                <section
                    aria-labelledby="related-products-heading"
                    className="bg-white"
                >
                    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2
                            id="related-products-heading"
                            className="text-xl font-bold tracking-tight text-gray-900"
                        >
                            {t('other-travelers-also-booked')}
                        </h2>
                    </div>
                </section>
            </main>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={setOpen}>
                    <div className="fixed inset-0" />

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1">
                                                {/* Header */}
                                                <div className="bg-gray-50 px-4 py-6 sm:px-6">
                                                    <div className="flex items-start justify-between space-x-3">
                                                        <div className="space-y-1">
                                                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                                {t('offer-webform-title')}
                                                            </Dialog.Title>
                                                            <p className="text-sm text-gray-500">
                                                                {t('offer-webform-description')}
                                                            </p>
                                                        </div>
                                                        <div className="flex h-7 items-center">
                                                            <button
                                                                type="button"
                                                                className="text-gray-400 hover:text-gray-500"
                                                                onClick={() =>
                                                                    setOpen(
                                                                        false
                                                                    )
                                                                }
                                                            >
                                                                <span className="sr-only">
                                                                    {t('close-panel')}
                                                                </span>
                                                                <XMarkIcon
                                                                    className="h-6 w-6"
                                                                    aria-hidden="true"
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <OfferForm productName={product.name} handleClose={() => setOpen(false)} />

                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </Layout>
    );
};

// This is the getServerSideProps function
export async function getServerSideProps(context) {
    const { id } = context.params;
    const { locale } = context;

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${locale}/api/dmo-offer/jetioguz/${id}`
        );

        if (!res.ok) {
            console.error('HTTP error', res.status);
            return { props: { error: true } };
        }

        const text = await res.text();

        try {
            const productData = JSON.parse(text);
            const product = productData[0];

            return {
                props: {
                    product: product || null, // If product is undefined, use null instead
                    ...(await serverSideTranslations(locale, ['common'])),
                },
            };
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return { props: { error: true } };
        }
    } catch (error) {
        console.error('HTTP error', error);
        return { props: { error: true } };
    }
}

//     return {
//         props: {
//             product: product || null,  // If product is undefined, use null instead
//             ...(await serverSideTranslations(locale, ['common'])),
//         },
//     };
// }

export default Offer;
