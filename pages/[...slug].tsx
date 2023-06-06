import {
    GetStaticPathsContext,
    GetStaticPathsResult,
    GetStaticPropsContext,
    GetStaticPropsResult,
} from "next"
import Head from "next/head"
import { DrupalNode, DrupalTaxonomyTerm, DrupalView, JsonApiResource } from "next-drupal"

import { PageProps } from "types"
import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { NodeArticle, NodeArticleProps } from "components/node--article"
import { NodeActivities } from "components/node--activities"
import { NodePlace } from "components/node--place"
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

const ENTITY_TYPES = [
  "node--page",
  "node--article",
  "node--activities",
  "node--place",
  "product--accommodation",
  "taxonomy_term--categories",
  "taxonomy_term--countries",
  "taxonomy_term--dmo_places",
]

interface NodePageProps extends LayoutProps, PageProps {
    entity: DrupalNode | DrupalTaxonomyTerm;
    views?: Array<DrupalView>;
}

const getFilterParams = (entityType: string) => {
    let params = {};

    if (entityType.startsWith("node")) {
      params['filter[field_site.meta.drupal_internal__target_id]'] = 'jetioguz';
    }

    if (entityType.startsWith("product")) {
      params['filter[stores.meta.drupal_internal__target_id]'] = '3';
    }

    return params;
  }


export default function NodePage({
  entity,
//   views,
  additionalContent,
//   menus,
//   blocks,
}: NodePageProps) {
  if (!entity) return null;
  const productVariations = entity?.variations;

  return (
    <Layout
    //   menus={menus}
    //   blocks={blocks}
      meta={{
        title: entity.title || entity.name,
      }}
    >
      {entity.type === "node--article" && (
        <NodeArticle
          node={entity as DrupalNode}
          additionalContent={
            additionalContent as NodeArticleProps["additionalContent"]
          }
        />
      )}
      {entity.type === "node--activities" && (
        <NodeActivities node={entity as DrupalNode} />
      )}
      {entity.type === "node--place" && (
        <NodePlace node={entity as DrupalNode} />
      )}
      {entity.type === "product--accommodation" && (
        <ProductAccommodation
            product={entity as DrupalNode}
            // productVariations={productVariations}
        />
      )}
      {/* {entity.type === "product--accommodation" && (
            <ProductAccommodation
                product={entity as DrupalNode}
            />
        )} */}
        {/*
        {entity.type === "product--accommodation" && (
            <ProductAccommodation
                node={entity as DrupalNode}
            />
        )} */}
      {entity.type === "taxonomy_term--categories" && (
        <TaxonomyTermContentCategory
          term={entity as DrupalTaxonomyTerm}
          additionalContent={
            additionalContent as TaxonomyTermContentCategoryProps["additionalContent"]
          }
        />
      )}
    </Layout>
  )
}

// export async function getStaticPaths(
//     context: GetStaticPathsContext
//   ): Promise<GetStaticPathsResult> {
//     return {
//       paths: await drupal.getStaticPathsFromContext(ENTITY_TYPES, context),
//       fallback: "blocking",
//     }
// }

export async function getStaticPaths(
    context: GetStaticPathsContext
  ): Promise<GetStaticPathsResult> {
  const paths = []
  for(const entityType of ENTITY_TYPES){
    const entityPaths = await drupal.getStaticPathsFromContext(
      entityType,
      context,
      {
        params: getFilterParams(entityType)
      }
    )
    paths.push(...entityPaths)
  }
  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await drupal.translatePathFromContext(context)

  // If path is not found or the node is not one we care about,
  // return a 404.
  if (!path || !ENTITY_TYPES.includes(path.jsonapi.resourceName)) {
    return {
      notFound: true,
    }
  }

  // Fetch the node from Drupal.
  const entity = await drupal.getResourceFromContext<DrupalNode>(
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
  if (!entity) {
    throw new Error(`Failed to fetch node: ${path.jsonapi.individual}`)
  }

  // If we're not in preview mode and the node is not published,
  // Return page not found.
  if (!context.preview && entity?.status === false) {
    return {
      notFound: true,
    }
  }

  // Fetch additional content for pages.
  let additionalContent: PageProps["additionalContent"] = {}


  if (entity.type === "node--article") {
    // Fetch featured articles.
    additionalContent["featuredArticles"] =
      await drupal.getResourceCollectionFromContext("node--article", context, {
        params: getParams("node--article--card")
          .addFields("node--article", ['body', 'field_media_image', 'created', 'path', 'title'])
          .addFilter("id", entity.id, "<>")
          .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
          .addPageLimit(3)
          .addSort("created", "DESC")
          .getQueryObject(),
      })
  }

  if (entity.type === "node--place") {
    // Fetch featured places.
    additionalContent["featuredPlaces"] =
      await drupal.getResourceCollectionFromContext("node--place", context, {
        params: getParams("node--place--card")
          .addFields("node--place", ['body', 'field_media_image', 'created', 'path', 'title'])
          .addFilter("id", entity.id, "<>")
          .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
          .addPageLimit(3)
          .addSort("created", "DESC")
          .getQueryObject(),
      })
  }

  if (entity.type === "product--accommodation") {
    // Fetch featured accommodation.
    additionalContent["featuredAccommodations"] =
      await drupal.getResourceCollectionFromContext("product--accommodation", context, {
        params: getParams("product--accommodation--card")
          .addFields("product--accommodation", ['body', 'field_media_image', 'created', 'path', 'title'])
          .addFilter("id", entity.id, "<>")
          .addFilter('field_stores.meta.drupal_internal__target_id', '3')
          .addPageLimit(3)
          .addSort("created", "DESC")
          .getQueryObject(),
      })
  }

  if (entity.type === "taxonomy_term--place_types") {
    // Fetch the term content.
    additionalContent["termContent"] =
      await drupal.getResourceCollectionFromContext("node--place", context, {
        params: getParams("node--place--card")
          .addSort("created", "DESC")
          .addFilter("field_content_category.id", entity.id, "IN")
          .getQueryObject(),
      })
  }

  if (entity.type === "taxonomy_term--place_types") {
    // Fetch the term content.
    additionalContent["termContent"] =
      await drupal.getResourceCollectionFromContext("node--place", context, {
        params: getParams("node--place--card")
          .addSort("created", "DESC")
          .addFilter("field_area.id", entity.id, "IN")
          .getQueryObject(),
      })
  }

  if (entity.type === "taxonomy_term--dmo_places") {
    // Fetch the term content.
    additionalContent["termContent"] =
      await drupal.getResourceCollectionFromContext("node--place", context, {
        params: getParams("node--place--card")
          .addSort("created", "DESC")
          .addFilter("field_area.id", entity.id, "IN")
          .getQueryObject(),
      })
  }

  if (entity.type === "taxonomy_term--countries") {
    // Fetch the term content.
    // Tags can show both places and articles.
    additionalContent["termContent"] = [
      ...(await drupal.getResourceCollectionFromContext(
        "node--place",
        context,
        {
          params: getParams("node--place--card")
            .addSort("created", "DESC")
            .addFilter("field_countries.id", entity.id, "IN")
            .getQueryObject(),
        }
      )),
      ...(await drupal.getResourceCollectionFromContext(
        "node--article",
        context,
        {
          params: getParams("node--article--card")
            .addSort("created", "DESC")
            .addFilter("field_countries.id", entity.id, "IN")
            .getQueryObject(),
        }
      )),
    ]
  }

  return {
    props: {
      ...(await getGlobalElements(context)),
      entity,
    //   views,
      additionalContent,
    },
  }
}
