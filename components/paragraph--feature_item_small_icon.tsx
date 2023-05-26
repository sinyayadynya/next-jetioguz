import { DrupalParagraph } from 'next-drupal';
import Link from 'next/link';
import * as heroicons from '@heroicons/react/20/solid';

interface ParagraphFeatureItemSmallIconProps {
    paragraph: DrupalParagraph;
}

export function ParagraphFeatureItemSmallIcon({
    paragraph,
}: ParagraphFeatureItemSmallIconProps) {
    const Icon = heroicons[paragraph.field_herawicon];

    return (
        <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                {Icon && (
                    <Icon
                        className="h-5 w-5 flex-none text-primary-600"
                        aria-hidden="true"
                    />
                )}
                {paragraph.field_feature_item_label}
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                    {paragraph.field_feature_item_text_plain}
                </p>
                <p className="mt-6">
                    <Link href={paragraph.field_link.uri} className="text-sm font-semibold leading-6 text-primary-600">
                        {paragraph.field_link.title}{' '}
                        <span aria-hidden="true">→</span>
                    </Link>
                </p>
            </dd>
        </div>
    );
}
