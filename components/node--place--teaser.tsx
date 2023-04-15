import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import Link from "next/link"

import { MediaImages } from "components/media--images"

interface NodePlaceTeaserProps {
  node: DrupalNode
}

export function NodePlaceTeaser({ node, ...props }: NodePlaceTeaserProps) {
  const { t } = useTranslation()

  return (
    <article
      className="relative flex flex-col p-4 space-y-4 overflow-hidden bg-white border border-gray-50 group"
      {...props}
    >
      <h2 className="flex-1 font-serif text-2xl">{node.title}</h2>
      <MediaImages media={node.field_media_images} width={335} height={225} />
      <Link
        href={node.path.alias}
        passHref
        className="inline-flex items-center uppercase hover:underline text-green-700">

        {t("view-place")}
        <svg
          className="w-5 h-5 ml-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>

      </Link>
    </article>
  );
}
