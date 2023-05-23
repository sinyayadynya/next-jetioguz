import Link from "next/link"
import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import { FormattedText } from 'components/formatted-text';
import { MediaImage } from "components/media--image";

interface NodePlaceTeaserProps {
  node: DrupalNode
}

export function NodePlaceTeaser({ node, ...props }: NodePlaceTeaserProps) {
    const { t } = useTranslation();

    return (
        <div
            {...props}
        >
            <Link href={node.path.alias} passHref>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                    <MediaImage
                        media={node.field_media_image}
                        width={335} height={225}
                        className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-8 font-serif text-2xl text-gray-900">
                    {node.title}
                </h3>
                {node.body && (
                    <div className="mt-2 text-base text-gray-500 line-clamp-3">
                        <FormattedText text={node.body.processed} />
                    </div>
                )}
            </Link>
        </div>
    );
}
