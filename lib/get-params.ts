import { DrupalJsonApiParams } from 'drupal-jsonapi-params';

// A helper function to build params for a resource type.
export function getParams(
    name: string,
    mode: string = null
): DrupalJsonApiParams {
    const params = new DrupalJsonApiParams();

    name = mode ? `${name}--${mode}` : name;

    if (name === 'node--page') {
        return params
            .addFilter('status', '1')
            .addFields('node--page', ['title', 'body', 'status']);
    }

    if (name === 'node--article--card') {
        return params
            .addFilter('status', '1')
            .addInclude([
                'field_media_image.field_media_image',
                'uid.user_picture',
            ])
            .addFields('node--article', [
                'title',
                'path',
                'field_media_image',
                'created',
            ])
            .addFields('media--image', ['field_media_image'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta']);
    }

    if (name === 'node--article') {
        return params
            .addInclude([
                'field_paragraphs',
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
            ])
            .addFields('user--user', ['display_name', 'user_picture'])
            .addFields('media--image', ['field_media_image'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta'])
            .addFields('taxonomy_term--countries', ['name', 'path']);
    }

    if (name === 'node--place--card') {
        return params
            .addFilter('status', '1')
            .addInclude([
                'field_media_images.field_media_image',
                'uid.user_picture',
            ])
            .addFields('node--place', [
                'title',
                'path',
                'field_media_images',
                'field_difficulty',
            ])
            .addFields('media--images', ['field_media_images'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta']);
    }

    if (name === 'node--place') {
        return params
            .addInclude([
                'field_media_images.field_media_image',
                'field_content_category',
                'field_area',
            ])
            .addFields('node--place', [
                'title',
                'status',
                'path',
                'field_content_category',
                'field_area',
                'field_place_altitude',
                'body',
                'field_media_images',
            ])
            .addFields('media--images', ['field_media_images'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta'])
            .addFields('taxonomy_term--categories', ['name', 'path'])
            .addFields('taxonomy_term--places', ['name', 'path']);
    }

    if (name === 'block_content--promo_block_overlapping_images') {
        return params
            .addInclude(['field_media_image.field_media_image'])
            .addFields('block_content--banner_block', [
                'field_title',
                'field_content_link',
                'field_media_image',
            ])
            .addFields('media--image', ['field_media_image'])
            .addFields('file--file', ['uri', 'resourceIdObjMeta']);
    }

    if (name === 'block_content--banner_block') {
        return params
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

    if (name === 'block_content--promo_block') {
        return params
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

    if (name === 'block_content--incentives_block') {
        return params;
        //   .addFields("block_content--incentives_block", [
        //     "field_incentive_items",
        //   ])
    }

    if (name === 'block_content--disclaimer_block') {
        return params.addFields('block_content--disclaimer_block', [
            'field_copyright',
            'field_disclaimer',
        ]);
    }

    if (name === 'menu_link_content--menu_link_content') {
        return params.addFields('menu_link_content--menu_link_content', [
            'title,url',
        ]);
    }

    if (name === 'taxonomy_term--tags') {
        return params.addFields('taxonomy_term--tags', ['name', 'path']);
    }

    if (name === 'taxonomy_term--categories') {
        return params.addFields('taxonomy_term--categories', ['name', 'path']);
    }

    if (name === 'taxonomy_term--places') {
        return params.addFields('taxonomy_term--places', ['name', 'path']);
    }

    if (name === 'taxonomy_term--activities') {
        return params.addFields('taxonomy_term--activities', ['name', 'path']);
    }
}
