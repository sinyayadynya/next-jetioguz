import * as React from "react"
import { DrupalNode, DrupalTaxonomyTerm } from "next-drupal"
import { useTranslation } from "next-i18next"

import { Breadcrumbs } from "components/breadcrumbs"
import { PageHeader } from "components/page-header"
import { NodePlaceTeaser } from "components/node--place--teaser"

export interface TaxonomyTermPlaceTypesProps {
  term: DrupalTaxonomyTerm
  additionalContent: {
    termContent: DrupalNode[]
  }
}

export function TaxonomyTermPlaceTypes({
  term,
  additionalContent,
}: TaxonomyTermPlaceTypesProps) {
  const { t } = useTranslation()

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          {
            title: term.name,
          },
        ]}
      />
      <PageHeader heading={term.name} />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {additionalContent?.termContent.map((node) => (
          <React.Fragment key={node.id}>
            {node.type === "node--place" && <NodePlaceTeaser node={node} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
