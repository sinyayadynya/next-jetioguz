import { DrupalParagraph } from 'next-drupal';
import { FormattedText } from "components/formatted-text"

interface ParagraphProps {
    paragraph: DrupalParagraph;
}

export function ParagraphFeatureItem({ paragraph }: ParagraphProps) {
    return (
        <div key={paragraph.field_feature_item_label}>
            <dt className="font-semibold text-gray-900">
                {paragraph.field_feature_item_label}
            </dt>
            <dd className="mt-1 text-gray-600">
                <FormattedText text={paragraph.field_feature_item_text.processed} />
            </dd>
        </div>
    );
}
