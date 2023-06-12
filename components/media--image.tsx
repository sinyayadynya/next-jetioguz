import Image from "next/image"
import { absoluteURL } from "lib/utils"
import { MediaProps } from "components/media"

interface MediaImageProps extends MediaProps {
    className?: string;
    height?: number;
    width?: number;
    priority?: boolean;
    fill?: boolean;
}

export function MediaImage({ media, className, height, width, priority, fill }: MediaImageProps) {
    const image = media?.field_media_image

    if (!image?.uri) {
      return null
    }

    return (
        <Image
            src={absoluteURL(image.uri.url)}
            alt={image.resourceIdObjMeta.alt || "Image"}
            title={image.resourceIdObjMeta.title}
            className={className}
            priority={priority}
            fill={fill}
            {...(!fill && { width: width || image.resourceIdObjMeta.width, height: height || image.resourceIdObjMeta.height })}
        />
    )
}
