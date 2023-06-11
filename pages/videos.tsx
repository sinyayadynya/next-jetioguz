import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { DrupalBlock, DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"

import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { ProductAccommodationCard } from "components/product--accommodation--card"
import { PageHeader } from "components/page-header"
import { BlockHeroOffsetImage } from "components/block--hero-offset-image"

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
  } from '@heroicons/react/24/outline'
  import {
    Bars4Icon,
    MagnifyingGlassIcon,
    PencilIcon,
    PlusIcon,
    Squares2X2Icon as Squares2X2IconMini,
  } from '@heroicons/react/20/solid'

  const tabs = [
    { name: 'Recently Viewed', href: '#', current: true },
    { name: 'Recently Added', href: '#', current: false },
    { name: 'Favorited', href: '#', current: false },
  ]
  const files = [
    {
      name: 'IMG_4985.HEIC',
      size: '3.9 MB',
      source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      current: true,
    },
    // More files...
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

interface PlacePageProps extends LayoutProps {
    heroOffsetImage: DrupalBlock
    accommodations: DrupalNode[]
}

export default function PlacesPage({
    heroOffsetImage,
    accommodations,
    // menus,
    // blocks,
}: PlacePageProps) {
  const { t } = useTranslation()

  return (
    <Layout
    //   menus={menus}
    //   blocks={blocks}
      meta={{
        title: t("videos"),
      }}
    >

      {/* <div className="container pb-24 sm:pb-32"> */}
        {/* <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8">
          {accommodations.map((accommodation) => (
            <ProductAccommodationCard key={accommodation.id} node={accommodation} />
          ))}
        </div> */}

        <div className="mt-16 flex flex-1 items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
                <div className="flex">
                  <h1 className="flex-1 text-2xl font-heading font-bold text-gray-900">Videos</h1>
                  <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                    <button
                      type="button"
                      className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <Bars4Icon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">Use list view</span>
                    </button>
                    <button
                      type="button"
                      className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <Squares2X2IconMini className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">Use grid view</span>
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
                      className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      defaultValue="Recently Viewed"
                    >
                      <option>Recently Viewed</option>
                      <option>Recently Added</option>
                      <option>Favorited</option>
                    </select>
                  </div>
                  <div className="hidden sm:block">
                    <div className="flex items-center border-b border-gray-200">
                      <nav className="-mb-px flex flex-1 space-x-6 xl:space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                          <a
                            key={tab.name}
                            href={tab.href}
                            aria-current={tab.current ? 'page' : undefined}
                            className={classNames(
                              tab.current
                                ? 'border-indigo-500 text-indigo-600'
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
                          className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                          <Bars4Icon className="h-5 w-5" aria-hidden="true" />
                          <span className="sr-only">Use list view</span>
                        </button>
                        <button
                          type="button"
                          className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                          <Squares2X2IconMini className="h-5 w-5" aria-hidden="true" />
                          <span className="sr-only">Use grid view</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
                  <h2 id="gallery-heading" className="sr-only">
                    Recently viewed
                  </h2>
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                  >
                    {files.map((file) => (
                      <li key={file.name} className="relative">
                        <div
                          className={classNames(
                            file.current
                              ? 'ring-2 ring-indigo-500 ring-offset-2'
                              : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                            'aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100'
                          )}
                        >
                          <img
                            src={file.source}
                            alt=""
                            className={classNames(
                              file.current ? '' : 'group-hover:opacity-75',
                              'pointer-events-none object-cover'
                            )}
                          />
                          <button type="button" className="absolute inset-0 focus:outline-none">
                            <span className="sr-only">View details for {file.name}</span>
                          </button>
                        </div>
                        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                          {file.name}
                        </p>
                        <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </main>

      </div>
    </Layout>
  )
}

// export async function getStaticProps(
//   context: GetStaticPropsContext
// ): Promise<GetStaticPropsResult<PlacePageProps>> {
//   // Fetch all published places sorted by date.
//   const accommodations = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
//     "product--accommodation",
//     context,
//     {
//       params: getParams("product--accommodation")
//         .addFilter("stores.meta.drupal_internal__target_id", "3")
//         // .addSort("created", "DESC")
//         .getQueryObject(),
//     }
//   )

//   const [heroOffsetImage] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
//     "block_content--hero_block_offset_image",
//     context,
//     {
//       params: getParams("block_content--hero_block_offset_image")
//         .addFilter("info", "Jeti Oguz Accommodation")
//         .addPageLimit(1)
//         .getQueryObject(),
//     }
//   )

//   return {
//     props: {
//       ...(await getGlobalElements(context)),
//       heroOffsetImage,
//       accommodations,
//     },
//   }
// }
