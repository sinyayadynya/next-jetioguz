import { Section } from 'components/section';
import { DrupalParagraph } from 'next-drupal';
import { ParagraphProductFeaturesItem } from 'components/paragraph--product_features_item';

interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function ParagraphProductFeaturesAlternating({
    paragraphType,
}: ParagraphProps) {
    return (
        <Section>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {paragraphType.field_heading}
                        </h2>
                        <p className="mt-4 text-gray-500">
                            {paragraphType.field_tagline}
                        </p>
                    </div>

                    <div className="mt-16 space-y-16">
                        {paragraphType.field_features.map((feature, featureIdx) => (
                            <div
                                key={feature.field_heading}
                                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                            >
                                <div
                                    className={classNames(
                                        featureIdx % 2 === 0
                                            ? 'lg:col-start-1'
                                            : 'lg:col-start-8 xl:col-start-9',
                                        'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                                    )}
                                >
                                    <ParagraphProductFeaturesItem paragraphType={feature} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
