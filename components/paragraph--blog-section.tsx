import { ParagraphProps } from "components/paragraph"
import { FormattedText } from "components/formatted-text"
import { Section } from "components/section"

export function ParagraphBlogSection({ paragraph, ...props }: ParagraphProps) {
  return (
    <Section
      {...props}
    >
      <div key={paragraph.id} className="prose max-w-sm lg:max-w-none">
                <h3 className="text-2xl font-bold">
                    {paragraph.field_section_title}
                </h3>
                {paragraph.field_section_text?.processed && (
                  <FormattedText
                    processed={paragraph.field_section_text?.processed}
                    className="pt-2"
                  />
                )}
        </div>
    </Section>
  )
}
