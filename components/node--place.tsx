import { DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { MediaImages } from 'components/media--images';
import { Breadcrumbs } from 'components/breadcrumbs';
import { FormattedText } from 'components/formatted-text';

interface NodePlaceProps {
    node: DrupalNode;
}

export function NodePlace({ node, ...props }: NodePlaceProps) {
    const { t } = useTranslation();

    return (
        <div className="container" {...props}>
            <Breadcrumbs
                items={[
                    {
                        title: t('destinations'),
                        url: '/destinations',
                    },
                    {
                        title: node.title,
                    },
                ]}
            />

            <article className="pt-6 pb-24">
                <div className="flex flex-col space-y-4">

                    <MediaImages
                        media={node.field_media_images}
                        width={770}
                        height={512}
                    />

                    {node.field_content_category?.length ? (
                        <div className="flex">
                            {node.field_content_category.name}
                        </div>
                    ) : null}

                    <h1 className="font-serif text-4xl">{node.title}</h1>

                    {node.field_area?.length ? (
                        <div className="flex">
                            {node.field_area.name}
                        </div>
                    ) : null}

                </div>

                <div className="py-4">
                    {node.field_place_altitude && (
                        <div className="flex items-center space-x-2">
                            <p className="font-semibold">
                                {t('altitude')}:
                            </p>
                            <p className="lowercase">
                                {node.field_place_altitude} {t('m')}
                            </p>
                        </div>
                    )}
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col space-y-6 md:col-span-2">
                        {node.body && (
                            <div className="prose prose-li:marker:text-primary-500 prose-li:marker:text-2xl max-w-none text-text">
                                <FormattedText text={node.body.processed} />
                            </div>
                        )}
                    </div>
                </div>
            </article>
        </div>
    );
}
