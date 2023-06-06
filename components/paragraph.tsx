import { DrupalParagraph } from 'next-drupal';
import { ParagraphBlogSection } from 'components/paragraph--blog-section';
import { ParagraphImageFullWidth } from './paragraph--image_full_width';
import { ParagraphVideo } from './paragraph--video';
import { ParagraphPromoBgImageLargeContent } from 'components/paragraph--promo_section_bg_image_large';
import { ParagraphPromoBackgroundImage } from 'components/paragraph--promo_section_background_image';
import { ParagraphPromoFullWidthTiles } from 'components/paragraph--promo_section_full_width_tiles';
import { ParagraphProductFeaturesAlternating } from 'components/paragraph--product_features_alternating';
import { ParagraphProductFeaturesSquareImages } from 'components/paragraph--product_features_square_images';

const paragraphTypes = {
    'paragraph--blog_section': ParagraphBlogSection,
    'paragraph--image_full_width': ParagraphImageFullWidth,
    'paragraph--video': ParagraphVideo,
    'paragraph--promo_section_bg_image_large': ParagraphPromoBgImageLargeContent,
    'paragraph--promo_section_background_image': ParagraphPromoBackgroundImage,
    'paragraph--promo_section_full_width_tiles': ParagraphPromoFullWidthTiles,
    'paragraph--product_features_alternating': ParagraphProductFeaturesAlternating,
    'paragraph--product_features_square_images': ParagraphProductFeaturesSquareImages,
    // Add other paragraph types as needed
};

export interface ParagraphProps {

    paragraph: DrupalParagraph;
}

// export function Paragraph({ paragraph }: ParagraphProps) {
//     if (!paragraph.length) {
//         return null;
//     }
//     let result = []

//     for (let i in paragraph) {
//         const paragraphType = paragraph[i]
//         const Component = paragraphTypes[paragraphType.type];
//         result.push(<Component key={paragraphType.type + i} paragraphType={paragraphType} />)
//     }
//     return <>
//         {result}
//     </>
// }


export function Paragraph({ paragraph }: ParagraphProps) {
    const Component = paragraphTypes[paragraph.type];
    if (!Component) {
        console.warn(`No component found for paragraph type ${paragraph.type}`);
        return null;
    }
    return <Component key={paragraph.id} paragraphType={paragraph} />;
}
