import { DrupalParagraph } from 'next-drupal';
import { FormattedText } from "components/formatted-text"
import { ParagraphStat } from './paragraph--stat';


export interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

export function ParagraphStatsDescription({ paragraphType }: ParagraphProps) {
    return (
        <div className="bg-white py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-3xl font-heading font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {paragraphType.field_headline}
                    </h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                            <p className="text-xl leading-8 text-gray-600">
                                {paragraphType.field_tagline}
                            </p>
                            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                                <FormattedText text={paragraphType.field_text_formatted.processed} />
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-auto lg:justify-center">
                            <dl className="w-64 space-y-8 xl:w-80">
                                {paragraphType.field_stats.map((item) => (
                                    <ParagraphStat
                                        key={item.id}
                                        paragraph={item}
                                    />
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
