import * as React from 'react';
import Link from 'next/link';
import { DrupalMenuLinkContent } from 'next-drupal';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';

import siteConfig from 'site.config';
import { Logo } from 'components/logo';
import { LocaleSwitcher } from 'components/locale-switcher';
import { MenuMain } from 'components/menu-main';
import { MenuUser } from 'components/menu-user';

import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    BuildingLibraryIcon,
    CakeIcon,
    CalendarDaysIcon,
    ChatBubbleLeftIcon,
    CursorArrowRaysIcon,
    FaceSmileIcon,
    GlobeAsiaAustraliaIcon,
    HomeIcon,
    MapIcon,
    SparklesIcon,
    SunIcon,
    TrophyIcon,
    TruckIcon,
    UserGroupIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from '@heroicons/react/20/solid';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export interface HeaderProps {
    menus: {
        main: DrupalMenuLinkContent[];
    };
}

// export function Header({ menus }: HeaderProps) {
export function Header() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const prefix = lang !== 'en' ? `/${lang}` : '';
    // const [showMenu, setShowMenu] = React.useState<Boolean>(false)

    const navigation = {
        headerThingsToDo: [
            {
                name: t('sport-leisure'),
                description: t('sport-leisure-description'),
                href: `${prefix}/things-to-do/sport-leisure`,
                icon: TrophyIcon,
            },
            {
                name: t('culture-museum'),
                description: t('culture-museum-description'),
                href: `${prefix}/things-to-do/culture-museum`,
                icon: BuildingLibraryIcon,
            },
            {
                name: t('events'),
                description: t('events-description'),
                href: `${prefix}/things-to-do/events`,
                icon: CalendarDaysIcon,
            },
            {
                name: t('food-drink'),
                description: t('food-drink-description'),
                href: `${prefix}/things-to-do/food-drink`,
                icon: CakeIcon,
            },
            {
                name: t('transportation'),
                description: t('transportation-description'),
                href: `${prefix}/things-to-do/transportation`,
                icon: TruckIcon,
            },
        ],
        headerDestinations: [
            {
                name: t('villages'),
                description: t('villages-description'),
                href: `${prefix}/destinations/villages`,
                icon: HomeIcon,
            },
            {
                name: t('nature-sites'),
                description: t('nature-sites-description'),
                href: `${prefix}/destinations/nature-sites`,
                icon: GlobeAsiaAustraliaIcon,
            },
            {
                name: t('lakes'),
                description: t('lakes-description'),
                href: `${prefix}/destinations/lakes`,
                icon: SparklesIcon,
            },
            {
                name: t('beaches'),
                description: t('beaches-description'),
                href: `${prefix}/destinations/beaches`,
                icon: SunIcon,
            },
            {
                name: t('wellness'),
                description: t('wellness-description'),
                href: `${prefix}/destinations/wellness`,
                icon: FaceSmileIcon,
            },
        ],
        headerPlanning: [
            {
                name: t('how-to-get-there'),
                description: t('how-to-get-there-description'),
                href: `${prefix}/planning/how-to-get-there`,
                icon: MapIcon,
            },
            {
                name: t('contact'),
                description: t('contact-description'),
                href: `${prefix}/planning/contact`,
                icon: ChatBubbleLeftIcon,
            },
            {
                name: t('office-team'),
                description: t('office-team-description'),
                href: `${prefix}/planning/office-team`,
                icon: UserGroupIcon,
            },
        ],
        headerCallsToAction: [
            {
                name: t('watch-video'),
                href: `${prefix}/videos`,
                icon: PlayCircleIcon,
            },
            {
                name: t('contact-us'),
                href: `${prefix}/planning/contact`,
                icon: PhoneIcon,
            },
        ],
    };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm backdrop-filter font-sans">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" passHref className="-m-1.5 p-1.5">
                        <span className="sr-only">{siteConfig.name}</span>
                        <Logo className="h-12 w-auto text-primary-600" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:outline-none">
                            {t('things-to-do')}
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {navigation.headerThingsToDo.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon
                                                    className="h-6 w-6 text-gray-600 group-hover:text-primary-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="flex-auto">
                                                <Link
                                                    href={item.href}
                                                    className="block font-semibold text-gray-900"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {navigation.headerCallsToAction.map(
                                        (item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                            >
                                                <item.icon
                                                    className="h-5 w-5 flex-none text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        )
                                    )}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:outline-none">
                            {t('destinations')}
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {navigation.headerDestinations.map(
                                        (item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon
                                                        className="h-6 w-6 text-gray-600 group-hover:text-primary-600"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div className="flex-auto">
                                                    <Link
                                                        href={item.href}
                                                        className="block font-semibold text-gray-900"
                                                    >
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </Link>
                                                    <p className="mt-1 text-gray-600">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {navigation.headerCallsToAction.map(
                                        (item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                            >
                                                <item.icon
                                                    className="h-5 w-5 flex-none text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        )
                                    )}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Link
                        href={`${prefix}/accommodation/yurt`}
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        {t('accommodation')}
                    </Link>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:outline-none">
                            {t('planning')}
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {navigation.headerPlanning.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon
                                                    className="h-6 w-6 text-gray-600 group-hover:text-primary-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="flex-auto">
                                                <Link
                                                    href={item.href}
                                                    className="block font-semibold text-gray-900"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {navigation.headerCallsToAction.map(
                                        (item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                            >
                                                <item.icon
                                                    className="h-5 w-5 flex-none text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        )
                                    )}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    {/* <Link
                        href={`${prefix}/booking`}
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        {t('booking')}
                    </Link> */}
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <LocaleSwitcher />
                </div>
            </nav>

            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" passHref className="-m-1.5 p-1.5">
                            <span className="sr-only">{siteConfig.name}</span>
                            <Logo className="h-9 w-auto text-primary-600" />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                                {t('things-to-do')}
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? 'rotate-180'
                                                            : '',
                                                        'h-5 w-5 flex-none'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[
                                                    ...navigation.headerThingsToDo,
                                                    ...navigation.headerCallsToAction,
                                                ].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                                {t('destinations')}
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? 'rotate-180'
                                                            : '',
                                                        'h-5 w-5 flex-none'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[
                                                    ...navigation.headerDestinations,
                                                    ...navigation.headerCallsToAction,
                                                ].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                <Link
                                    href={`${prefix}/accommodation/yurt`}
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    {t('accommodation')}
                                </Link>

                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                                {t('planning')}
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? 'rotate-180'
                                                            : '',
                                                        'h-5 w-5 flex-none'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[
                                                    ...navigation.headerPlanning,
                                                    ...navigation.headerCallsToAction,
                                                ].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                {/* <Link
                                    href={`${prefix}/booking`}
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    {t('booking')}
                                </Link> */}
                            </div>
                            <div className="py-6">
                                <LocaleSwitcher />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
