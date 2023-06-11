import Link from "next/link"
import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"

import { MediaImage } from "components/media--image"
import { formatDate } from "lib/utils"
import { FormattedText } from "components/formatted-text"

interface NodeArticleCardProps {
    nodeArticles: DrupalNode
}

export function NodeArticleCard({ nodeArticles, ...props }: NodeArticleCardProps) {
    const { t } = useTranslation()
    return (
        <article
            className="flex flex-col items-start justify-between"
            {...props}
        >
            <div className="relative w-full">
                <MediaImage
                    media={nodeArticles.field_media_image}
                    width={335}
                    height={225}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">
                        {formatDate(nodeArticles.created)}
                    </span>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={nodeArticles.path.alias}>
                            <span className="absolute inset-0" />
                            {nodeArticles.title}
                        </a>
                    </h3>
                    {nodeArticles.body && (
                        <div className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                            <FormattedText text={nodeArticles.body.processed} />
                        </div>
                    )}
                </div>
            </div>
        </article>
    )
}
