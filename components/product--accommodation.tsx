import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"

// import { Breadcrumbs } from "components/breadcrumbs"
import { MediaImage } from "components/media--image"
import { FormattedText } from "./formatted-text"

interface NodePageProps {
  node: DrupalNode
}

export function ProductAccommodation({ node }: NodePageProps) {
  const { t } = useTranslation()

  return (
    <div className="container">
      {/* <Breadcrumbs
        items={[
          {
            title: node.title,
          },
        ]}
      /> */}

      <article className="bg-white border text-grey-700 p-9 border-gray-50">
        <MediaImage
            media={node.field_media_image}
            width={576}
            height={800}
            layout="responsive"
            objectFit="cover"
            className="h-full w-full object-cover object-center"
        />
        <h1 className="font-serif text-2xl leading-tight lg:text-4xl">
          {node.title}
        </h1>
        <div className="mt-4 prose prose-a:text-green-700 max-w-none text-text">
          {node.body?.processed && <FormattedText text={node.body.processed} />}
        </div>
      </article>
    </div>
  )
}
