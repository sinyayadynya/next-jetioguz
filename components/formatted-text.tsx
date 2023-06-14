import { HTMLReactParserOptions, domToReact } from "html-react-parser"
import { Element } from "domhandler/lib/node"
import parse from "html-react-parser"
import Image from "next/legacy/image"
import Link from "next/link"

import { isRelative } from "lib/utils"

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) {
      if (domNode.name === "img") {
        const {
          src,
          alt,
          class: className,
          width = "100px",
          height = "100px",
        } = domNode.attribs as {
          src: string;
          alt: string;
          class: string;
          width?: string;
          height?: string;
        };

        if (isRelative(src)) {
          return (
            <div className={className}>
              <Image
                src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${src}`}
                alt={alt}
                // layout="intrinsic"
                className="object-cover"
              />
            </div>
          )
        }
      }

      if (domNode.name === "a") {
        const { href, class: className } = domNode.attribs as {
          href: string;
          class: string;
        };

        if (href && isRelative(href)) {
          return (
            <Link href={href} passHref className={className}>
              {domToReact(domNode.children)}
            </Link>
          );
        }
      }
    }
  },
}

interface FormattedTextProps {
  text?: string
}

export function FormattedText({ text }: FormattedTextProps) {
  if (!text) return null

  return <>{parse(text, options)}</>
}
