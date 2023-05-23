import * as React from "react"
import Link from "next/link"
import { DrupalMenuLinkContent } from "next-drupal"
import { useTranslation } from "next-i18next"
import classNames from "classnames"

import siteConfig from "site.config"
import { Logo } from "components/logo"
import { LocaleSwitcher } from "components/locale-switcher"
import { MenuMain } from "components/menu-main"
import { MenuUser } from "components/menu-user"

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
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
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const thingsToDo = [
  { name: 'Sport & Leisure', description: 'Get active in Jeti Oguz’s great outdoors', href: '/things-to-do/sport-leisure', icon: TrophyIcon },
  { name: 'Culture & Museum', description: 'Explore Kyrgyzstan’s rich history and heritage', href: '/things-to-do/culture-museum', icon: BuildingLibraryIcon },
  { name: 'Events', description: 'Stay up to date on Jeti Oguz’s latest happenings', href: '/things-to-do/events', icon: CalendarDaysIcon },
  { name: 'Food & Drink', description: 'Savor the flavors of Jeti Oguz’s local cuisine', href: '/things-to-do/food-drink', icon: CakeIcon },
  { name: 'Transportation', description: 'Getting around Jeti Oguz made easy', href: '/things-to-do/transportation', icon: TruckIcon },
]
const destinations = [
    { name: 'Villages', description: 'Experience Kyrgyz hospitality in Jeti Oguz’s charming villages', href: '/destinations/villages', icon: HomeIcon },
    { name: 'Nature sites', description: 'Discover Jeti Oguz’s breathtaking natural wonders', href: '/destinations/nature-sites', icon: GlobeAsiaAustraliaIcon },
    { name: 'Lakes', description: 'Take in the serene beauty of Jeti Oguz’s stunning lakes', href: '/destinations/lakes', icon: SparklesIcon },
    { name: 'Beaches', description: 'Relax and recharge on Issyk-Kul’s beautiful beaches', href: '/destinations/beaches', icon: SunIcon },
    { name: 'Wellness', description: 'Rejuvenate mind and body in Jeti Oguz’s tranquil sanatoriums', href: '/destinations/wellness', icon: FaceSmileIcon },
]
const planning = [
    { name: 'How to go there', description: 'Getting to Jeti Oguz made easy - plan your trip now', href: '/planning/how-to-go-there', icon: MapIcon },
    { name: 'Contact', description: 'Get in touch with our friendly team for all your Jeti Oguz inquiries', href: '/planning/contact', icon: ChatBubbleLeftIcon },
    { name: 'Office & Team', description: 'Meet the people behind your Jeti Oguz adventure', href: '/planning/office-team', icon: UserGroupIcon },
]
const callsToAction = [
  { name: 'Watch video', href: '/videos', icon: PlayCircleIcon },
  { name: 'Contact us', href: '/planning/contact', icon: PhoneIcon },
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export interface HeaderProps {
    menus: {
      main: DrupalMenuLinkContent[]
    }
}

export function Header({ menus }: HeaderProps) {
    const { t } = useTranslation("common")
    // const [showMenu, setShowMenu] = React.useState<Boolean>(false)

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
      <header className="absolute inset-x-0 top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm backdrop-filter font-sans">
          <nav
              className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
              aria-label="Global"
          >
              <div className="flex lg:flex-1">
                  <Link href="/" passHref className="-m-1.5 p-1.5">

                      <span className="sr-only">{siteConfig.name}</span>
                      <Logo className="h-9 w-auto text-primary-600" />

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
                          {t("things-to-do")}
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
                                  {thingsToDo.map((item) => (
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
                                              <a
                                                  href={item.href}
                                                  className="block font-semibold text-gray-900"
                                              >
                                                  {item.name}
                                                  <span className="absolute inset-0" />
                                              </a>
                                              <p className="mt-1 text-gray-600">
                                                  {item.description}
                                              </p>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                  {callsToAction.map((item) => (
                                      <a
                                          key={item.name}
                                          href={item.href}
                                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                      >
                                          <item.icon
                                              className="h-5 w-5 flex-none text-gray-400"
                                              aria-hidden="true"
                                          />
                                          {item.name}
                                      </a>
                                  ))}
                              </div>
                          </Popover.Panel>
                      </Transition>
                  </Popover>

                  <Popover className="relative">
                      <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:outline-none">
                          {t("destinations")}
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
                                  {destinations.map((item) => (
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
                                              <a
                                                  href={item.href}
                                                  className="block font-semibold text-gray-900"
                                              >
                                                  {item.name}
                                                  <span className="absolute inset-0" />
                                              </a>
                                              <p className="mt-1 text-gray-600">
                                                  {item.description}
                                              </p>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                  {callsToAction.map((item) => (
                                      <a
                                          key={item.name}
                                          href={item.href}
                                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                      >
                                          <item.icon
                                              className="h-5 w-5 flex-none text-gray-400"
                                              aria-hidden="true"
                                          />
                                          {item.name}
                                      </a>
                                  ))}
                              </div>
                          </Popover.Panel>
                      </Transition>
                  </Popover>

                  <a
                      href="/accommodation"
                      className="text-sm font-semibold leading-6 text-gray-900"
                  >
                      {t("accommodation")}
                  </a>

                  <Popover className="relative">
                      <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:outline-none">
                        {t("planning")}
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
                                  {planning.map((item) => (
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
                                              <a
                                                  href={item.href}
                                                  className="block font-semibold text-gray-900"
                                              >
                                                  {item.name}
                                                  <span className="absolute inset-0" />
                                              </a>
                                              <p className="mt-1 text-gray-600">
                                                  {item.description}
                                              </p>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                  {callsToAction.map((item) => (
                                      <a
                                          key={item.name}
                                          href={item.href}
                                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                      >
                                          <item.icon
                                              className="h-5 w-5 flex-none text-gray-400"
                                              aria-hidden="true"
                                          />
                                          {item.name}
                                      </a>
                                  ))}
                              </div>
                          </Popover.Panel>
                      </Transition>
                  </Popover>

                  <a
                      href="/booking"
                      className="text-sm font-semibold leading-6 text-gray-900"
                  >
                      {t("booking")}
                  </a>
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
              <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                                            {t("things-to-do")}
                                              <ChevronDownIcon
                                                  className={classNames(
                                                      open ? 'rotate-180' : '',
                                                      'h-5 w-5 flex-none'
                                                  )}
                                                  aria-hidden="true"
                                              />
                                          </Disclosure.Button>
                                          <Disclosure.Panel className="mt-2 space-y-2">
                                              {[
                                                  ...thingsToDo,
                                                  ...callsToAction,
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
                                            {t("destinations")}
                                              <ChevronDownIcon
                                                  className={classNames(
                                                      open ? 'rotate-180' : '',
                                                      'h-5 w-5 flex-none'
                                                  )}
                                                  aria-hidden="true"
                                              />
                                          </Disclosure.Button>
                                          <Disclosure.Panel className="mt-2 space-y-2">
                                              {[
                                                  ...destinations,
                                                  ...callsToAction,
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

                              <a
                                  href="#"
                                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                  {t("accommodation")}
                              </a>

                              <Disclosure as="div" className="-mx-3">
                                  {({ open }) => (
                                      <>
                                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                            {t("planning")}
                                              <ChevronDownIcon
                                                  className={classNames(
                                                      open ? 'rotate-180' : '',
                                                      'h-5 w-5 flex-none'
                                                  )}
                                                  aria-hidden="true"
                                              />
                                          </Disclosure.Button>
                                          <Disclosure.Panel className="mt-2 space-y-2">
                                              {[
                                                  ...planning,
                                                  ...callsToAction,
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

                              <a
                                  href="#"
                                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                  {t("booking")}
                              </a>
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
