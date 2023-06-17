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
import {
    LinkIcon,
    PlusIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid';

const AccommodationForm = dynamic(
    () => import('components/webform--accommodation'),
    { ssr: false }
);

const Accommodation = ({ product }) => {
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

    return (
        <Layout
            meta={{
                title: t('office-team'),
            }}
        >
            <div className="bg-white pb-24 lg:32">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    {/* Product details */}
                    <div className="lg:max-w-lg lg:self-end">

                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb">
                            <ol
                                role="list"
                                className="flex items-center space-x-2"
                            >
                                <li>
                                    <div className="flex items-center text-sm">
                                        <a
                                            href="/accommodation"
                                            className="font-medium text-gray-500 hover:text-gray-900"
                                        >
                                            {t('accommodation')}
                                        </a>
                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                                        >
                                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center text-sm">
                                        <a
                                            href="#"
                                            className="font-medium text-gray-500 hover:text-gray-900"
                                        >
                                            {product.type}
                                        </a>
                                    </div>
                                </li>
                            </ol>
                        </nav>

                        <div className="mt-4">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {product.name}
                            </h1>
                        </div>

                        <div
                            aria-labelledby="information-heading"
                            className="mt-4"
                        >
                            <h2 id="information-heading" className="sr-only">
                                Accommodation information
                            </h2>

                            <div className="flex items-center">
                                <p className="text-lg text-gray-900 sm:text-xl">
                                    {product.locality}
                                </p>

                                <div className="ml-4 border-l border-gray-300 pl-4">
                                    <div className="flex items-center">
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                {product.area}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 space-y-6">
                                <div className="text-base text-gray-500">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: product.description,
                                        }}
                                        className="prose"
                                    />
                                </div>
                            </div>

                            <h2 id="information-heading" className="sr-only">
                                Accommodation prices
                            </h2>

                            <div className="mt-4 space-y-6">
                                <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {product.priceSingleRoom ? (
                                        <div className="relative block rounded-lg border border-gray-300 p-4">
                                            <p className="mt-1 text-sm text-gray-500">
                                                {t('single-room')}
                                            </p>
                                            <p className="text-base font-medium text-gray-900">
                                                {product.priceSingleRoom}
                                            </p>
                                        </div>
                                    ) : null}

                                    {product.priceDoubleRoom ? (
                                        <div className="relative block rounded-lg border border-gray-300 p-4">
                                            <p className="mt-1 text-sm text-gray-500">
                                                {t('double-room')}
                                            </p>
                                            <p className="text-base font-medium text-gray-900">
                                                {product.priceDoubleRoom}
                                            </p>
                                        </div>
                                    ) : null}

                                    {product.priceTripleRoom ? (
                                        <div className="relative block rounded-lg border border-gray-300 p-4">
                                            <p className="mt-1 text-sm text-gray-500">
                                                {t('triple-room')}
                                            </p>
                                            <p className="text-base font-medium text-gray-900">
                                                {product.priceTripleRoom}
                                            </p>
                                        </div>
                                    ) : null}

                                    {product.priceSharedRoom ? (
                                        <div className="relative block rounded-lg border border-gray-300 p-4">
                                            <p className="mt-1 text-sm text-gray-500">
                                                {t('shared-room')}
                                            </p>
                                            <p className="text-base font-medium text-gray-900">
                                                {product.priceSharedRoom}
                                            </p>
                                        </div>
                                    ) : null}

                                    {product.priceSingleYurt ? (
                                        <div className="relative block rounded-lg border border-gray-300 p-4">
                                            <p className="mt-1 text-sm text-gray-500">
                                                {t('single-yurt')}
                                            </p>
                                            <p className="text-base font-medium text-gray-900">
                                                {product.priceSingleYurt}
                                            </p>
                                        </div>
                                    ) : null}

                                    {product.priceDoubleYurt ? (
                                        <div className="relative block rounded-lg border border-gray-300 p-4">
                                            <p className="mt-1 text-sm text-gray-500">
                                                {t('double-yurt')}
                                            </p>
                                            <p className="text-base font-medium text-gray-900">
                                                {product.priceDoubleYurt}
                                            </p>
                                        </div>
                                    ) : null}

                                    {product.priceTripleYurt ? (
                                        <div className="relative block rounded-lg border border-gray-300 p-4">
                                            <p className="mt-1 text-sm text-gray-500">
                                                {t('triple-yurt')}
                                            </p>
                                            <p className="text-base font-medium text-gray-900">
                                                {product.priceTripleYurt}
                                            </p>
                                        </div>
                                    ) : null}

                                    {product.priceSharedYurt ? (
                                        <div className="relative block rounded-lg border border-gray-300 p-4">
                                            <p className="mt-1 text-sm text-gray-500">
                                                {t('shared-yurt')}
                                            </p>
                                            <p className="text-base font-medium text-gray-900">
                                                {product.priceSharedYurt}
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product image */}
                    <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Product form */}
                    <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                        <div aria-labelledby="options-heading">
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    onClick={() => setOpen(true)}
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                    {t('book-now')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More images  */}
                <div className="overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    {product.type}
                                </h2>
                                <p className="mt-6 text-xl leading-8 text-gray-600">
                                    Quasi est quaerat. Sit molestiae et.
                                    Provident ad dolorem occaecati eos iste.
                                    Soluta rerum quidem minus ut molestiae velit
                                    error quod. Excepturi quidem expedita
                                    molestias quas.
                                </p>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    Anim aute id magna aliqua ad ad non deserunt
                                    sunt. Qui irure qui lorem cupidatat commodo.
                                    Elit sunt amet fugiat veniam occaecat
                                    fugiat. Quasi aperiam sit non sit neque
                                    reprehenderit.
                                </p>
                            </div>

                            {product.images1 && (
                                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                                    <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                        {product.images1 && (
                                            <img
                                                src={product.images1}
                                                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                        <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                            {product.images2 && (
                                                <img
                                                    src={product.images2}
                                                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                                />
                                            )}
                                        </div>
                                        <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                            {product.images3 && (
                                                <img
                                                    src={product.images3}
                                                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                                />
                                            )}
                                        </div>
                                        <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                            {product.images4 && (
                                                <img
                                                    src={product.images4}
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

                {/* Related accommodations block  */}
            </div>

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
                                                                Book an
                                                                accommodation
                                                            </Dialog.Title>
                                                            <p className="text-sm text-gray-500">
                                                                Get started by
                                                                filling in the
                                                                information
                                                                below to create
                                                                your new
                                                                project.
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
                                                                    Close panel
                                                                </span>
                                                                <XMarkIcon
                                                                    className="h-6 w-6"
                                                                    aria-hidden="true"
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <AccommodationForm />
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
    const res = await fetch(
        `https://nomadsland.travel/api/dmo-accommodation/jetioguz/${id}`
    );
    const productData = await res.json();

    // In your case, the API returns an array with a single object, so you just take the first element.
    const product = productData[0];

    return {
        props: {
            product: product || null,  // If product is undefined, use null instead
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export default Accommodation;