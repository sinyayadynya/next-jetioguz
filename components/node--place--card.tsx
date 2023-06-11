import Link from 'next/link';
import { DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';
import { MediaImage } from 'components/media--image';

interface NodePlaceCardProps {
    node: DrupalNode;
    className?: string
}

export function NodePlaceCard({ node }: NodePlaceCardProps) {
    const { t } = useTranslation();

    return (
        <article className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg [&:not(:first)]:sm:aspect-none [&:not(:first)]:sm:relative [&:not(:first)]:sm:h-full first:sm:aspect-h-1 first:sm:aspect-w-1 first:sm:row-span-2">
            <MediaImage
                media={node.field_media_image}
                width={1280}
                height={720}
                className="object-cover group-hover:opacity-75" />
                <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="flex items-end p-6">
                <div>
                    <h3 className="font-semibold text-white">
                        <Link href={node.path.alias} passHref>

                            <span className="absolute inset-0" />
                            {node.title}

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
