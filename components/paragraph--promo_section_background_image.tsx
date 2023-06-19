import { Section } from 'components/section';
import { DrupalParagraph } from 'next-drupal';
import Link from 'next/link';
import { MediaImage } from './media--image';

interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

export function ParagraphPromoBackgroundImage({
    paragraphType,
}: ParagraphProps) {
    return (
        <Section>
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0">
                        <MediaImage
                            media={paragraphType.field_media_image}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                            <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl">
                                {paragraphType.field_headline}
                            </h2>
                            <p className="mt-3 text-xl text-white">
                                {paragraphType.field_tagline}
                            </p>
                            <Link
                                href={paragraphType.field_link.uri}
                                className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                            >
                                {paragraphType.field_link.title}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
