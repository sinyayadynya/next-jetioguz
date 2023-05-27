import Image from "next/legacy/image";
import Link from 'next/link';
import { DrupalNode } from 'next-drupal';
import { DrupalParagraph } from 'next-drupal';

import { useTranslation } from 'next-i18next';

import { absoluteURL, formatDate } from 'lib/utils';
import { FormattedText } from 'components/formatted-text';
import { Breadcrumbs } from 'components/breadcrumbs';
import { NodeArticleCard } from 'components/node--article--card';
import { Paragraph } from './paragraph';

export interface NodeArticleProps {
    node: DrupalNode;
    additionalContent: {
        featuredArticles: DrupalNode[];
    };
}

export function NodeArticle({ node, additionalContent }: NodeArticleProps) {
    const { t } = useTranslation();
    const field_paragraphs: DrupalParagraph[] = node.field_paragraphs

    return (
        <div className="container">
            <Breadcrumbs
                items={[
                    {
                        title: t('articles'),
                        url: '/articles',
                    },
                    {
                        title: node.title,
                    },
                ]}
            />

            <article className="bg-white py-32 px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <p className="text-base font-semibold leading-7 text-primary-600">
                        Blog
                    </p>
                    <h1 className="mt-2 text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {node.title}
                    </h1>
                    <div className="flex items-center mt-2 space-x-2 text-sm">
                        {node.uid?.display_name ? (
                            <span>
                                {t('by')} {node.uid.display_name}
                            </span>
                        ) : null}
                        <svg
                            className="w-[6px] h-[6px] opacity-60 text-green-700"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="12"
                                fill="currentColor"
                            />
                        </svg>
                        {node.created && (
                            <span className="text-gray-500">
                                {formatDate(node.created)}
                            </span>
                        )}
                    </div>

                    {node.field_media_image && (
                        <figure className="my-8">
                            <Image
                                src={absoluteURL(
                                    node.field_media_image.field_media_image.uri
                                        .url
                                )}
                                alt={
                                    node.field_media_image.field_media_image
                                        .resourceIdObjMeta.alt
                                }
                                width={785}
                                height={525}
                                layout="responsive"
                                objectFit="cover"
                                className="aspect-video rounded-xl bg-gray-50 object-cover"
                            />
                        </figure>
                    )}

                    <div className="mt-10">
                        {node.body && (
                            <div className="text-xl leading-8">
                                <FormattedText text={node.body.processed} />
                            </div>
                        )}
                        <div className='mt-6'>
                            <Paragraph paragraph={field_paragraphs} />
                        </div>
                    </div>
                </div>

                <section className="bg-white pt-24 sm:pt-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {t('more-featured-articles')}
                            </h2>
                            <p className="mt-2 text-lg leading-8 text-gray-600">
                                Read the last news about Jeti Oguz.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {additionalContent.featuredArticles.map(
                                (nodeArticles, index) => (
                                    <NodeArticleCard
                                        key={node.id + index}
                                        nodeArticles={nodeArticles}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );

    // return node.field_paragraphs.map((paragraph) => {
    //     return <Paragraph key={paragraph.id} paragraph={paragraph} />
    // });
}
