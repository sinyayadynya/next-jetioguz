import { FormattedText } from "components/formatted-text"
import { Section } from "components/section"
import { drupal } from "lib/drupal";
import { absoluteURL } from "lib/utils";
import { DrupalParagraph } from "next-drupal"
import Image from "next/legacy/image";

export interface ParagraphProps {
  paragraphType: DrupalParagraph;
}

export function ParagraphImageFullWidth({ paragraphType }: ParagraphProps) {

  const imageUrl = paragraphType.field_media_image.field_media_image.uri.url

  return (
    <Section>
      <div key={paragraphType.id} className="prose max-w-sm lg:max-w-none">
        <Image
          src={absoluteURL(imageUrl)}
          alt={
            paragraphType.field_media_image.field_media_image
              .resourceIdObjMeta.alt
          }
          width={785}
          height={525}
          layout="responsive"
          objectFit="cover"
          className="aspect-video rounded-xl bg-gray-50 object-cover"
        />
      </div>
    </Section>
  )
}
