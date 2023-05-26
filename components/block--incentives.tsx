import { DrupalBlock } from 'next-drupal';
import { ParagraphIncentiveWithIllustration } from './paragraph--incentive_with_illustration';

interface BlockIncentivesProps {
    block: DrupalBlock;
}

export function BlockIncentives({ block }: BlockIncentivesProps) {

    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">

                    {block.field_incentive_items.map((item) => (
                        <ParagraphIncentiveWithIllustration
                            key={item.id}
                            paragraph={item}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}
