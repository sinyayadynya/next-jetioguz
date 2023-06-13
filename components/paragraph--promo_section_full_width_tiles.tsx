import { Section } from 'components/section';
import { DrupalParagraph } from 'next-drupal';
import Link from 'next/link';
import Image from 'next/image';
import { MediaImage } from './media--image';
import { absoluteURL } from 'lib/utils';

interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

interface ImageCardProps {
    image: any;
    alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, alt }) => {
    if (!image) return null;

    return (
        <div className="flex-shrink-0">
            <Image
                src={absoluteURL(image.uri.url)}
                alt=""
                width={288}
                height={288}
                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
            />
        </div>
    );
};

export function ParagraphPromoFullWidthTiles({
    paragraphType,
}: ParagraphProps) {
    return (
        <Section>
            <div className="overflow-hidden pt-32 sm:pt-14">
                <div className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative pb-16 pt-48 sm:pb-24">
                            <div>
                                <h2
                                    id="promo-heading"
                                    className="text-4xl font-heading font-bold tracking-tight text-white md:text-5xl"
                                >
                                    {paragraphType.field_headline}
                                    <br />
                                    {paragraphType.field_tagline}
                                </h2>
                                <div className="mt-6 text-base">
                                    <Link
                                        href={paragraphType.field_link.uri}
                                        className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                        {paragraphType.field_link.title}
                                    </Link>
                                </div>
                            </div>

                            <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                                <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0 [&>img]:h-64 [&>img]:w-64 [&>img]:rounded-lg [&>img]:object-cover [&>img]:md:h-72 [&>img]:md:w-72">
                                            <ImageCard
                                                image={
                                                    paragraphType
                                                        .field_media_images[0]
                                                        ?.field_media_image
                                                }
                                                alt={
                                                    paragraphType
                                                        .field_media_images[0]
                                                        ?.alt
                                                }
                                            />
                                        </div>

                                        <div className="mt-6 flex-shrink-0 sm:mt-0 [&>img]:h-64 [&>img]:w-64 [&>img]:rounded-lg [&>img]:object-cover [&>img]:md:h-72 [&>img]:md:w-72">
                                            <ImageCard
                                                image={
                                                    paragraphType
                                                        .field_media_images[1]
                                                        ?.field_media_image
                                                }
                                                alt={
                                                    paragraphType
                                                        .field_media_images[1]
                                                        ?.alt
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0 [&>img]:h-64 [&>img]:w-64 [&>img]:rounded-lg [&>img]:object-cover [&>img]:md:h-72 [&>img]:md:w-72">
                                            <ImageCard
                                                image={
                                                    paragraphType
                                                        .field_media_images[2]
                                                        ?.field_media_image
                                                }
                                                alt={
                                                    paragraphType
                                                        .field_media_images[2]
                                                        ?.alt
                                                }
                                            />
                                        </div>

                                        <div className="mt-6 flex-shrink-0 sm:mt-0 [&>img]:h-64 [&>img]:w-64 [&>img]:rounded-lg [&>img]:object-cover [&>img]:md:h-72 [&>img]:md:w-72">
                                            <ImageCard
                                                image={
                                                    paragraphType
                                                        .field_media_images[3]
                                                        ?.field_media_image
                                                }
                                                alt={
                                                    paragraphType
                                                        .field_media_images[3]
                                                        ?.alt
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0 [&>img]:h-64 [&>img]:w-64 [&>img]:rounded-lg [&>img]:object-cover [&>img]:md:h-72 [&>img]:md:w-72">
                                            <ImageCard
                                                image={
                                                    paragraphType
                                                        .field_media_images[4]
                                                        ?.field_media_image
                                                }
                                                alt={
                                                    paragraphType
                                                        .field_media_images[4]
                                                        ?.alt
                                                }
                                            />
                                        </div>

                                        <div className="mt-6 flex-shrink-0 sm:mt-0 [&>img]:h-64 [&>img]:w-64 [&>img]:rounded-lg [&>img]:object-cover [&>img]:md:h-72 [&>img]:md:w-72">
                                            <ImageCard
                                                image={
                                                    paragraphType
                                                        .field_media_images[5]
                                                        ?.field_media_image
                                                }
                                                alt={
                                                    paragraphType
                                                        .field_media_images[5]
                                                        ?.alt
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
