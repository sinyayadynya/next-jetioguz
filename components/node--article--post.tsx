import Link from 'next/link';
import { DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';

import { MediaImage } from 'components/media--image';
import { formatDate } from 'lib/utils';
import { FormattedText } from 'components/formatted-text';

interface NodeArticlePostProps {
    nodeArticles: DrupalNode;
}

export function NodeArticlePost({
    nodeArticles,
    ...props
}: NodeArticlePostProps) {
    const { t } = useTranslation();

    return (
        <article
            className="relative isolate flex flex-col gap-8 lg:flex-row"
            {...props}
        >
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <MediaImage
                    media={nodeArticles.field_media_image}
                    fill
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />

                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>

            <div>
                <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">
                        {formatDate(nodeArticles.created)}
                    </span>
                    {/* <a
                            href={post.category.href}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                            {post.category.title}
                        </a> */}
                </div>
                <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={nodeArticles.path.alias}>
                            <span className="absolute inset-0" />
                            {nodeArticles.title}
                        </Link>
                    </h3>
                    {nodeArticles.body && (
                        <div className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                            <FormattedText text={nodeArticles.body.processed} />
                        </div>
                    )}
                </div>

                {nodeArticles.uid?.display_name ? (
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                        <div className="relative flex items-center gap-x-4">
                            {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    {/* <a href={post.author.href}>
                                <span className="absolute inset-0" /> */}
                                    {nodeArticles.uid.display_name}
                                    {/* </a> */}
                                </p>
                                {/* <p className="text-gray-600">{post.author.role}</p> */}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </article>
    );
}
