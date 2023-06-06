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
        title: t("accommodation"),
      }}
    >
      <BlockHeroOffsetImage block={heroOffsetImage} />
      <PageHeader
        heading="Accommodation"
        breadcrumbs={[
          {
            title: t("accommodation"),
          },
        ]}
      />
      <div className="container pb-24 sm:pb-32">
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8">
          {accommodations.map((accommodation) => (
            <ProductAccommodationCard key={accommodation.id} node={accommodation} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PlacePageProps>> {
  // Fetch all published places sorted by date.
  const accommodations = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "product--accommodation",
    context,
    {
      params: getParams("product--accommodation")
        .addFilter("stores.meta.drupal_internal__target_id", "3")
        // .addSort("created", "DESC")
        .getQueryObject(),
    }
  )

  const [heroOffsetImage] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
    "block_content--hero_block_offset_image",
    context,
    {
      params: getParams("block_content--hero_block_offset_image")
        .addFilter("info", "Jeti Oguz Accommodation")
        .addPageLimit(1)
        .getQueryObject(),
    }
  )

  return {
    props: {
      ...(await getGlobalElements(context)),
      heroOffsetImage,
      accommodations,
    },
  }
}
