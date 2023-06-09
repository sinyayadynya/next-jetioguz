import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { DrupalBlock, DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"

import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { NodePlaceTeaser } from "components/node--place--teaser"
import { BlockPromoImageTiles } from "components/block--promo-image-tiles"

interface PlacePageProps extends LayoutProps {
    promoImageTiles: DrupalBlock
    places: DrupalNode[]
}

export default function PlacesPage({
    promoImageTiles,
    places,
    // menus,
    // blocks,
}: PlacePageProps) {
  const { t } = useTranslation()

  return (
    <Layout
    //   menus={menus}
    //   blocks={blocks}
      meta={{
        title: t("nature-sites"),
      }}
    >
      <BlockPromoImageTiles block={promoImageTiles} />

      <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            {/* Details section */}
            <section aria-labelledby="details-heading">
                <div className="flex flex-col items-center text-center">
                    <h2 id="details-heading" className="text-3xl font-heading font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {t('nature-site-label')}
                    </h2>
                    <p className="mt-3 max-w-3xl text-lg text-gray-600">
                        {t('nature-site-intro')}
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                    {places.map((place) => (
                        <NodePlaceTeaser key={place.id} node={place} />
                    ))}
                </div>

            </section>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(
    context: GetStaticPropsContext
  ): Promise<GetStaticPropsResult<PlacePageProps>> {

    // Fetch all published places sorted by date.
    const places = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
      "node--place",
      context,
      {
        params: getParams("node--place--teaser")
          .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
          .addFilter('field_place_type.meta.drupal_internal__target_id', ['4351', '4252', '4253', '4259', '4267'], 'IN')
          .addSort("created", "DESC")
          .getQueryObject(),
      }
    )

    console.log('Node paths:', places.map((place) => place.path));

    let [promoImageTiles] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
      "block_content--promo_block_image_tiles",
      context,
      {
        params: getParams("block_content--promo_block_image_tiles")
          .addFilter("info", "Jeti Oguz Promo Nature Sites")
          .addPageLimit(1)
          .getQueryObject(),
      }
    )

    if (promoImageTiles === undefined) {
      promoImageTiles = null;
    }

    return {
      props: {
        ...(await getGlobalElements(context)),
        promoImageTiles,
        places,
      },
    }
}
