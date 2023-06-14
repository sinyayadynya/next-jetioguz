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

export function ParagraphImageFullWidth({ paragraphType }: ParagraphProps) {

  const imageUrl = paragraphType.field_media_image.field_media_image.uri.url

  return (
    <Section>
      <div key={paragraphType.id} className="my-4">
        {/* <Image
          src={absoluteURL(imageUrl)}
          alt={
            paragraphType.field_media_image.field_media_image
              .resourceIdObjMeta.alt
          }
          width={785}
          height={525}
          layout="responsive"
          className="aspect-video rounded-xl bg-gray-50 object-cover"
        /> */}
        <MediaImage
            media={paragraphType.field_media_image}
            width={785}
            height={525}
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            />
      </div>
    </Section>
  )
}
