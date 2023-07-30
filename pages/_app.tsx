import * as React from "react"
import Router from "next/router"
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query"
import { appWithTranslation } from "next-i18next"
import localFont from "next/font/local"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

import "styles/globals.css"

NProgress.configure({ showSpinner: false })

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

const inter = localFont({
    src: '../components/fonts/Inter.var.woff2',
    variable: '--font-inter',
    display: 'swap',
});

const sofia = localFont({
    src: '../components/fonts/SofiaSans-Bold.woff2',
    variable: '--font-sofia',
    display: 'swap',
})

const hubot = localFont({
    src: '../components/fonts/Hubot-Sans.woff2',
    variable: '--font-hubot',
    display: 'swap',
})

function App({ Component, pageProps: { session, ...pageProps } }) {
  const queryClientRef = React.useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
        <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-hubot: ${hubot.style.fontFamily};
        }
      `}</style>
          <Component {...pageProps} />
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default appWithTranslation(App)
