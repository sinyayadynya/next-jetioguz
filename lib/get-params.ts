import { DrupalJsonApiParams } from 'drupal-jsonapi-params';

// A helper function to build apiParams for a resource type.
export function getParams(type: string): DrupalJsonApiParams {
    const apiParams = new DrupalJsonApiParams().addFilter(
        'field_site.meta.drupal_internal__target_id',
        process.env.DRUPAL_SITE_ID
    );

    if (type === 'node--page') {
        return apiParams
            .addFilter('status', '1')
            .addFields('node--page', ['title', 'body', 'status']);
    }

    if (type === 'node--article--card') {
        return apiParams
            .addFilter('status', '1')
            .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
            .addInclude([
                'field_media_image.field_media_image',
                'uid.user_picture',
                'field_blog_media_header',
            ])
            .addFields('node--article', [
                'title',
                'path',
                'field_media_image',
                'created',
                'body',
            ])
            .addFields('media--image', ['field_media_image'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta']);
    }

    if (type === 'node--article') {
        return apiParams
            .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
            .addInclude([
                'field_paragraphs',
                'field_paragraphs.field_media_image.field_media_image',
                'field_paragraphs.field_media_video',
                'field_media_image.field_media_image',
                'uid.user_picture',
                'field_country',
            ])
            .addFields('node--article', [
                'title',
                'status',
                'path',
                'field_media_image',
                'body',
                'created',
                'uid',
                'field_country',
                'field_paragraphs',
                'paragraph--image_full_width',
            ])
            .addFields('paragraph--image_full_width', ['field_media_image'])
            .addFields('paragraph--video', ['field_media_video'])
            .addFields('media--image', ['field_media_image', 'uri'])
            .addFields('media--remote_video', [
                'field_media_video',
                'field_media_oembed_video',
                'uri',
                'resourceIdObjMeta',
            ]);
    }

    if (type === 'node--activities') {
        return apiParams
            .addInclude([
                'field_sections.field_media_image',
                'field_sections.field_media_image.field_media_image',
                'field_sections.field_features',
                'field_sections.field_features.field_media_image',
                'field_sections.field_features.field_media_image.field_media_image',
                'field_sections.field_media_images',
                'field_sections.field_media_images.field_media_image',
            ])
            .addFilter('status', '1')
            .addFields('node--activities', [
                'title',
                'status',
                'path',
                'field_sections',
                'field_heading',
                'field_tagline',
                'field_link',
                'field_media_image',
            ])
            .addFields('paragraph--promo_section_bg_image_large', [
                'field_headline',
                'field_tagline',
                'field_link',
                'field_media_image',
                'field_media_image.field_media_image',
            ])
            .addFields('paragraph--promo_section_background_image', [
                'field_headline',
                'field_tagline',
                'field_link',
                'field_media_image',
                'field_media_image.field_media_image',
            ])
            .addFields('paragraph--promo_section_full_width_tiles', [
                'field_headline',
                'field_tagline',
                'field_link',
                'field_media_images',
                'field_media_images.field_media_image',
                'field_media_images.field_media_image.uri',
                'field_media_images.field_media_image.resourceIdObjMeta',
            ])
            .addFields('paragraph--product_features_alternating', [
                'field_headline',
                'field_tagline',
                'field_features',
            ])
            .addFields('paragraph--product_features_item', [
                'field_heading',
                'field_tagline',
                'field_media_image',
                'field_media_image.field_media_image',
            ])
            .addFields('paragraph--product_features_square_images', [
                'field_headline',
                'field_tagline',
            ])
            .addFields('paragraph--calendar_section', [
                'field_headline',
                'field_tagline',
            ])
            .addFields('media--image', ['field_media_image', 'uri']);
    }

    if (type === 'node--place--card') {
        return apiParams
            .addFilter('status', '1')
            .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
            .addInclude([
                'field_dmo_area',
                'field_media_image.field_media_image',
            ])
            .addFields('node--place', [
                'title',
                'path',
                'field_dmo_area',
                'field_media_image',
            ])
            .addFields('taxonomy_term--dmo_area', ['name', 'path'])
            .addFields('media--image', ['field_media_image']);
    }

    if (type === 'node--place--teaser') {
        return apiParams
            .addFilter('status', '1')
            .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
            .addInclude([
                'field_place_type',
                'field_dmo_area',
                'field_media_image.field_media_image',
            ])
            .addFields('node--place', [
                'title',
                'body',
                'path',
                'field_place_type',
                'field_dmo_area',
                'field_media_image',
            ])
            .addFields('taxonomy_term--place_types', ['name', 'path'])
            .addFields('taxonomy_term--dmo_area', ['name', 'path'])
            .addFields('media--image', ['field_media_image']);
    }

    if (type === 'node--place') {
        return apiParams
            .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
            .addInclude([
                'field_media_image.field_media_image',
                'field_media_images.field_media_image',
                'field_media_images.field_media_author',
                'field_place_type',
                'field_dmo_area',
            ])
            .addFields('node--place', [
                'title',
                'status',
                'path',
                'body',
                'field_place_type',
                'field_dmo_area',
                'field_place_altitude',
                'field_place_geofield',
                'field_media_image',
                'field_media_images',
            ])
            .addFields('media--image', ['field_media_image'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta'])
            .addFields('taxonomy_term--place_types', ['name', 'path'])
            .addFields('taxonomy_term--dmo_area', ['name', 'path'])
            .addFields('taxonomy_term--media_authors', [
                'name',
                'description',
                'resourceIdObjMeta',
            ]);
    }

    if (type === 'node--planning') {
        return apiParams
            .addInclude([
                'field_sections.field_media_image',
                'field_sections.field_media_image.field_media_image',
                'field_sections.field_features',
                'field_sections.field_stats',
                // 'field_sections.field_features.field_media_image',
                // 'field_sections.field_features.field_media_image.field_media_image',
                // 'field_sections.field_media_images',
                // 'field_sections.field_media_images.field_media_image',
            ])
            .addFilter('status', '1')
            .addFields('node--planning', [
                'title',
                'status',
                'path',
                'field_sections',
            ])
            .addFields('paragraph--promo_section_full_width_tiles', [
                'field_headline',
                'field_tagline',
                'field_cta_button',
            ])
            .addFields('paragraph--feature_section_simple_three_col', [
                'field_label',
                'field_headline',
                'field_tagline',
                'field_features'
            ])
            .addFields('paragraph--hero_image_tiles', [
                'field_headline',
                'field_tagline',
                'field_cta_button',
                'field_cta_link',
            ])
            .addFields('paragraph--stats_section_description', [
                'field_headline',
                'field_tagline',
                'field_text_formatted',
                'field_stats',
            ])
            .addFields('paragraph--image_section', [
                'field_media_image',
            ])
            .addFields('paragraph--feature_section_simple', [
                'field_headline',
                'field_tagline',
                'field_features',
            ])
            .addFields('paragraph--logo_clouds_simple_heading', [
                'field_heading',
            ])
            .addFields('paragraph--team_section_grid_round_images', [
                'field_headline',
                'field_tagline',
            ])
            .addFields('paragraph--hero_offset_image', [
                'field_headline',
                'field_tagline',
                'field_cta_button',
                'field_cta_link',
                'field_media_image',
            ])
            // .addFields('paragraph--contact_section_side_side_grid', [
            //     'field_headline',
            //     'field_tagline',
            // ])
            .addFields('media--image', ['field_media_image', 'uri']);
    }

    if (type === 'product--accommodation') {
        return apiParams
            .addInclude([
                'field_media_image.field_media_image',
                'field_media_images.field_media_image',
                'field_accommodation_type',
                'field_dmo_area',
            ])
            .addFields('product--accommodation', [
                'title',
                'path',
                'body',
                'field_media_image',
                'field_accommodation_type',
                'field_dmo_area',
            ])
            .addFields('taxonomy_term--accommodation_types', ['name', 'path'])
            .addFields('taxonomy_term--dmo_places', ['name', 'path']);
    }

    if (type === 'product--accommodation--card') {
        return apiParams
            .addInclude([
                'field_media_image.field_media_image',
                'field_accommodation_type',
                'field_dmo_area.name',
            ])
            .addFields('product--accommodation', [
                'title',
                'path',
                'field_media_image',
                'field_accommodation_type',
                'field_dmo_area',
            ])
            .addFields('taxonomy_term--accommodation_types', ['name', 'path'])
            .addFields('taxonomy_term--dmo_places', ['name', 'path']);
    }

    if (type === 'block_content--promo_block_overlapping_images') {
        return apiParams
            .addInclude(['field_media_image.field_media_image'])
            .addInclude(['field_overlapping_image_tiles'])
            .addInclude([
                'field_overlapping_image_tiles.field_media_image.field_media_image',
            ])
            .addFields('block_content--promo_block_overlapping_images', [
                'field_title',
                'field_tagline',
                'field_cta_button',
                'field_cta_link',
                'field_media_image',
                'field_overlapping_image_tiles',
            ])
            .addFields('media--image', [
                'field_media_image',
                'field_media_image',
            ])
            .addFields('file--file', ['uri', 'resourceIdObjMeta'])
            .addFields('paragraph--promo_overlapping_image_tile', [
                'field_text_title',
                'field_text_cta',
                'field_link',
                'field_media_image',
            ]);
    }

    if (type === 'block_content--hero_block_offset_image') {
        return apiParams
            .addInclude(['field_media_image.field_media_image'])
            .addFields('block_content--hero_block_offset_image', [
                'field_heading',
                'field_tagline',
                'field_cta_button',
                'field_cta_link',
                'field_media_image',
            ])
            .addFields('media--image', [
                'field_media_image',
                'field_media_image',
            ])
            .addFields('file--file', ['uri', 'resourceIdObjMeta']);
    }

    if (type === 'block_content--feature_block_simple_three_col') {
        return apiParams
            .addInclude(['field_feature_items'])
            .addFields('block_content--feature_block_simple_three_col', [
                'field_label',
                'field_heading',
                'field_tagline',
                'field_feature_items',
            ])
            .addFields('paragraph--feature_item_small_icon', [
                'field_herawicon',
                'field_feature_item_label',
                'field_feature_item_text_plain',
                'field_link',
            ]);
    }

    if (type === 'block_content--banner_block') {
        return apiParams
            .addInclude(['field_media_image.field_media_image'])
            .addFields('block_content--banner_block', [
                'field_title',
                'field_summary',
                'field_content_link',
                'field_media_image',
            ])
            .addFields('media--image', ['field_media_image'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta']);
    }

    if (type === 'block_content--promo_block_fading_testimonials') {
        return apiParams
            .addInclude(['field_media_image.field_media_image'])
            .addInclude(['field_promo_testimonials'])
            .addFields('block_content--promo_block_fading_testimonials', [
                'field_heading',
                'field_tagline',
                'field_cta_button',
                'field_media_image',
                'field_promo_testimonials',
            ])
            .addFields('media--image', ['field_media_image'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta'])
            .addFields('paragraph--promo_testimonial', [
                'field_testimonial_text',
                'field_testimonial_author',
            ]);
    }

    if (type === 'block_content--promo_block_image_tiles') {
        return apiParams
            .addInclude(['field_media_images.field_media_image'])
            .addFields('block_content--promo_block_image_tiles', [
                'field_heading',
                'field_tagline',
                'field_cta_button',
                'field_media_images',
            ])
            .addFields('field_media_images', ['field_media_image'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta']);
    }

    if (type === 'block_content--incentives_block') {
        return apiParams
            .addInclude(['field_incentive_items'])
            .addFields('block_content--incentives_block', [
                'field_incentive_items',
            ])
            .addFields('paragraph--incentive_with_illustration', [
                'field_text_title',
                'field_text_tagline',
                'field_link',
                'field_feature_icon',
            ]);
    }
}
