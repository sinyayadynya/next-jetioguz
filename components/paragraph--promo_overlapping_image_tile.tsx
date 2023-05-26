import { DrupalParagraph } from 'next-drupal';
import Link from 'next/link';
import { MediaImage } from './media--image';

interface ParagraphPromoOverlappingImageTileProps {
    paragraph: DrupalParagraph;
}

export function ParagraphPromoOverlappingImageTile({
    paragraph,
}: ParagraphPromoOverlappingImageTileProps) {
    return (
        <div className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto">
            <div>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 overflow-hidden rounded-lg"
                >
                    <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                        <MediaImage
                            media={paragraph.field_media_image}
                            height="1216"
                            width="1216"
                            priority
                            layout="fill"
                            objectFit="cover"
                            // className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                </div>
                <div className="absolute inset-0 flex items-end rounded-lg p-6">
                    <div>
                        <p aria-hidden="true" className="text-sm text-white">
                            {paragraph.field_text_cta}
                        </p>
                        <h3 className="mt-1 font-semibold text-white">
                            <Link href={paragraph.field_link.uri}>
                                <span className="absolute inset-0" />
                                {paragraph.field_text_title}
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
