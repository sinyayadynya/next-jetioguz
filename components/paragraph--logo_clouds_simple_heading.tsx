import { DrupalParagraph } from 'next-drupal';
import Image from 'next/image';
import Link from 'next/link';
import { MediaImage } from './media--image';

export interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

export function ParagraphLogoCloudSimpleHeading({ paragraphType }: ParagraphProps) {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    {paragraphType.field_heading}
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <Link href="https://nomadsland.travel" target="_blank">
                        <Image
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="/logos/158x48/nomadsland-logo-color.svg"
                            alt="Nomad's Land"
                            width={158}
                            height={48}
                        />
                    </Link>
                    <Link href="https://trekkistan.com" target="_blank">
                        <Image
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="/logos/158x48/trekkistan-logo-color.svg"
                            alt="Trekkistan"
                            width={158}
                            height={48}
                        />
                    </Link>
                    <Link href="https://cluster.kg" target="_blank">
                        <Image
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="/logos/158x48/cluster-logo-color.svg"
                            alt="Mountain Cluster"
                            width={158}
                            height={48}
                        />
                    </Link>
                    <Link href="https://teskei-geopark.com" target="_blank">
                        <Image
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src="/logos/158x48/teskei-logo-color.svg"
                            alt="Teskei Geopark"
                            width={158}
                            height={48}
                        />
                    </Link>
                    <Link href="https://snowreport.kg" target="_blank">
                        <Image
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src="/logos/158x48/snowreport-logo-color.svg"
                            alt="SnowReport"
                            width={158}
                            height={48}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
