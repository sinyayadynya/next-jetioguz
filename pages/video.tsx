import { getChannelInfo } from 'lib/youtube';
import Image from 'next/image';
import Link from 'next/link';
import { getGlobalElements } from "lib/get-global-elements"
import { useTranslation } from 'next-i18next';
import { Layout } from 'components/layout';


export default function Home({ channelInfos }) {
    const { t } = useTranslation()

    return (
        <Layout
            meta={{
                title: t('videos'),
            }}
        >
            <div className="mt-16 flex flex-1 items-stretch overflow-hidden">
                <main className="flex-1 overflow-y-auto">
                    <div>
                        <div className="mx-auto max-w-7xl px-4 pt-8 pb-4 sm:px-6 lg:px-8">
                            <h1 className="flex-1 text-2xl font-heading font-bold text-gray-900">
                                {t('video')}
                                <span className="sr-only">{t('video')}</span>
                            </h1>
                        </div>


                        <div>
                            <div className="mx-auto max-w-6xl p-4 lg:p-8">
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {channelInfos.map((channelInfo) => {
                                        const {
                                            id,
                                            snippet: { title, thumbnails },
                                        } = channelInfo.items[0];

                                        return (
                                            <Link key={id} href={`/video/${id}`}>
                                                <Image
                                                    src={thumbnails.medium?.url}
                                                    alt=""
                                                    height={thumbnails.medium?.height}
                                                    width={thumbnails.medium?.width}
                                                />
                                                <div className="line-clamp-2 text-sm font-medium mt-2">
                                                    {title}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>




    );
}

export async function getServerSideProps(context) {
    const channels = [
        'UCU26XWXEWGmQLBWUF7e-0tA', // Destination Jeti Oguz
    ];

    const channelInfos = await Promise.all(
        channels.map((channelId) => getChannelInfo(channelId))
    );

    return {
        props: {
            ...(await getGlobalElements(context)),
            channelInfos,
        },
    };
}
