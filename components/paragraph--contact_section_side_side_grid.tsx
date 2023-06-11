import { DrupalParagraph } from 'next-drupal';
import Link from 'next/link';
import { MediaImage } from './media--image';

export interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

export function ParagraphContactSideBySideGrid({ paragraphType }: ParagraphProps) {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-heading font-bold tracking-tight text-gray-900">
                                Get in touch
                            </h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                You can reach us by email, through our website's contact form or by our social networks.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                Say hello
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                className="font-semibold text-primary-600"
                                                href="mailto:hello@jetioguz.travel"
                                            >
                                                hello@jetioguz.travel
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+996 706 08 21 53</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    Press
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                className="font-semibold text-primary-600"
                                                href="mailto:press@jetioguz.travel"
                                            >
                                                press@jetioguz.travel
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+996 556 54 56 20</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    Join our team
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                className="font-semibold text-primary-600"
                                                href="mailto:careers@jetioguz.travel"
                                            >
                                                careers@jetioguz.travel
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+996 556 54 56 20</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    Collaborate
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                className="font-semibold text-primary-600"
                                                href="mailto:collaborate@jetioguz.travel"
                                            >
                                                collaborate@jetioguz.travel
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+996 556 54 56 20</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-heading font-bold tracking-tight text-gray-900">
                                Locations
                            </h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                We operate offices in both the scenic Jeti-Oguz region and the capital city of Bishkek to serve you.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    Kyzyl Suu
                                </h3>
                                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                    <p>Manas 148</p>
                                    <p>Kyzyl Suu, Issyk Kul</p>
                                </address>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    Bishkek
                                </h3>
                                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                    <p>Nezhinsky lane 27</p>
                                    <p>Bishkek, Chuy</p>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
