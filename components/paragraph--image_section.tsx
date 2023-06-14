import { FormattedText } from "components/formatted-text"
import { Section } from "components/section"
import { drupal } from "lib/drupal";
import { absoluteURL } from "lib/utils";
import { DrupalParagraph } from "next-drupal"
import Image from "next/image";
import { MediaImage } from 'components/media--image';

export interface ParagraphProps {
  paragraphType: DrupalParagraph;
}

export function ParagraphImageSection({ paragraphType }: ParagraphProps) {

  return (
    <Section>
      <div key={paragraphType.id} className="xl:mx-auto xl:max-w-7xl xl:px-8">
        <MediaImage
            media={paragraphType.field_media_image}
            width={785}
            height={525}
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
      </div>
    </Section>
  )
}
