// ./components/media--image.tsx
import Image from "next/image"
import { absoluteURL } from "lib/utils"
import { MediaProps } from "components/media"

interface MediaImageProps extends MediaProps {
    className?: string;
    height?: number;
    width?: number;
    priority?: boolean;
}

export function MediaImage({ media, className, height, width, priority }: MediaImageProps) {
    const image = media?.field_media_image

    if (!image?.uri) {
      return null
    }

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <Image
            loader={myLoader}
            src={absoluteURL(image.uri.url)}
            alt={image.resourceIdObjMeta.alt || "Image"}
            title={image.resourceIdObjMeta.title}
            width={width || image.resourceIdObjMeta.width}
            height={height || image.resourceIdObjMeta.height}
            className={className}
            priority={priority}
        />
    )
}
