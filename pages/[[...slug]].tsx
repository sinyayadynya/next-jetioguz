import { GetStaticPathsResult, GetStaticPropsResult } from "next"
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
//   "commerce_product--accommodation",
  "product--accommodation",
  "taxonomy_term--categories",
  "taxonomy_term--countries",
  "taxonomy_term--dmo_places",
]

interface ResourcePageProps extends LayoutProps, PageProps {
  resource: DrupalNode | DrupalTaxonomyTerm
}

export default function ResourcePage({
  resource,
  additionalContent,
  menus,
  blocks,
}: ResourcePageProps) {
  if (!resource) return null

  return (
    <Layout
      menus={menus}
      blocks={blocks}
      meta={{
        title: resource.title || resource.name,
      }}
    >
      {resource.type === "node--page" && (
        <NodePage node={resource as DrupalNode} />
      )}

      {resource.type === "node--article" && (
        <NodeArticle
          node={resource as DrupalNode}
          additionalContent={
            additionalContent as NodeArticleProps["additionalContent"]
          }
        />
      )}
      {resource.type === "node--place" && (
        <NodePlace node={resource as DrupalNode} />
      )}
      {resource.type === "product--accommodation" && (
        <ProductAccommodation node={resource as DrupalNode} />
      )}
      {resource.type === "taxonomy_term--categories" && (
        <TaxonomyTermContentCategory
          term={resource as DrupalTaxonomyTerm}
          additionalContent={
            additionalContent as TaxonomyTermContentCategoryProps["additionalContent"]
          }
        />
      )}
      {resource.type === "taxonomy_term--countries" && (
        <TaxonomyTermPlaces
          term={resource as DrupalTaxonomyTerm}
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
      paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
      fallback: "blocking",
    }
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<ResourcePageProps>> {
  const path = await drupal.translatePathFromContext(context)

  // If path is not found or the resource is not one we care about,
  // return a 404.
  if (!path || !RESOURCE_TYPES.includes(path.jsonapi.resourceName)) {
    return {
      notFound: true,
    }
  }

  // Fetch the resource from Drupal.
  const resource = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    {
      params: getParams(path.jsonapi.resourceName)?.getQueryObject(),
    }
  )

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`)
  }

  // If we're not in preview mode and the resource is not published,
  // Return page not found.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    }
  }

  // Fetch additional content for pages.
  let additionalContent: PageProps["additionalContent"] = {}


  if (resource.type === "node--article") {
    // Fetch featured articles.
    additionalContent["featuredArticles"] =
      await drupal.getResourceCollectionFromContext("node--article", context, {
        params: getParams("node--article", "card")
          .addFields("node--article", ['body', 'field_media_image', 'created', 'path', 'title'])
          .addFilter("id", resource.id, "<>")
          .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
          .addPageLimit(3)
          .addSort("created", "DESC")
          .getQueryObject(),
      })
  }

  if (resource.type === "node--place") {
    // Fetch featured places.
    additionalContent["featuredPlaces"] =
      await drupal.getResourceCollectionFromContext("node--place", context, {
        params: getParams("node--place", "card")
          .addFields("node--place", ['body', 'field_media_image', 'created', 'path', 'title'])
          .addFilter("id", resource.id, "<>")
          .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
          .addPageLimit(3)
          .addSort("created", "DESC")
          .getQueryObject(),
      })
  }

  if (resource.type === "product--accommodation") {
    // Fetch featured places.
    additionalContent["featuredAccommodations"] =
      await drupal.getResourceCollectionFromContext("product--accommodation", context, {
        params: getParams("product--accommodation", "card")
          .addFields("product--accommodation", ['body', 'field_media_image', 'created', 'path', 'title'])
          .addFilter("id", resource.id, "<>")
          .addFilter('field_stores.meta.drupal_internal__target_id', '3')
          .addPageLimit(3)
          .addSort("created", "DESC")
          .getQueryObject(),
      })
  }

  if (resource.type === "taxonomy_term--place_types") {
    // Fetch the term content.
    additionalContent["termContent"] =
      await drupal.getResourceCollectionFromContext("node--place", context, {
        params: getParams("node--place", "card")
          .addSort("created", "DESC")
          .addFilter("field_content_category.id", resource.id, "IN")
          .getQueryObject(),
      })
  }

  if (resource.type === "taxonomy_term--place_types") {
    // Fetch the term content.
    additionalContent["termContent"] =
      await drupal.getResourceCollectionFromContext("node--place", context, {
        params: getParams("node--place", "card")
          .addSort("created", "DESC")
          .addFilter("field_area.id", resource.id, "IN")
          .getQueryObject(),
      })
  }

  if (resource.type === "taxonomy_term--dmo_places") {
    // Fetch the term content.
    additionalContent["termContent"] =
      await drupal.getResourceCollectionFromContext("node--place", context, {
        params: getParams("node--place", "card")
          .addSort("created", "DESC")
          .addFilter("field_area.id", resource.id, "IN")
          .getQueryObject(),
      })
  }

  if (resource.type === "taxonomy_term--countries") {
    // Fetch the term content.
    // Tags can show both places and articles.
    additionalContent["termContent"] = [
      ...(await drupal.getResourceCollectionFromContext(
        "node--place",
        context,
        {
          params: getParams("node--place", "card")
            .addSort("created", "DESC")
            .addFilter("field_countries.id", resource.id, "IN")
            .getQueryObject(),
        }
      )),
      ...(await drupal.getResourceCollectionFromContext(
        "node--article",
        context,
        {
          params: getParams("node--article", "card")
            .addSort("created", "DESC")
            .addFilter("field_countries.id", resource.id, "IN")
            .getQueryObject(),
        }
      )),
    ]
  }

  return {
    props: {
      ...(await getGlobalElements(context)),
      resource,
      additionalContent,
    },
  }
}
