import { DrupalParagraph } from 'next-drupal';
import Link from 'next/link';

import IconFeatureCalendar from 'components/icons/icon-calendar';
import IconFeatureDelivery from 'components/icons/icon-delivery';
import IconFeatureGiftCard from 'components/icons/icon-gift-card';
import IconFeaturePlanet from 'components/icons/icon-planet';

// Component properties
interface ParagraphIncentiveWithIllustrationProps {
    paragraph: DrupalParagraph;
}

export function ParagraphIncentiveWithIllustration({ paragraph }: ParagraphIncentiveWithIllustrationProps) {
    // Direct mapping of icon names to icon components
    const iconComponents = {
        'IconFeatureCalendar': IconFeatureCalendar,
        'IconFeatureDelivery': IconFeatureDelivery,
        'IconFeatureGiftCard': IconFeatureGiftCard,
        'IconFeaturePlanet': IconFeaturePlanet,
    };

    // Use paragraph's icon name to get respective icon component
    const SelectedIconComponent = iconComponents[paragraph.field_feature_icon];

    // Handle undefined icon
    if (!SelectedIconComponent) {
        console.error(`Icon ${paragraph.field_feature_icon} is not defined.`);
        console.log(paragraph);
        console.log('field_feature_icon:', paragraph.field_feature_icon);


        return null;
    }

    return (
        <div>
            <Link href={paragraph.field_link.uri}>
                <SelectedIconComponent className="h-24 w-auto" />

                <h3 className="mt-6 text-sm font-medium text-gray-900">{paragraph.field_text_title}</h3>
                <p className="mt-2 text-sm text-gray-500">{paragraph.field_text_tagline}</p>
            </Link>
        </div>
    );
}
