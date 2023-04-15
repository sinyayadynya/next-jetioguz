import { DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { MediaImages } from 'components/media--images';
import { absoluteURL } from 'lib/utils';

interface NodePlaceCardProps {
    node: DrupalNode;
}

export function NodePlaceCard({ node }: NodePlaceCardProps) {
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
                        className="object-cover object-center h-full w-full group-hover:opacity-75"
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
        <article className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg [&:not(:first)]:sm:aspect-none [&:not(:first)]:sm:relative [&:not(:first)]:sm:h-full first:sm:aspect-h-1 first:sm:aspect-w-1 first:sm:row-span-2">
            {firstImage}
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="flex items-end p-6">
                <div>
                    <h3 className="font-semibold text-white">
                        <Link href={node.path.alias} passHref>
                            <a>
                                <span className="absolute inset-0" />
                                {node.title}
                            </a>
                        </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                        {t('view-place')}
                    </p>
                </div>
            </div>
        </article>
    );
}
