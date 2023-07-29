// ./components/view--events_listing.tsx

import React, { useState, Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useTranslation } from "next-i18next";
import parse from 'html-react-parser';

export function ViewEventsListing({ events, ...props }) {
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    if (!events) return null;

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setOpen(true);
    };

    return (
        <>
            <ol {...props} className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                {events.map((event) => (
                    <li
                        key={event.id}
                        className="relative flex space-x-6 py-6 xl:static cursor-pointer"
                        onClick={() => handleEventClick(event)}
                    >
                        <Image
                            src={event.image}
                            alt={event.name}
                            width={56}
                            height={56}
                            className="h-14 w-14 flex-none rounded-full object-cover"
                        />
                        <div className="flex-auto">
                            <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{event.name}</h3>
                            <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                <div className="flex items-start space-x-3">
                                    <dt className="mt-0.5">
                                        <span className="sr-only">{t('date')}</span>
                                        <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <time dateTime={event.date}>{event.date}</time>
                                    </dd>
                                </div>
                                <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                                    <dt className="mt-0.5">
                                        <span className="sr-only">{t('location')}</span>
                                        <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>{event.locality}</dd>
                                </div>
                            </dl>
                        </div>
                    </li>
                ))}
            </ol>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                            <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                                                <div className="px-4 sm:px-6">
                                                    <div className="flex items-start justify-between">
                                                        <h2 id="slide-over-heading" className="text-base font-semibold leading-6 text-gray-900">
                                                            {t('event')}
                                                        </h2>
                                                        <div className="ml-3 flex h-7 items-center">
                                                            <button
                                                                type="button"
                                                                className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                <span className="absolute -inset-2.5" />
                                                                <span className="sr-only">{t('close-panel')}</span>
                                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="relative mt-6 flex-1">

                                                    {/* Event details */}

                                                    <div>
                                                        <div className="pb-1 sm:pb-6">
                                                            <div>
                                                                <div className="relative h-40 sm:h-56">
                                                                    <Image
                                                                        className="absolute h-full w-full object-cover"
                                                                        src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${selectedEvent?.slideimage}`}
                                                                        alt={selectedEvent?.name}
                                                                        width={874}
                                                                        height={278}
                                                                    />
                                                                </div>
                                                                <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                                                                    <div className="sm:flex-1">
                                                                        <div>
                                                                            <div className="flex items-center">
                                                                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                                                                    {selectedEvent?.name}
                                                                                </h3>
                                                                            </div>
                                                                            {/* <p className="text-sm text-gray-500">@ashleyporter</p> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="px-4 pb-5 pt-5 sm:px-0 sm:pt-0">
                                                            <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                                                                <div>
                                                                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">{t('location')}</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{selectedEvent?.locality}</dd>
                                                                </div>

                                                                <div>
                                                                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">{t('date')}</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                                                        {selectedEvent?.date}
                                                                    </dd>
                                                                </div>
                                                                {selectedEvent?.text && (
                                                                <div>
                                                                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">{t('description')}</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                                                        <div className="prose">
                                                                            {selectedEvent?.text ? parse(selectedEvent?.text) : null}
                                                                        </div>
                                                                    </dd>
                                                                </div>
                                                                )}

                                                                {/* <div>
                                                                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Website</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">ashleyporter.com</dd>
                                                                </div> */}
                                                            </dl>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
