import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { DrupalBlock, DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"

import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { ProductAccommodationCard } from "components/product--accommodation--card"
import { PageHeader } from "components/page-header"
import { BlockBanner } from "components/block--banner"

interface PlacePageProps extends LayoutProps {
  banner: DrupalBlock
  accommodations: DrupalNode[]
}

export default function PlacesPage({
  banner,
  accommodations,
  menus,
  blocks,
}: PlacePageProps) {
  const { t } = useTranslation()

  return (
    <Layout
      menus={menus}
      blocks={blocks}
      meta={{
        title: t("accommodation"),
      }}
    >
      <BlockBanner block={banner} />
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

  const [banner] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
    "block_content--banner_block",
    context,
    {
      params: getParams("block_content--banner_block")
        .addFilter("info", "Jeti Oguz Places Banner")
        .addPageLimit(1)
        .getQueryObject(),
    }
  )

  return {
    props: {
      ...(await getGlobalElements(context)),
      banner,
      accommodations,
    },
  }
}
