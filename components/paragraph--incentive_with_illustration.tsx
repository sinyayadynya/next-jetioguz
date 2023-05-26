import { DrupalParagraph } from 'next-drupal';
import Link from 'next/link';
import { MediaImage } from './media--image';

interface ParagraphIncentiveWithIllustrationProps {
    paragraph: DrupalParagraph;
}

export function ParagraphIncentiveWithIllustration({
    paragraph,
}: ParagraphIncentiveWithIllustrationProps) {
    return (
        <div>
            <Link href={paragraph.field_link.uri}>
                {/* <img src={paragraph.field_image.uri} alt="" className="h-24 w-auto" /> */}
                <MediaImage
                            media={paragraph.field_media_image}
                            height="256"
                            width="256"
                            // priority
                            // layout="fill"
                            // objectFit="cover"
                            // className="h-full w-full object-cover object-center"
                        />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{paragraph.field_text_title}</h3>
                <p className="mt-2 text-sm text-gray-500">{paragraph.field_text_tagline}</p>
            </Link>
        </div>
    );
}
