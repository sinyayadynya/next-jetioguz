import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import { FormattedText } from 'components/formatted-text';
import Link from "next/link"
import { absoluteURL } from 'lib/utils';

import { MediaImages } from "components/media--images"

interface NodePlaceTeaserProps {
  node: DrupalNode
}

export function NodePlaceTeaser({ node, ...props }: NodePlaceTeaserProps) {
    const { t } = useTranslation();

    let firstImage = null;
    // const firstImg =node.field_media_images[0].field_media_image.uri.url
    const multipleImg = node.field_media_images.map(
        (image: DrupalNode, index: number) => {
            const url = image.field_media_image.uri.url;
            const item = (
                <div key={'div' + index}>
                    <img
                        key={'img' + index}
                        src={absoluteURL(url)}
                        alt={`${image.field_media_image.resourceIdObjMeta.alt}`}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            );
            if (index === 0) {
                firstImage = item;
                return;
            }
            return item;
        }
    );

  return (
    <div
        {...props}
    >
        <Link href={node.path.alias} passHref>
            <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                {firstImage}
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
