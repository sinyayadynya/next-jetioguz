import { DrupalNode } from "next-drupal"

import { useTranslation } from "next-i18next";
import { DrupalParagraph } from 'next-drupal';
import { Paragraph } from "./paragraph";


export interface NodePlanningProps {
    node: DrupalNode;
}

export function NodePlanning({ node }: NodePlanningProps) {
    const field_sections: DrupalParagraph[] = node.field_sections

    return (
        <div>
            {field_sections?.map((section) => (
                <Paragraph key={section.id} paragraph={section} />
            ))}
        </div>
    );
}
