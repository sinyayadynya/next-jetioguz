// ./lib/get-global-elements.ts

import { GetServerSidePropsContext, GetStaticPropsContext } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { DrupalBlock, DrupalTaxonomyTerm, JsonApiResource } from "next-drupal"

import { drupal } from "lib/drupal"
import { getParams } from "lib/get-params"
import { LayoutProps } from "components/layout"

type GlobalElements = LayoutProps

// This is a helper function to fetch global elements for layout.
// This is going to be run for every pages on build.
// To make this fast, you could cache the results example on Redis.

// export async function getGlobalElements(
//   context: GetStaticPropsContext | GetServerSidePropsContext
// ): Promise<GlobalElements> {
//   const menuOpts = {
//     params: getParams("menu_link_content--menu_link_content").getQueryObject(),
//     locale: context.locale,
//     defaultLocale: context.defaultLocale,
//   }

//   Fetch menu items.
//   const mainMenu = await drupal.getMenu("main", menuOpts)
//   const footerMenu = await drupal.getMenu("footer", menuOpts)

//   Fetch places categories view.
//   Unused: require to add URL alias on nomadsland.travel
//   const { results: placesCategories } = await drupal.getView<
//     DrupalTaxonomyTerm[]
//   >("places_categories--block", {
//     locale: context.locale,
//     defaultLocale: context.defaultLocale,
//     params: getParams("taxonomy_term--categories").addSort("name").getQueryObject(),
//   })

//   Fetch destination activities view.
//   const { results: destinationActivities } = await drupal.getView<
//     DrupalTaxonomyTerm[]
//   >("destination_activities--block", {
//     locale: context.locale,
//     defaultLocale: context.defaultLocale,
//     params: getParams("taxonomy_term--activities").addSort("name").getQueryObject(),
//   })

//   Fetch the incentives block.
//   You would normally use drupal.getResource() here to fetch the block by uuid.
//   We're using getResourceCollection and a filter here because this site needs
//   to work on any Destination sites. UUIDs are different for every Destination install.

//   const [blockIncentives] = await drupal.getResourceCollectionFromContext<
//     DrupalBlock[]
//   >("block_content--incentives_block", context, {
//     params: getParams("block_content--incentives_block")
//       .addFilter("info", "Jeti Oguz incentive 4-column with illustrations")
//       .addPageLimit(1)
//       .getQueryObject(),
//   })

//   const blockIncentives = await drupal.getResourceFromContext<DrupalBlock>(
//     "block_content--incentives_block",
//     "37d5442c-3103-44cd-880a-3b1f116cda82",
//     context
//   )

//   return {
//     ...(await serverSideTranslations(context.locale, ["common"])),
//     menus: {
//       main: mainMenu.items,
//       footer: footerMenu.items,
//     },
//     blocks: {
//       placesCategories,
//       destinationActivities,
//       blockIncentives,
//       disclaimer,
//     },
//   }
// }

export async function getGlobalElements(
    context: GetStaticPropsContext | GetServerSidePropsContext
  ): Promise<GlobalElements> {

    const translations = await serverSideTranslations(context.locale, ["common"])

    const layoutProps: LayoutProps = {
      // include other properties here that matches your actual LayoutProps type
    }

    return {...layoutProps, ...translations}
  }

// async function getBlocksProps(): Promise<DrupalBlock[]> {
//   const blocks = await drupal.getResourceCollection("block_content--incentives_block")
//   const field_incentive_items = blocks[0].field_incentive_items
//   const blocksAdditionalContent = await Promise.all(field_incentive_items.map(async (item: JsonApiResource) => {
//     return await drupal.getResource(
//       item.type,
//       item.id
//     )
//   }))
//   return blocksAdditionalContent
// }
