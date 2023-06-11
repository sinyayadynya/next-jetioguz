import { DrupalParagraph } from 'next-drupal';
import { ParagraphBlogSection } from 'components/paragraph--blog-section';
import { ParagraphImageFullWidth } from './paragraph--image_full_width';
import { ParagraphVideo } from './paragraph--video';
import { ParagraphPromoBgImageLargeContent } from 'components/paragraph--promo_section_bg_image_large';
import { ParagraphPromoBackgroundImage } from 'components/paragraph--promo_section_background_image';
import { ParagraphPromoFullWidthTiles } from 'components/paragraph--promo_section_full_width_tiles';
import { ParagraphProductFeaturesAlternating } from 'components/paragraph--product_features_alternating';
import { ParagraphProductFeaturesSquareImages } from 'components/paragraph--product_features_square_images';
import { ParagraphCalendarSection } from 'components/paragraph--calendar_section';
import { ParagraphPromoOffersSplitImage } from 'components/paragraph--promo_section_offers_split_image';
import { ParagraphHeroImageTiles } from 'components/paragraph--hero_image_tiles';
import { ParagraphImageSection } from 'components/paragraph--image_section';
import { ParagraphHeroOffsetImage } from 'components/paragraph--hero_offset_image';
import { ParagraphFeatureSimpleThreeCol } from  'components/paragraph--feature_section_simple_three_col'
import { ParagraphStatsDescription } from 'components/paragraph--stats_section_description'
import { ParagraphFeatureSimple } from 'components/paragraph--feature_section_simple'
import { ParagraphLogoCloudSimpleHeading } from 'components/paragraph--logo_clouds_simple_heading'
import { ParagraphTeamGridLargeRoundImages } from 'components/paragraph--team_section_grid_round_images'
import { ParagraphContactSideBySideGrid } from 'components/paragraph--contact_section_side_side_grid'

const paragraphTypes = {
    'paragraph--blog_section': ParagraphBlogSection,
    'paragraph--image_full_width': ParagraphImageFullWidth,
    'paragraph--video': ParagraphVideo,
    'paragraph--promo_section_bg_image_large': ParagraphPromoBgImageLargeContent,
    'paragraph--promo_section_background_image': ParagraphPromoBackgroundImage,
    'paragraph--promo_section_full_width_tiles': ParagraphPromoFullWidthTiles,
    'paragraph--product_features_alternating': ParagraphProductFeaturesAlternating,
    'paragraph--product_features_square_images': ParagraphProductFeaturesSquareImages,
    'paragraph--calendar_section': ParagraphCalendarSection,
    'paragraph--promo_section_offers_split_image': ParagraphPromoOffersSplitImage,
    'paragraph--hero_image_tiles': ParagraphHeroImageTiles,
    'paragraph--image_section': ParagraphImageSection,
    'paragraph--hero_offset_image': ParagraphHeroOffsetImage,
    'paragraph--feature_section_simple_three_col': ParagraphFeatureSimpleThreeCol,
    'paragraph--stats_section_description': ParagraphStatsDescription,
    'paragraph--feature_section_simple': ParagraphFeatureSimple,
    'paragraph--logo_clouds_simple_heading': ParagraphLogoCloudSimpleHeading,
    'paragraph--team_section_grid_round_images': ParagraphTeamGridLargeRoundImages,
    'paragraph--contact_section_side_side_grid': ParagraphContactSideBySideGrid,
};

export interface ParagraphProps {

    paragraph: DrupalParagraph;
}

export function Paragraph({ paragraph }: ParagraphProps) {
    if (!Array.isArray(paragraph)) {
        const Component = paragraphTypes[paragraph.type];
        if (!Component) {
            console.warn(`No component found for paragraph type ${paragraph.type}`);
            return null;
        }
        return <Component key={paragraph.id} paragraphType={paragraph} />;
    } else {
        return (
            <>
                {paragraph.map((singleParagraph, index) => {
                    const Component = paragraphTypes[singleParagraph.type];
                    if (!Component) {
                        console.warn(`No component found for paragraph type ${singleParagraph.type}`);
                        return null;
                    }
                    return <Component key={singleParagraph.id || index} paragraphType={singleParagraph} />;
                })}
            </>
        );
    }
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


// export function Paragraph({ paragraph }: ParagraphProps) {
//     const Component = paragraphTypes[paragraph.type];
//     if (!Component) {
//         console.warn(`No component found for paragraph type ${paragraph.type}`);
//         return null;
//     }
//     return <Component key={paragraph.id} paragraphType={paragraph} />;
// }
