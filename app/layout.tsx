import { config } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { Overpass } from "@next/font/google"
import Header from "../ui/Header"

import "@fortawesome/fontawesome-svg-core/styles.css"
import "./globals.css"
import "nprogress/nprogress.css"
import { TooltipContent } from "../ui/Tooltip"
import Footer from "@/ui/Footer"
import { ProviderProgress } from "./context/progress"
import ScrollRestorationDisabler from "./ScrollRestorationDisabler"
config.autoAddCss = false
library.add(fas)
library.add(far)

const overpass = Overpass({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="site-theme-dark">
      <head>
        <ScrollRestorationDisabler />
      </head>
      <body className={overpass.className}>
        <ProviderProgress>
          <Header />
          {children}
          <TooltipContent />
          <Footer />
        </ProviderProgress>
      </body>
    </html>
  )
}
