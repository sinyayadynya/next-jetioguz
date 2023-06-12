import { DrupalBlock } from 'next-drupal';
import Link from 'next/link';
import { MediaImage } from './media--image';
import { ParagraphPromoTestimonial } from './paragraph--promo_testimonial';

interface BlockPromoFadingTestimonialsProps {
    block: DrupalBlock;
}

export function BlockPromoFadingTestimonials({
    block,
}: BlockPromoFadingTestimonialsProps) {
    return (
        <div className="relative overflow-hidden bg-white">
            {/* Decorative background image and gradient */}
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
                    <MediaImage
                        media={block.field_media_image}
                        fill
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
            </div>

            {/* Callout */}
            <section
                aria-labelledby="sale-heading"
                className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
            >
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2
                        id="sale-heading"
                        className="font-heading text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
                    >
                        {block.field_heading}
                    </h2>
                    {block.field_tagline && (
                        <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                            {block.field_tagline}
                        </p>
                    )}
                    {block.field_cta_button && (
                        <Link
                            href={block.field_cta_button.uri.replace(
                                'internal:',
                                ''
                            )}
                            passHref
                            className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
                        >
                            {block.field_cta_button.title}
                        </Link>
                    )}
                </div>
            </section>

            {/* Testimonials */}
            <section
                aria-labelledby="testimonial-heading"
                className="relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:py-32 lg:px-8"
            >
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2
                        id="testimonial-heading"
                        className="font-heading text-2xl font-bold tracking-tight text-gray-900"
                    >
                        What are travelers saying?
                    </h2>

                    <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                        {block.field_promo_testimonials.map((item) => (
                            <ParagraphPromoTestimonial
                                key={item.id}
                                paragraph={item}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
