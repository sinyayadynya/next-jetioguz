import { getChannelInfo } from 'lib/youtube';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';


export default function Home({ channelInfos }) {
    const { t } = useTranslation()

    return (
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
    );
}

export async function getServerSideProps() {
    const channels = [
        'UCU26XWXEWGmQLBWUF7e-0tA', // Destination Jeti Oguz
    ];

    const channelInfos = await Promise.all(
        channels.map((channelId) => getChannelInfo(channelId))
    );

    return {
        props: {
            channelInfos,
        },
    };
}
