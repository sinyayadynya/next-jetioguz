import Image from 'next/image';
import Link from 'next/link';
import { DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';

import { absoluteURL, formatDate } from 'lib/utils';
import { FormattedText } from 'components/formatted-text';
import { Breadcrumbs } from 'components/breadcrumbs';
import { Paragraph } from "components/paragraph";
import { NodeArticleCard } from 'components/node--article--card';

export interface NodeArticleProps {
    node: DrupalNode;
    additionalContent: {
        featuredArticles: DrupalNode[];
    };
}

export function NodeArticle({ node, additionalContent }: NodeArticleProps) {
    const { t } = useTranslation();

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
                    <h1 className="mt-2 text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">{node.title}</h1>
                    <div className="flex items-center my-4 space-x-2 text-sm">
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
                        <span className="text-gray-500">
                            {formatDate(node.created)}
                        </span>
                    </div>
                    {/* {node.field_country?.length ? (
                        <div className="flex mb-6 space-x-2">
                        <span className="font-semibold">{t("tags")}: </span>
                        {node.field_country.map((country) => (
                            <Link key={country.id} href={country.path.alias} passHref>
                            <a className="underline transition-colors text-green-700 hover:text-primary-500 hover:bg-gray-50">
                                {country.name}
                            </a>
                            </Link>
                        ))}
                        </div>
                    ) : null} */}
                    {node.field_media_image && (
                        <figure className="mb-10">
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

                    {node.body && (
                        <div className="mt-6 text-xl leading-8">
                            <FormattedText text={node.body.processed} />
                        </div>
                    )}

                </div>

                <section className="bg-white pt-24 sm:pt-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {t('more-featured-articles')}
                            </h2>
                            <p className="mt-2 text-lg leading-8 text-gray-600">
                                Read the last news about Jeti-Oguz.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {additionalContent.featuredArticles.map((node) => (
                                <NodeArticleCard key={node.id} node={node} />
                            ))}
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
