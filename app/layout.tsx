import "./globals.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false
import { fas } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
library.add(fas)

import { Overpass } from "@next/font/google"
import Header from "../ui/Header"
const overpass = Overpass({
  subsets: ["latin"],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={overpass.className + " " + "site-theme-dark"}>
        <Header />
        {children}
      </body>
    </html>
  )
}
