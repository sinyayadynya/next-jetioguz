import { DrupalParagraph } from 'next-drupal';
import { ParagraphFeatureItem } from './paragraph--feature_item';


export interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

export function ParagraphFeatureSimple({ paragraphType }: ParagraphProps) {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-heading font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {paragraphType.field_headline}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {paragraphType.field_tagline}
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {paragraphType.field_features.map((item) => (
                        <ParagraphFeatureItem
                            key={item.id}
                            paragraph={item}
                        />
                    ))}
                </dl>
            </div>
        </div>
    );
}
