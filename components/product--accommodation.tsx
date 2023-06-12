import { DrupalNode } from 'next-drupal';
import { useTranslation } from 'next-i18next';

// import { Breadcrumbs } from "components/breadcrumbs"
import { MediaImage } from 'components/media--image';
import { FormattedText } from './formatted-text';

interface ProductAccommodationProps {
    product: DrupalNode; // Change the "node" prop to a "product" prop
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function ProductAccommodation({
    product,
}: ProductAccommodationProps) {
    const { t } = useTranslation();

    return (
        <div className="bg-white">

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                {/* Product details */}
                <div className="lg:max-w-lg lg:self-end">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="flex items-center space-x-2">
                            {product.breadcrumbs.map(
                                (breadcrumb, breadcrumbIdx) => (
                                    <li key={breadcrumb.id}>
                                        <div className="flex items-center text-sm">
                                            <a
                                                href={breadcrumb.href}
                                                className="font-medium text-gray-500 hover:text-gray-900"
                                            >
                                                {breadcrumb.name}
                                            </a>
                                            {breadcrumbIdx !==
                                            product.breadcrumbs.length - 1 ? (
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                                                >
                                                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                                </svg>
                                            ) : null}
                                        </div>
                                    </li>
                                )
                            )}
                        </ol>
                    </nav>

                    <div className="mt-4">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {product.title}
                        </h1>
                    </div>

                    <div aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">
                            Product information
                        </h2>

                        <div className="flex items-center">
                            <p className="text-lg text-gray-900 sm:text-xl">
                                {product.price}
                            </p>
                        </div>

                        <div className="mt-4 space-y-6">
                            {/* <p className="text-base text-gray-500">{product.description}</p> */}
                            <div className="text-base text-gray-500">
                                {product.body?.processed && (
                                    <FormattedText
                                        text={product.body.processed}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product image */}
                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                        {/* <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center" /> */}

                        <MediaImage
                            media={product.field_media_image}
                            width={576}
                            height={800}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Product form */}
                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <div aria-labelledby="options-heading">
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                Book now
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* More images, as in components/node--place.tsx line 148 */}

            {/* Related accommodations block  */}

        </div>
    );
}
