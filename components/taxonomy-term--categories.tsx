import { DrupalNode, DrupalTaxonomyTerm } from "next-drupal"
import { useTranslation } from "next-i18next"

import { Breadcrumbs } from "components/breadcrumbs"
import { PageHeader } from "components/page-header"
import { NodePlaceTeaser } from "./node--place--teaser"

export interface TaxonomyTermContentCategoryProps {
  term: DrupalTaxonomyTerm
  additionalContent: {
    termContent: DrupalNode[]
  }
}

export function TaxonomyTermContentCategory({
  term,
  additionalContent,
}: TaxonomyTermContentCategoryProps) {
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
        {additionalContent?.termContent.map((place) => (
          <NodePlaceTeaser key={place.id} node={place} />
        ))}
      </div>
    </div>
  )
}
