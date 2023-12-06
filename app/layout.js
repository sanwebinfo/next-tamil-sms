import "./globals.css"
import { Baloo_Thambi_2 } from "next/font/google"

const BalooThambi = Baloo_Thambi_2({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Tamil SMS - Kavithai index database",
  description:
    "Random Tamil Kavithai Collections - Tamil SMS Blog and kavithai index Database.",
}

export default function RootLayout({ children }) {
  const canonicalUrl = "https://data.tamilsms.blog"
  return (
    <html lang="en">
      <meta name="HandheldFriendly" content="True" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#6c5ce7" />
      <meta name="mobile-web-app-capable" content="yes"></meta>
      <meta name="application-name" content="Tamil SMS"></meta>
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="white-translucent"
      ></meta>
      <meta name="apple-mobile-web-app-title" content="Tamil SMS"></meta>
      <link rel="shortcut icon" href="/icons/Icon-32.png"></link>
      <link
        rel="apple-touch-icon"
        sizes="48x48"
        href="/icons/Icon-48.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/icons/Icon-72.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="96x96"
        href="/icons/Icon-96.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icons/Icon-144.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/icons/Icon-192.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/icons/Icon-512.png"
      ></link>
      <link rel="canonical" href={canonicalUrl} />
      <body className={BalooThambi.className}>{children}</body>
    </html>
  )
}
