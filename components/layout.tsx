import { Meta, MetaProps } from "components/meta"
import { PreviewAlert } from "components/preview-alert"
import { Header, HeaderProps } from "components/header"
import { Footer, FooterProps } from "components/footer"
import { TailwindIndicator } from "components/tailwind-indicator"
import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { drupal } from "lib/drupal"
import { JsonApiResource } from "next-drupal"
import localFont from "next/font/local"

const hubot = localFont({
    src: './fonts/Hubot-Sans.woff2',
    variable: '--font-hubot',
    display: 'swap',
})

const inter = localFont({
    src: './fonts/Inter.var.woff2',
    variable: '--font-inter',
    display: 'swap',
});

export interface LayoutProps extends HeaderProps, FooterProps {
  meta?: MetaProps
  menus: HeaderProps["menus"] & FooterProps["menus"]
  children?: React.ReactNode
}


export function Layout({ meta, menus, blocks, children }: LayoutProps) {
  return (
    <>
      <Meta {...meta} />
      <div className={`${inter.variable} ${hubot.variable}`}>
        <PreviewAlert />
        <Header />
        <main className="flex-1 bg-white font-sans">{children}</main>
        <Footer blocks={blocks} />
      </div>
      <TailwindIndicator />
    </>
  )
}
