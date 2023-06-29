import { DrupalParagraph } from 'next-drupal';
import { FormattedText } from "components/formatted-text"


export interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

export function ParagraphTextThreeColIntro({ paragraphType }: ParagraphProps) {
    return (
        <section id={paragraphType.field_anchor} className="bg-white py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-3xl text-center font-heading font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {paragraphType.field_headline}
                    </h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className="lg:w-full">
                            <p className="text-xl text-center leading-8 text-gray-600">
                                {paragraphType.field_tagline}
                            </p>
                            <div className="mt-10 text-base leading-7 text-gray-700 max-w-xl gap-x-8 lg:max-w-none lg:grid-cols-3 lg:columns-3 [&>p]:mb-4">
                                <FormattedText text={paragraphType.field_text_formatted.processed} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
