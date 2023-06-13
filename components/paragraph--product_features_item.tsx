import { DrupalParagraph } from 'next-drupal';
import { MediaImage } from 'components/media--image';

interface ParagraphProps {
    paragraphType: DrupalParagraph;
    featureIdx: number;
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export function ParagraphProductFeaturesItem({
    paragraphType,
    featureIdx,
}: ParagraphProps) {
    return (
        <>
            <div
                className={classNames(
                    featureIdx % 2 === 0
                        ? 'lg:col-start-1'
                        : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                )}
            >
                <h3 className="text-lg font-medium text-gray-900">
                    {paragraphType.field_heading}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                    {paragraphType.field_tagline}
                </p>
            </div>
                <div
                    className={classNames(
                        featureIdx % 2 === 0
                            ? 'lg:col-start-6 xl:col-start-5'
                            : 'lg:col-start-1',
                        'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                    )}
                >
                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">

                    {paragraphType?.field_media_image && (
                        <MediaImage
                            media={paragraphType.field_media_image}
                            className="object-cover object-center"
                        />
                    )}
                </div>
            </div>
        </>
    );
}
