import Head from "next/head"

export default function ScrollRestorationDisabler() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `history.scrollRestoration = "manual"`,
      }}
    />
  )
}
