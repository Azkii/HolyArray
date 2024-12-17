import type { Metadata } from "next"
import "@utils/styles/global.css"
import styles from "./rootLayout.module.css"

export const metadata: Metadata = {
  title: "Holy Array",
  description: "Building module bundler",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={styles.html}>
      <body className={`${styles.body}`}>{children}</body>
    </html>
  )
}
