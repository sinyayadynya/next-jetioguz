import { DrupalParagraph } from 'next-drupal';

import { ParagraphBlogSection } from 'components/paragraph--blog-section';

const paragraphTypes = {
    'paragraph--blog-section': ParagraphBlogSection,
};

export interface ParagraphProps {
    paragraph: DrupalParagraph;
}

export function Paragraph({ paragraph, ...props }: ParagraphProps) {
    if (!paragraph) {
        return null;
    }

    const Component = paragraphTypes[paragraph.type];

    if (!Component) {
        return null;
    }

    return <Component paragraph={paragraph} {...props} />;
}
