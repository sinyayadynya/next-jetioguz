import Link from 'next/link';
import { DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';
import { MediaImage } from 'components/media--image';

interface NodePlaceTeaserProps {
    node: DrupalNode;
}

export function NodePlaceTeaser({ node, ...props }: NodePlaceTeaserProps) {
    const { t } = useTranslation();

    const dmoAreaName = node.field_dmo?.field_dmo_area?.name;

    return (
        <div {...props}>
            <div className="group relative">
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg group-hover:opacity-75">
                    <MediaImage
                        media={node.field_media_image}
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="font-semibold text-gray-900">
                            {/* <Link  href={node.path.alias} passHref> */}
                            <Link href={node.path.alias ?? ''} passHref>
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0"
                                />
                                {node.title}
                            </Link>
                        </h3>

                        {node.field_place_altitude && (
                            <p className="mt-1 text-sm text-gray-500">
                                <span>{t('altitude')}: </span>
                                <span className="lowercase">
                                    {node.field_place_altitude}
                                    {t('m')}
                                </span>
                            </p>
                        )}
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                        {dmoAreaName}
                    </p>
                </div>
            </div>
        </div>
    );
}
