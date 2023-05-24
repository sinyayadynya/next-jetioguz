import { DrupalJsonApiParams } from 'drupal-jsonapi-params';

// A helper function to build apiParams for a resource type.
export function getParams(
    resourceType: string
): DrupalJsonApiParams {
    const apiParams = new DrupalJsonApiParams().addFilter(
        "field_site.meta.drupal_internal__target_id",
        process.env.DRUPAL_SITE_ID
    )

    if (resourceType === 'node--page') {
        return apiParams
            .addFilter('status', '1')
            .addFields('node--page', ['title', 'body', 'status']);
    }

    if (resourceType === 'node--article--card') {
        return apiParams
            .addFilter('status', '1')
            .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
            .addInclude([
                'field_media_image.field_media_image',
                'uid.user_picture',
                'field_blog_media_header'
            ])
            .addFields('node--article', [
                'title',
                'path',
                'field_media_image',
                'created',
                'intro'
            ])
            .addFields('media--image', ['field_media_image'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta']);
    }

    if (resourceType === "node--article") {
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
                "paragraph--image_full_width"
            ])
            .addFields('paragraph--image_full_width', [
                'field_media_image',
            ])
            .addFields('paragraph--video', [
                'field_media_video',
            ])
            .addFields('media--image', ['field_media_image', 'uri'])
            .addFields('media--remote_video', ['field_media_video', 'field_media_oembed_video', 'uri', 'resourceIdObjMeta'])
    }

    if (resourceType === 'node--place--card') {
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
            .addFields('media--image', ['field_media_image'])
    }

    if (resourceType === 'node--place--teaser') {
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
            .addFields('media--image', ['field_media_image'])
    }

    if (resourceType === 'node--place') {
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
            .addFields('media--images', ['field_media_images'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta'])
            .addFields('taxonomy_term--place_types', ['name', 'path'])
            .addFields('taxonomy_term--dmo_area', ['name', 'path'])
            .addFields('taxonomy_term--media_authors', ['name', 'description', 'resourceIdObjMeta']);
    }

    if (resourceType === 'product--accommodation') {
        return apiParams
            .addInclude([
                'field_media_image.field_media_image',
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

    if (resourceType === 'product--accommodation--card') {
        return apiParams
            .addInclude([
                'field_media_image.field_media_image',
                'field_accommodation_type',
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

    if (resourceType === 'block_content--promo_block_overlapping_images') {
        return apiParams
            .addInclude(['field_media_image.field_media_image'])
            .addFields('block_content--banner_block', [
                'field_title',
                'field_content_link',
                'field_media_image',
            ])
            .addFields('media--image', ['field_media_image'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta']);
    }

    if (resourceType === 'block_content--banner_block') {
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

    if (resourceType === 'block_content--promo_block') {
        return apiParams
            .addInclude(['field_media_image.field_media_image'])
            .addFields('block_content--promo_block', [
                'field_title',
                'field_summary',
                'field_content_link',
                'field_media_image',
            ])
            .addFields('media--image', ['field_media_image'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta']);
    }

    if (resourceType === 'block_content--incentives_block') {
        return apiParams
            .addInclude([
                'field_incentive_items.field_image.uid',
            ])
            .addFields("block_content--incentives_block", [
                "field_incentive_items",
                'field_media_image',
                'field_image'
            ])
            .addFields("paragraph--incentive_with_illustration", [
                'field_media_image',
                "field_text_title",
                "field_text_formatted",
                'image',
                'link',
                'field_image',
                "field_link"
            ])
            .addFields('field_image', ['field_link', 'image', 'Image', 'field_image'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta'])
    }

    // if (name === 'menu_link_content--menu_link_content') {
    //     return apiParams.addFields('menu_link_content--menu_link_content', [
    //         'title,url',
    //     ]);
    // }

    // if (name === 'taxonomy_term--tags') {
    //     return apiParams.addFields('taxonomy_term--tags', ['name', 'path']);
    // }

    // if (name === 'taxonomy_term--categories') {
    //     return apiParams.addFields('taxonomy_term--categories', ['name', 'path']);
    // }

    // if (name === 'taxonomy_term--place_type') {
    //     return apiParams.addFields('taxonomy_term--places_type', ['name', 'path']);
    // }

    // if (name === 'taxonomy_term--activities') {
    //     return apiParams.addFields('taxonomy_term--activities', ['name', 'path']);
    // }

    // if (name === 'taxonomy_term--accommodation_types') {
    //     return apiParams.addFields('taxonomy_term--accommodation_types', ['name', 'path']);
    // }

    // if (name === 'taxonomy_term--dmo_places') {
    //     return apiParams.addFields('taxonomy_term--dmo_places', ['name', 'path']);
    // }

}
