import { DrupalNode } from "next-drupal"
import Link from "next/link"

import { useTranslation } from "next-i18next"
import { MediaImage } from "components/media--image"

interface NodePageProps {
  node: DrupalNode
}

export function ProductAccommodationCard({ node }: NodePageProps) {
  const { t } = useTranslation()
  console.log('Node:', node);
  return (
    <div className="group relative">
        <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
            <MediaImage
                media={node.field_media_image}
                className="h-full w-full object-cover object-center"
            />
        </div>
        <h4 className="mt-4 text-sm text-gray-700">
            {/* <Link href={node.path.alias} passHref> // Original link */}
            <Link href={node.id} passHref>
                <span className="absolute inset-0"></span>
                {node.title}
            </Link>
        </h4>
        <p className="mt-1 text-sm text-gray-500">
            {node.field_accommodation_type.name}
        </p>
        <p className="mt-1 text-sm font-medium text-gray-900">
            {node.field_dmo_area?.name}
        </p>
    </div>
  )
}
