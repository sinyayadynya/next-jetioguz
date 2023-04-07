import { FormattedText } from "components/formatted-text"
import { Section } from "components/section"
import { DrupalParagraph } from "next-drupal"
import ReactPlayer from "react-player";

export interface ParagraphProps {
  paragraphType: DrupalParagraph;
}

export function ParagraphVideo({ paragraphType }: ParagraphProps) {

  const url = paragraphType.field_media_video.field_media_oembed_video

  return (
    <Section>
      <div key={paragraphType.id} className="prose max-w-sm lg:max-w-none">
        <ReactPlayer
          url={url}
          className='react-player'
          width='100%'
          height={400}
        />
      </div>
    </Section>
  )
}
