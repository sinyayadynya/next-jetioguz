import { DrupalBlock } from 'next-drupal';
import Link from 'next/link';
import { MediaImage } from './media--image';

interface BlockPromoBgImageLargeContentProps {
    block: DrupalBlock;
}

export function BlockPromoBgImageLargeContent({ block }: BlockPromoBgImageLargeContentProps) {
    return (
        <div className="bg-white">
            <div className="relative bg-gray-900">
                {/* Decorative image and overlay */}
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                    <img
                        src="https://nomadsland.travel/sites/default/files/styles/promo_large/public/2023-05/adobestock_241991189.jpg.webp?itok=QpA-D3Jw"
                        alt=""
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-30" />

                <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
                    <h1 className="text-4xl font-heading font-bold tracking-tight text-white lg:text-6xl">
                        Sport & Leisure
                    </h1>
                    <p className="mt-4 text-xl text-white">
                        Step into the authentic charm and character of Jeti-Oguz's traditional villages and experience the unspoiled beauty of rural Kyrgyzstan.
                    </p>
                    <a
                        href="#"
                        className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                        Book your adventure now
                    </a>
                </div>
            </div>
        </div>
    )
}
