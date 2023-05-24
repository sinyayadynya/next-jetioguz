import {
    GetStaticPathsContext,
    GetStaticPathsResult,
    GetStaticPropsContext,
    GetStaticPropsResult,
} from "next"
import Head from "next/head"
import { DrupalNode, DrupalTaxonomyTerm, JsonApiResource } from "next-drupal"

import { PageProps } from "types"
import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { NodeArticle, NodeArticleProps } from "components/node--article"
import { NodePlace } from "components/node--place"
import { NodePage } from "components/node--page"
import { ProductAccommodation } from "components/product--accommodation"
import {
  TaxonomyTermContentCategory,
  TaxonomyTermContentCategoryProps,
} from "components/taxonomy-term--categories"
import {
    TaxonomyTermPlaceTypes,
    TaxonomyTermPlaceTypesProps,
  } from "components/taxonomy-term--place-types"
import {
  TaxonomyTermPlaces,
  TaxonomyTermPlacesProps,
} from "components/taxonomy-term--dmo-places"

const RESOURCE_TYPES = [
  "node--page",
  "node--article",
  "node--place",
  "product--accommodation",
  "taxonomy_term--categories",
  "taxonomy_term--countries",
  "taxonomy_term--dmo_places",
]

interface NodePageProps extends LayoutProps, PageProps {
  node: DrupalNode | DrupalTaxonomyTerm
}

export default function ResourcePage({
  node,
  additionalContent,
  menus,
  blocks,
}: NodePageProps) {
  if (!node) return null

  return (
    <Layout
      menus={menus}
      blocks={blocks}
      meta={{
        title: node.title || node.name,
      }}
    >
      {node.type === "node--page" && (
        <NodePage node={node as DrupalNode} />
      )}

      {node.type === "node--article" && (
        <NodeArticle
          node={node as DrupalNode}
          additionalContent={
            additionalContent as NodeArticleProps["additionalContent"]
          }
        />
      )}
      {node.type === "node--place" && (
        <NodePlace node={node as DrupalNode} />
      )}
      {node.type === "product--accommodation" && (
        <ProductAccommodation node={node as DrupalNode} />
      )}
      {node.type === "taxonomy_term--categories" && (
        <TaxonomyTermContentCategory
          term={node as DrupalTaxonomyTerm}
          additionalContent={
            additionalContent as TaxonomyTermContentCategoryProps["additionalContent"]
          }
        />
      )}
      {node.type === "taxonomy_term--countries" && (
        <TaxonomyTermPlaces
          term={node as DrupalTaxonomyTerm}
          additionalContent={
            additionalContent as TaxonomyTermPlacesProps["additionalContent"]
          }
        />
      )}
    </Layout>
  )
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
    return {
      paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context, {
      params: {
        'filter[field_site.meta.drupal_internal__target_id]': 'jetioguz',
        'filter[field_stores.meta.drupal_internal__target_id]': '3',
      },
    }),
    fallback: "blocking",
    }
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await drupal.translatePathFromContext(context)

  // If path is not found or the node is not one we care about,
  // return a 404.
  if (!path || !RESOURCE_TYPES.includes(path.jsonapi.resourceName)) {
    return {
      notFound: true,
    }
  }

  // Fetch the node from Drupal.
  const node = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    {
      params: getParams(path.jsonapi.resourceName)?.getQueryObject(),
    }
  )

  // At this point, we know the path exists and it points to a node.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!node) {
    throw new Error(`Failed to fetch node: ${path.jsonapi.individual}`)
  }

  // If we're not in preview mode and the node is not published,
  // Return page not found.
  if (!context.preview && node?.status === false) {
    return {
      notFound: true,
    }
  }

  // Fetch additional content for pages.
  let additionalContent: PageProps["additionalContent"] = {}


  if (node.type === "node--article") {
    // Fetch featured articles.
    additionalContent["featuredArticles"] =
      await drupal.getResourceCollectionFromContext("node--article", context, {
        params: getParams("node--article", "card")
          .addFields("node--article", ['body', 'field_media_image', 'created', 'path', 'title'])
          .addFilter("id", node.id, "<>")
          .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
          .addPageLimit(3)
          .addSort("created", "DESC")
          .getQueryObject(),
      })
  }

  if (node.type === "node--place") {
    // Fetch featured places.
    additionalContent["featuredPlaces"] =
      await drupal.getResourceCollectionFromContext("node--place", context, {
        params: getParams("node--place", "card")
          .addFields("node--place", ['body', 'field_media_image', 'created', 'path', 'title'])
          .addFilter("id", node.id, "<>")
          .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
          .addPageLimit(3)
          .addSort("created", "DESC")
          .getQueryObject(),
      })
  }

  if (node.type === "product--accommodation") {
    // Fetch featured places.
    additionalContent["featuredAccommodations"] =
      await drupal.getResourceCollectionFromContext("product--accommodation", context, {
        params: getParams("product--accommodation", "card")
          .addFields("product--accommodation", ['body', 'field_media_image', 'created', 'path', 'title'])
          .addFilter("id", node.id, "<>")
          .addFilter('field_stores.meta.drupal_internal__target_id', '3')
          .addPageLimit(3)
          .addSort("created", "DESC")
          .getQueryObject(),
      })
  }

  if (node.type === "taxonomy_term--place_types") {
    // Fetch the term content.
    additionalContent["termContent"] =
      await drupal.getResourceCollectionFromContext("node--place", context, {
        params: getParams("node--place", "card")
          .addSort("created", "DESC")
          .addFilter("field_content_category.id", node.id, "IN")
          .getQueryObject(),
      })
  }

  if (node.type === "taxonomy_term--place_types") {
    // Fetch the term content.
    additionalContent["termContent"] =
      await drupal.getResourceCollectionFromContext("node--place", context, {
        params: getParams("node--place", "card")
          .addSort("created", "DESC")
          .addFilter("field_area.id", node.id, "IN")
          .getQueryObject(),
      })
  }

  if (node.type === "taxonomy_term--dmo_places") {
    // Fetch the term content.
    additionalContent["termContent"] =
      await drupal.getResourceCollectionFromContext("node--place", context, {
        params: getParams("node--place", "card")
          .addSort("created", "DESC")
          .addFilter("field_area.id", node.id, "IN")
          .getQueryObject(),
      })
  }

  if (node.type === "taxonomy_term--countries") {
    // Fetch the term content.
    // Tags can show both places and articles.
    additionalContent["termContent"] = [
      ...(await drupal.getResourceCollectionFromContext(
        "node--place",
        context,
        {
          params: getParams("node--place", "card")
            .addSort("created", "DESC")
            .addFilter("field_countries.id", node.id, "IN")
            .getQueryObject(),
        }
      )),
      ...(await drupal.getResourceCollectionFromContext(
        "node--article",
        context,
        {
          params: getParams("node--article", "card")
            .addSort("created", "DESC")
            .addFilter("field_countries.id", node.id, "IN")
            .getQueryObject(),
        }
      )),
    ]
  }

  return {
    props: {
      ...(await getGlobalElements(context)),
      node,
      additionalContent,
    },
  }
}
