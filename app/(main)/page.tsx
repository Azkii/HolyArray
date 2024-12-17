import Introduction from "./slides/introduction/introduction"
import Welcome from "./slides/welcome/welcome"
import CodeExample from "./slides/codeExample/codeExample"
import styles from "./page.module.css"

export default function Page() {
  return (
    <div className={styles.page}>
      <Welcome />
      <Introduction />
      <CodeExample />
    </div>
  )
}
