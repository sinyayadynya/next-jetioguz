import {
  DrupalBlock, DrupalTaxonomyTerm, JsonApiResource,
} from "next-drupal"
import { useTranslation } from "next-i18next"
import { FormattedText } from "components/formatted-text"
import { absoluteURL } from "lib/utils"

export interface FooterBlocksProps {
  blocks: {
    destinationActivities: DrupalTaxonomyTerm[]
    footerPromo?: DrupalBlock
    blockIncentives: DrupalBlock
    disclaimer: DrupalBlock
  }
}


export function BlockIncentives({ blocks }: FooterBlocksProps) {
  const { t } = useTranslation("common")

  function incentiveBlock(field_incentive_items: DrupalBlock[]) {
    const incentiveList = field_incentive_items.map((incentive: JsonApiResource) => {
      const imgUrl = incentive.field_image.uri.url

      return (
        <div key={incentive.field_text_title}>
          <img
            src={absoluteURL(imgUrl)}
            alt={incentive.field_image.resourceIdObjMeta.alt}
            className="h-24 w-auto" />
          <h3 className="mt-6 text-sm font-medium text-gray-900">{incentive.field_text_title}</h3>
          <span className="mt-2 text-sm text-gray-500">
            <FormattedText
              text={incentive.field_text_formatted.processed}
            />
          </span>
        </div>
      )
    })
    return <>
      {incentiveList}
    </>
  }

  const incentiveBlockList = incentiveBlock(blocks.blockIncentives.field_incentive_items)
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {incentiveBlockList}
        </div>
      </div>
    </section>
  )
}

