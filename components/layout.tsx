// ./components/layout.tsx

import { Meta, MetaProps } from "components/meta"
import { PreviewAlert } from "components/preview-alert"
import { Header, HeaderProps } from "components/header"
import { Footer } from "components/footer"

import { TailwindIndicator } from "components/tailwind-indicator"
import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { drupal } from "lib/drupal"
import { DrupalBlock, JsonApiResource } from "next-drupal"
import localFont from "next/font/local"

const sofia = localFont({
    src: './fonts/SofiaSans-Bold.woff2',
    variable: '--font-sofia',
    display: 'swap',
})

const inter = localFont({
    src: './fonts/Inter.var.woff2',
    variable: '--font-inter',
    display: 'swap',
});

// export interface LayoutProps extends FooterProps {
//   meta?: MetaProps
//   menus: HeaderProps["menus"] & FooterProps["menus"]
//   incentives: DrupalBlock
//   children?: React.ReactNode
// }

export interface LayoutProps {
  meta?: MetaProps
  children?: React.ReactNode
  heroOffsetImage?: DrupalBlock; // Add this line
  locale?: string; // Add this line
  showFooter?: boolean; // Add this line
}


export function Layout({ children, meta, heroOffsetImage, locale, showFooter = true }: LayoutProps) {
    return (
        <>
            <Meta {...meta} />

            <div className={`${inter.variable} ${sofia.variable}`}>
                <PreviewAlert />
                <Header />
                <main className="flex-1 bg-white font-sans">{children}</main>
                {showFooter && <Footer />} {/* Conditionally render the Footer */}
                {/* <Footer incentives={incentives} /> */}

            </div>
            <TailwindIndicator />
        </>
    )
}
