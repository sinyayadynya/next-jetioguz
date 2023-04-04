import Link from "next/link"
import {
  DrupalBlock,
} from "next-drupal"
import { useTranslation } from "next-i18next"

import { ParagraphProps } from "components/paragraph"
import { MediaImage } from "components/media--image"
import { FormattedText } from "components/formatted-text"

export interface FooterProps {
  blocks: {
    blockIncentives: DrupalBlock
  }
}

export function BlockIncentives({ blocks }: BlockIncentivesProps) {
  const { t } = useTranslation("common")

  const incentives = [
    {
      name: 'How to go there',
      description: "The nearest major airport to Jeti-Oguz is in Bishkek. From there, it's a scenic 5-hour drive to Jeti-Oguz.",
      imageSrc: 'https://nomadsland.travel/sites/default/files/svg/incentives/icon-delivery-light.svg',
    },
    {
      name: 'Planning',
      description: 'Jeti-Oguz offers a wide range of activities. Plan your itinerary in advance to make the most of your time in the region.',
      imageSrc: 'https://nomadsland.travel/sites/default/files/svg/incentives/icon-calendar-light.svg',
    },
    {
      name: 'Offers',
      description: "Book your Jeti-Oguz tour in advance and enjoy early bird discounts on accommodation and activities.",
      imageSrc: 'https://nomadsland.travel/sites/default/files/svg/incentives/icon-gift-card-light.svg',
    },
    {
      name: 'Sustainability',
      description: "We are committed to promoting responsible tourism by minimizing our impact on the environment.",
      imageSrc: 'https://nomadsland.travel/sites/default/files/svg/incentives/icon-planet-light.svg',
    },
  ]

  return (
        <section className="bg-gray-50">
            {/* {blocks?.blockIncentives && (
                <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                        {blocks.blockIncentives}
                    </div>
                </div>
            )} */}

            <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                {incentives.map((incentive) => (
                    <div key={incentive.name}>
                        <img src={incentive.imageSrc} alt="" className="h-24 w-auto" />
                        <h3 className="mt-6 text-sm font-medium text-gray-900">{incentive.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}
