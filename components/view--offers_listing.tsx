import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from 'components/section';

export function ViewOffersListing({ offers, ...props }) {
    if (!offers) return null;
    return (
        <Section
            {...props}
            className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8"
        >
            {offers.map((offer, index) => (
                <div key={index} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <Image
                            src={offer.image}
                            alt={offer.name}
                            width={688}
                            height={930}
                            className="object-cover object-center"
                        />
                    </div>
                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-900">
                            <Link href={offer.path}>
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0"
                                />
                                {offer.name}
                            </Link>
                        </h3>
                        <p className="mt-2 flex justify-between">
                            <span className='text-sm text-gray-500'>
                                Duration: {offer.duration}
                            </span>
                            <span className='text-sm text-gray-700'>
                                From {offer.from}
                            </span>
                        </p>
                    </div>
                </div>
            ))}
        </Section>
    );
}
