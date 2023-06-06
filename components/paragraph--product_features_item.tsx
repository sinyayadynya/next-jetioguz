import { DrupalParagraph } from 'next-drupal';
import { MediaImage } from 'components/media--image';

interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

export function ParagraphProductFeaturesItem({
    paragraphType,
}: ParagraphProps) {
    return (
        <>
            <h3 className="text-lg font-medium text-gray-900">
                {paragraphType.field_heading}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
                {paragraphType.field_tagline}
            </p>
            <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                {paragraphType?.field_media_image && (
                    <MediaImage
                        media={paragraphType.field_media_image}
                        height="1216"
                        width="1216"
                        priority
                        layout="fill"
                        objectFit="cover"
                    />
                )}
            </div>
        </>
    );
}
