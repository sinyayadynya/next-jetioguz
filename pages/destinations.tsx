import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { DrupalBlock, DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"

import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { NodePlaceTeaser } from "components/node--place--teaser"
import { PageHeader } from "components/page-header"
import { BlockBanner } from "components/block--banner"

interface PlacePageProps extends LayoutProps {
  banner: DrupalBlock
  places: DrupalNode[]
}

export default function PlacesPage({
  banner,
  places,
  menus,
  blocks,
}: PlacePageProps) {
  const { t } = useTranslation()

  return (
    <Layout
      menus={menus}
      blocks={blocks}
      meta={{
        title: t("destinations"),
      }}
    >
      <BlockBanner block={banner} />
      <PageHeader
        heading="Destinations"
        breadcrumbs={[
          {
            title: "Destinations",
          },
        ]}
      />
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {places.map((place) => (
            <NodePlaceTeaser key={place.id} node={place} />
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
  const places = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--place",
    context,
    {
      params: getParams("node--place", "card")
        .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
        .addSort("created", "DESC")
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
      places,
    },
  }
}
