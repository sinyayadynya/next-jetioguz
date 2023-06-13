import Head from "next/head"
import { useRouter } from "next/router"

import siteConfig from "site.config"
import { absoluteURL } from "lib/utils"

export interface MetaProps {
    title?: string
    description?: string
    body?: string
    path?: string
}

export function Meta({ title, description, body }: MetaProps) {
    const router = useRouter()

    let metaDescription = description || siteConfig.slogan;
    if (body) {
      // If there is a body, take its first 160 characters as meta description
      metaDescription = body.substring(0, 160);
    }

  return (
    <Head>
      <link
        rel="canonical"
        href={absoluteURL(router.asPath !== "/" ? router.asPath : "")}
      />
      <title>
        {`${title} | ${siteConfig.name}`}
      </title>
      {/* <meta name="description" content={description || siteConfig.slogan} /> */}
      <meta name="description" content={metaDescription} />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/images/meta.jpg`}
      />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
    </Head>
  )
}
