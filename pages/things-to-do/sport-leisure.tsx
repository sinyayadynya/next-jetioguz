import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { DrupalBlock, DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';

import { drupal } from 'lib/drupal';
import { getGlobalElements } from 'lib/get-global-elements';
import { getParams } from 'lib/get-params';
import { Layout, LayoutProps } from 'components/layout';
import { NodePlaceTeaser } from 'components/node--place--teaser';
import { PageHeader } from 'components/page-header';
import { BlockPromoBgImageLargeContent } from 'components/block--promo-bg-image-large-content';

interface SportLeisurePageProps extends LayoutProps {
    banner: DrupalBlock;
    places: DrupalNode[];
}

const features = [
    {
        name: 'Hiking',
        description:
            'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
        imageAlt:
            'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
        name: 'Horse Riding',
        description:
            'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
];

const features2 = [
    {
      name: 'Handicraft',
      description: 'Today, Next, and Someday cards allow you to defer your dreams into the future.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-01.jpg',
      imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
    },
    {
      name: 'Wildlife watching',
      description: 'Each refill pack contains plenty of cards to last you a month of procrastination.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-02.jpg',
      imageAlt: 'Green cardstock box open with 50 cards inside.',
    },
    {
      name: 'Observing flora',
      description: 'Flip a card over to doodle during meetings when you should be listening.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-03.jpg',
      imageAlt: 'Detail of white today card, beige next card, and brown someday card with dot grid.',
    },
    {
      name: 'Hunting',
      description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-04.jpg',
      imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
    },
  ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function SportLeisurePage({
    promo,
    menus,
    blocks,
}: SportLeisurePageProps) {
    const { t } = useTranslation();

    return (
        <Layout
            menus={menus}
            blocks={blocks}
            meta={{
                title: t('sport-leisure'),
            }}
        >
            <BlockPromoBgImageLargeContent block={promo} />

            {/* Feature Section with alternating sections */}
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Things to do
                        </h2>
                        <p className="mt-4 text-gray-500">
                            As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a fabric sleeve that matches in quality and looks.
                        </p>
                    </div>

                    <div className="mt-16 space-y-16">
                        {features.map((feature, featureIdx) => (
                            <div
                                key={feature.name}
                                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                            >
                                <div
                                    className={classNames(
                                        featureIdx % 2 === 0
                                            ? 'lg:col-start-1'
                                            : 'lg:col-start-8 xl:col-start-9',
                                        'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                                    )}
                                >
                                    <h3 className="text-lg font-medium text-gray-900">
                                        {feature.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {feature.description}
                                    </p>
                                </div>
                                <div
                                    className={classNames(
                                        featureIdx % 2 === 0
                                            ? 'lg:col-start-6 xl:col-start-5'
                                            : 'lg:col-start-1',
                                        'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                                    )}
                                >
                                    <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                                        <img
                                            src={feature.imageSrc}
                                            alt={feature.imageAlt}
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Promo Section with background image */}
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0">
                        <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                        <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
                            <span className="block sm:inline">Boat </span>
                            <span className="block sm:inline">Kyzil Suu</span>
                        </h2>
                        <p className="mt-3 text-xl text-white">
                            Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than
                            life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice
                            desk setup.
                        </p>
                        <a
                            href="#"
                            className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                        >
                            Shop Workspace
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/* Feature Section with square images */}
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                    <div className="max-w-3xl">
                    <h2 id="features-heading" className="font-medium text-gray-500">
                        Offers
                    </h2>
                    <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">Nomadic Lifestyle</p>
                    <p className="mt-4 text-gray-500">
                        Focus allows you to plan 10 daily tasks, while also thinking ahead about what's next. Forget distracting
                        digital apps and embrace these small, sturdy pieces of paper.
                    </p>
                    </div>

                    <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                    {features2.map((feature2) => (
                        <div key={feature2.name} className="flex flex-col-reverse">
                        <div className="mt-6">
                            <h3 className="text-sm font-medium text-gray-900">{feature2.name}</h3>
                            <p className="mt-2 text-sm text-gray-500">{feature2.description}</p>
                        </div>
                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                            <img src={feature2.imageSrc} alt={feature2.imageAlt} className="object-cover object-center" />
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            {/* Promo Section full-width with overlapping image tiles */}
            <div className="bg-white">
                <div className="overflow-hidden pt-32 sm:pt-14">
                    <div className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative pb-16 pt-48 sm:pb-24">
                        <div>
                            <h2 id="sale-heading" className="text-4xl font-sans font-bold tracking-tight text-white md:text-5xl">
                            Winter
                            <br />
                            Activities.
                            </h2>
                            <div className="mt-6 text-base">
                            <a href="#" className="font-semibold text-white">
                                Learn more
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                            </div>
                        </div>

                        <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                            <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                            <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                <div className="flex-shrink-0">
                                <img
                                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                    src="https://nomadsland.travel/sites/default/files/styles/square_tile/public/2023-05/img_1265.jpg.webp?itok=wgONfokU"
                                    alt=""
                                />
                                </div>

                                <div className="mt-6 flex-shrink-0 sm:mt-0">
                                <img
                                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                    src="https://nomadsland.travel/sites/default/files/styles/square_tile/public/2023-05/img_1160.jpg.webp?itok=7zENKtDL"
                                    alt=""
                                />
                                </div>
                            </div>
                            <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                <div className="flex-shrink-0">
                                <img
                                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                    src="https://nomadsland.travel/sites/default/files/styles/square_tile/public/2023-05/img_5584.jpg.webp?itok=2uyVTO9r"
                                    alt=""
                                />
                                </div>

                                <div className="mt-6 flex-shrink-0 sm:mt-0">
                                <img
                                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                    src="https://nomadsland.travel/sites/default/files/styles/square_tile/public/2023-05/img_5553.jpg.webp?itok=mF_ODCHO"
                                    alt=""
                                />
                                </div>
                            </div>
                            <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                <div className="flex-shrink-0">
                                <img
                                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                    src="https://nomadsland.travel/sites/default/files/styles/square_tile/public/2023-05/img_5730.jpg.webp?itok=P-InsV2k"
                                    alt=""
                                />
                                </div>

                                <div className="mt-6 flex-shrink-0 sm:mt-0">
                                <img
                                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                    src="https://nomadsland.travel/sites/default/files/styles/square_tile/public/2023-05/img_1229.jpg.webp?itok=XXrJnFCo"
                                    alt=""
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
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
            params: getParams('node--place', 'card')
                .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
                .addFilter(
                    'field_content_category.meta.drupal_internal__target_id',
                    '191'
                )
                .addSort('created', 'DESC')
                .getQueryObject(),
        }
    );

    const [promo] = await drupal.getResourceCollectionFromContext<
        DrupalBlock[]
    >('block_content--banner_block', context, {
        params: getParams('block_content--banner_block')
            .addFilter('info', 'Jeti Oguz Places Banner')
            .addPageLimit(1)
            .getQueryObject(),
    });

    return {
        props: {
            ...(await getGlobalElements(context)),
            promo,
        },
    };
}
