import { DrupalParagraph } from 'next-drupal';

export interface ParagraphProps {
    paragraph: DrupalParagraph;
}

export function ParagraphStat({ paragraph }: ParagraphProps) {
    return (

        <div
            key={paragraph.field_label}
            className="flex flex-col-reverse gap-y-4"
        >
            <dt className="text-base leading-7 text-gray-600">
                {paragraph.field_label}
            </dt>
            <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                {paragraph.field_value}
            </dd>
        </div>

    );
}
