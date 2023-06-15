import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';

import { drupal } from 'lib/drupal';
import { getGlobalElements } from 'lib/get-global-elements';
import { getParams } from 'lib/get-params';
import { Layout, LayoutProps } from 'components/layout';
import { NodeArticlePost } from 'components/node--article--post';
import { PageHeader } from 'components/page-header';

interface ArticlePageProps extends LayoutProps {
    articles: DrupalNode[];
}

export default function ArticlesPage({
    articles,
}: //   menus,
//   blocks,
ArticlePageProps) {
    const { t } = useTranslation();

    return (
        <Layout
            //   menus={menus}
            //   blocks={blocks}
            meta={{
                title: t('articles'),
            }}
        >
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {t('articles')}
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Read the last news about Jeti Oguz.
                        </p>
                        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                            {articles.map((article) => (
                                <NodeArticlePost
                                    key={article.id}
                                    nodeArticles={article}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps(context: GetStaticPropsContext) {
    // Fetch all published articles sorted by date.
    const articles = await drupal.getResourceCollectionFromContext<
        DrupalNode[]
    >('node--article', context, {
        params: getParams('node--article')
            .addFilter('field_site.meta.drupal_internal__target_id', 'jetioguz')
            .addSort('created', 'DESC')
            .getQueryObject(),
    });

    return {
        props: {
            ...(await getGlobalElements(context)),
            articles,
        },
    };
}
