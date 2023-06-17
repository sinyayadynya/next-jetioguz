import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { DrupalBlock, DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';

import { drupal } from 'lib/drupal';
import { getGlobalElements } from 'lib/get-global-elements';
import { getParams } from 'lib/get-params';
import { Layout, LayoutProps } from 'components/layout';
import { BlockPromoOverlappingImages } from 'components/block--promo-overlapping-images';
import { BlockFeatureSimpleThreeCol } from 'components/block--feature-simple-three-col';
import { BlockPromoFadingTestimonials } from 'components/block--promo-fading-testimonials';
import { BlockIncentives } from 'components/block--incentives';
import { NodeArticleCard } from 'components/node--article--card';
import { NodePlaceCard } from 'components/node--place--card';
import Link from 'next/link';

interface IndexPageProps extends LayoutProps {
    promoOverlappingImages: DrupalBlock;
    featureSimpleThreeCol: DrupalBlock;
    promoFadingTestimonials: DrupalBlock;
    incentives: DrupalBlock;
    promotedArticles: DrupalNode[];
    promotedPlaces: DrupalNode[];
}

export default function IndexPage({
    promoOverlappingImages,
    featureSimpleThreeCol,
    promoFadingTestimonials,
    incentives,
    promotedArticles,
    promotedPlaces,
    // menus,
    // blocks,
}: IndexPageProps) {
    const { t } = useTranslation();

    return (
        <Layout
            meta={{ title: t('home') }}
            // menus={menus}
            // blocks={blocks}
        >
            <BlockPromoOverlappingImages block={promoOverlappingImages} />

            <BlockFeatureSimpleThreeCol block={featureSimpleThreeCol} />

            {promotedPlaces?.length ? (
                <section className="bg-gray-50">
                    <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-baseline sm:justify-between">
                            <h2 className="font-heading text-2xl font-bold tracking-tight text-gray-900">
                                {t('destinations')}
                            </h2>
                            <Link
                                href="/destinations"
                                className="hidden text-sm font-semibold text-primary-600 hover:text-primary-500 sm:block"
                            >
                                Browse all places
                                <span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                            {promotedPlaces?.length
                                ? promotedPlaces.map((node, index) => (
                                      <NodePlaceCard
                                          node={node}
                                          key={node.id}
                                          className={classNames({
                                              'group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2':
                                                  index === 0,
                                              'group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full':
                                                  index !== 0,
                                          })}
                                      />
                                  ))
                                : null}
                        </div>
                    </div>
                </section>
            ) : null}

            <BlockPromoFadingTestimonials block={promoFadingTestimonials} />

            <section className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-heading font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {t('from-blog')}
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            {t('articles-intro')}
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {promotedArticles?.length
                            ? promotedArticles.map((node) => (
                                  <NodeArticleCard
                                      nodeArticles={node}
                                      key={node.id}
                                  />
                              ))
                        : null}
                    </div>
                </div>
            </section>

            <BlockIncentives block={incentives} />
        </Layout>
    );
}

export async function getStaticProps(
    context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexPageProps>> {
    const promotedPlaces = await drupal.getResourceCollectionFromContext<
        DrupalNode[]
    >('node--place', context, {
        params: getParams('node--place--card')
            .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
            .addSort('created', 'DESC')
            .addPageLimit(3)
            .getQueryObject(),
    });

    const promotedArticles = await drupal.getResourceCollectionFromContext<
        DrupalNode[]
    >('node--article', context, {
        params: getParams('node--article--card')
            //   .addFilter("promote", "1")
            .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
            .addPageLimit(3)
            .addSort('created', 'DESC')
            .getQueryObject(),
    });

    const [promoOverlappingImages] =
        await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
            'block_content--promo_block_overlapping_images',
            context,
            {
                params: getParams(
                    'block_content--promo_block_overlapping_images'
                )
                    .addFilter('info', 'Jeti Oguz Home Promo')
                    .addPageLimit(1)
                    .getQueryObject(),
            }
        );

    // const promoOverlappingImages = await drupal.getResourceFromContext<DrupalBlock>(
    //     'block_content--promo_block_overlapping_images',
    //     '4d37cbc2-e818-4d61-9275-7fddd25de3e3,
    //     context
    // );

    const [featureSimpleThreeCol] =
        await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
            'block_content--feature_block_simple_three_col',
            context,
            {
                params: getParams(
                    'block_content--feature_block_simple_three_col'
                )
                    .addFilter('info', 'Jeti Oguz Home Feature')
                    .addPageLimit(1)
                    .getQueryObject(),
            }
        );

    // const featureSimpleThreeCol = await drupal.getResourceFromContext<DrupalBlock>(
    //     'block_content--feature_block_simple_three_col',
    //     'c8b9a4bd-c975-4b12-aab7-101088e0443e',
    //     context
    // );

    const [promoFadingTestimonials] =
        await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
            'block_content--promo_block_fading_testimonials',
            context,
            {
                params: getParams(
                    'block_content--promo_block_fading_testimonials'
                )
                    .addFilter('info', 'Jeti Oguz Promo')
                    .addPageLimit(1)
                    .getQueryObject(),
            }
        );

    // const promoFadingTestimonials = await drupal.getResourceFromContext<DrupalBlock>(
    //     'block_content--promo_block_fading_testimonials',
    //     '6ed95441-e1a5-4ddc-ba48-40f6bf7114c5',
    //     context
    // );

    const [incentives] =
        await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
            'block_content--incentives_block',
            context,
            {
                params: getParams(
                    'block_content--incentives_block'
                )
                    .addFilter('info', 'Jeti Oguz incentive 4-column with illustrations')
                    .addPageLimit(1)
                    .getQueryObject(),
            }
        );

    return {
        props: {
            ...(await getGlobalElements(context)),
            promoOverlappingImages,
            featureSimpleThreeCol,
            promoFadingTestimonials,
            promotedArticles,
            promotedPlaces,
            incentives,
        },
    };
}
