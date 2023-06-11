import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"

// import { Breadcrumbs } from "components/breadcrumbs"
import { MediaImage } from "components/media--image"
import { FormattedText } from "./formatted-text"

interface ProductAccommodationProps {
  product: DrupalNode // Change the "node" prop to a "product" prop
}

export function ProductAccommodation({ product }: ProductAccommodationProps) {
  const { t } = useTranslation()

  return (
    <div className="container">
      {/* <Breadcrumbs
        items={[
          {
            title: product.title,
          },
        ]}
      /> */}

      <article className="bg-white border text-grey-700 p-9 border-gray-50">
        <MediaImage
            media={product.field_media_image}
            width={576}
            height={800}
            className="h-full w-full object-cover object-center"
        />
        <h1 className="text-2xl font-heading leading-tight lg:text-4xl">
          {product.title}
        </h1>
        <div className="mt-4 prose prose-a:text-green-700 max-w-none text-text">
          {product.body?.processed && <FormattedText text={product.body.processed} />}
        </div>
      </article>
    </div>
  )
}
