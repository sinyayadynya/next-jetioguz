import { DrupalParagraph } from 'next-drupal';
import { ParagraphBlogSection } from 'components/paragraph--blog-section';
import { ParagraphImageFullWidth } from './paragraph--image_full_width';
import { ParagraphVideo } from './paragraph--video';

const paragraphTypes = {
    'paragraph--blog_section': ParagraphBlogSection,
    'paragraph--image_full_width': ParagraphImageFullWidth,
    'paragraph--video': ParagraphVideo,
};

export interface ParagraphProps {

    paragraph: DrupalParagraph[];
}

export function Paragraph({ paragraph }: ParagraphProps) {
    if (!paragraph.length) {
        return null;
    }
    let result = []

    for (let i in paragraph) {
        const paragraphType = paragraph[i]
        const Component = paragraphTypes[paragraphType.type];
        result.push(<Component key={paragraphType.type + i} paragraphType={paragraphType} />)
    }
    return <>
        {result}
    </>
}