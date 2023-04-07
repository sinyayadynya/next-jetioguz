import { FormattedText } from "components/formatted-text"
import { Section } from "components/section"
import { DrupalParagraph } from "next-drupal"

export interface ParagraphProps {
  paragraphType: DrupalParagraph;
}

export function ParagraphBlogSection({ paragraphType }: ParagraphProps) {


  return (
    <Section

    >
      <div key={paragraphType.id} className="prose max-w-sm lg:max-w-none">
        <h3 className="text-2xl font-bold">
          {paragraphType.field_section_title}
        </h3>
        {paragraphType.field_section_text?.processed && (
          <FormattedText
            text={paragraphType.field_section_text?.processed}
          />
        )}
      </div>
    </Section>
  )
}
