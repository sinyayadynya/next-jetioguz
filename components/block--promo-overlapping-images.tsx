import { DrupalBlock } from "next-drupal"
import Link from "next/link"
import { MediaImage } from "./media--image"

interface BlockPromoOverlappingImagesProps {
  block: DrupalBlock
}

const collections = [
    {
      name: "Plateau",
      href: '#',
      imageSrc: 'https://nomadsland.travel/sites/default/files/2023-03/siuttu-bulak-18.jpg',
      imageAlt: 'Siuttu-Bulak',
    },
    {
      name: "Valleys",
      href: '#',
      imageSrc: 'https://nomadsland.travel/sites/default/files/media/image/img_5548.jpg',
      imageAlt: 'Horse Riding above Jeti Oguz.',
    },
    {
      name: 'Lakes',
      href: '#',
      imageSrc: 'https://nomadsland.travel/sites/default/files/2023-03/at-djailoo-lake-jeti-oguz-valley-3.jpg',
      imageAlt: 'One of the lakes in the At-Djailoo Gorge, a tributary of the Jeti Oguz River south of Lake Issyk Kul.',
    },
  ]

  export function BlockPromoOverlappingImages({ block }: BlockPromoOverlappingImagesProps) {
    return (
      <div className="relative bg-white">
        {/* Background image and overlap */}
        <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
                <MediaImage media={block.field_media_image} priority className="[&>*]:h-full [&>*]:w-full [&>*]:object-cover [&>*]:object-center" />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
          {/* Background image and overlap */}
          <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <MediaImage media={block.field_media_image} priority className="[&>*]:h-full [&>*]:w-full [&>*]:object-cover [&>*]:object-center" />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="h-48 w-full bg-white" />
          </div>
          <div className="relative py-32">
            <h1 className="text-4xl font-serif font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                {block.field_title}
            </h1>
            <div className="mt-4 sm:mt-6">
              {block.field_content_link && (
                (<Link
                  href={block.field_content_link.uri.replace("internal:", "")}
                  passHref
                  className="inline-block rounded-md border border-transparent bg-primary-600 py-3 px-8 font-medium text-white hover:bg-primary-700">

                  {block.field_content_link.title}

                </Link>)
                )}
            </div>
          </div>
        </div>

        <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
          <h2 id="collection-heading" className="sr-only">
            Collections
          </h2>
          <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 sm:px-6 lg:gap-x-8 lg:px-8">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-w-4 sm:aspect-h-5 sm:h-auto"
              >
                <div>
                  <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                      <img
                        src={collection.imageSrc}
                        alt={collection.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                  </div>
                  <div className="absolute inset-0 flex items-end rounded-lg p-6">
                    <div>
                      <p aria-hidden="true" className="text-sm text-white">
                        Discover the
                      </p>
                      <h3 className="mt-1 font-semibold text-white">
                        <a href={collection.href}>
                          <span className="absolute inset-0" />
                          {collection.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
