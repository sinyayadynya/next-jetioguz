import { DrupalNode } from "next-drupal"

import { Breadcrumbs } from "components/breadcrumbs"
import { useTranslation } from "next-i18next"
import { FormattedText } from "./formatted-text"

interface NodeSimplePageProps {
  node: DrupalNode
}

export function NodeSimplePage({ node }: NodeSimplePageProps) {
  const { t } = useTranslation()

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          {
            title: node.title,
          },
        ]}
      />
      <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="font-heading text-2xl leading-tight lg:text-4xl">
          {node.title}
        </h1>
        <div className="mt-4 prose prose-a:text-green-700 max-w-none text-text">
          {node.body?.processed && <FormattedText text={node.body.processed} />}
        </div>
      </div>
      </div>
    </div>
  )
}
