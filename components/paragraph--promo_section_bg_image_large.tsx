import { Section } from "components/section"
import { DrupalParagraph } from "next-drupal"
import { MediaImage } from 'components/media--image';
import Link from 'next/link';

export interface ParagraphProps {
    paragraphType: DrupalParagraph;
  }

export function ParagraphPromoBgImageLargeContent({ paragraphType }: ParagraphProps) {

    return (
      <Section>
        <div key={paragraphType.id} className="bg-white">
                <div className="relative bg-gray-900">
                    {/* Decorative image and overlay */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 overflow-hidden"
                    >
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
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gray-900 opacity-50"
                    />

                    <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
                        <h1 className="text-4xl font-heading font-bold tracking-tight text-white lg:text-6xl">
                            {paragraphType.field_heading}
                        </h1>
                        <p className="mt-4 text-xl text-white">
                            {paragraphType.field_tagline}
                        </p>
                        <Link
                            href=""
                            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                            {paragraphType.field_link}
                        </Link>
                    </div>
                </div>
            </div>
      </Section>
    )
  }
