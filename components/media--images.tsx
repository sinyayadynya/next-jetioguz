import { MediaImage } from './media--image';
import { MediaProps } from "components/media"

interface MediaImagesProps {
  media: Array<MediaProps>;
}

export function MediaImages({ media }: MediaImagesProps) {
    if (!media) {
      return null;
    }

    return (
      <div>
        {media.map((item, index) => (
          <MediaImage key={index} media={item} />
        ))}
      </div>
    );
  }
