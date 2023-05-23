import { DrupalBlock } from 'next-drupal';
import Link from 'next/link';
import { MediaImage } from './media--image';

interface BlockPromoImageTilesProps {
    block: DrupalBlock;
}

export function BlockPromoImageTiles({ block }: BlockPromoImageTilesProps) {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Hidden gems of Jeti Oguz's villages
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Step into the authentic charm and character of Jeti Oguz's traditional villages and experience the unspoiled beauty of rural Kyrgyzstan.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src="https://nomadsland.travel/sites/default/files/styles/tile/public/2023-05/adobestock_359613097.jpeg.webp?itok=IEIVwLZr"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://nomadsland.travel/sites/default/files/styles/tile/public/2023-05/adobestock_533125934.jpg.webp?itok=WlbSIvGN"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://nomadsland.travel/sites/default/files/styles/tile/public/2023-05/adobestock_539460719.jpg.webp?itok=dKcg8l8z"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://nomadsland.travel/sites/default/files/styles/tile/public/2023-05/adobestock_138335195.jpg.webp?itok=Ddo_GxPA"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://nomadsland.travel/sites/default/files/styles/tile/public/2023-05/adobestock_505829442.jpg.webp?itok=OKlwr87R"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://nomadsland.travel/sites/default/files/styles/tile/public/2023-05/adobestock_241991189.jpg.webp?itok=9sc6peOC"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://nomadsland.travel/sites/default/files/styles/tile/public/2023-05/adobestock_100745403.jpeg.webp?itok=cCMDEOec"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="/booking" className="inline-block rounded-md border border-transparent bg-primary-600 px-8 py-3 text-center font-medium text-white hover:bg-primary-700">
                                Book your adventure
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
