import { DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { MediaImages } from 'components/media--images';
import { Breadcrumbs } from 'components/breadcrumbs';
import { FormattedText } from 'components/formatted-text';
import Map from './node--place--map';
import MapComponent from './node--place--map';
import { absoluteURL } from 'lib/utils';

interface NodePlaceProps {
    node: DrupalNode;
}

export function NodePlace({ node, ...props }: NodePlaceProps) {
    const { t } = useTranslation();
    let firstImage = null
    const multipleImg = node.field_media_images.map((image: DrupalNode, index: number) => {
        const url = image.field_media_image.uri.url
        const author = image.field_media_author.name
        const item = (
            <div key={"div" + author + index}>
                <img
                    key={"img" + author + index}
                    src={absoluteURL(url)}
                    alt={`${image.field_media_image.resourceIdObjMeta.alt}`}
                    className="object-cover h-48 w-auto rounded-3xl"
                />
                <p
                    key={"p" + author + index}
                    className="font-semibold"
                >
                    {author}
                </p>
            </div>
        )
        if (index === 0) {
            firstImage = item
            return
        }
        return item
    })

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
                        media={node.field_media_images.field_media_image}
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
                    <div >
                        {firstImage}
                    </div>
                </div>
                <div className='w-full h-96'>
                    <Map
                        latitude={+node.field_place_geofield.lat}
                        longitude={+node.field_place_geofield.lon}
                        className="w-full h-96"
                    />
                </div>
                {multipleImg}
            </article>
        </div>
    );
}
