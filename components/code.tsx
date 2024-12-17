import { Pre, RawCode, highlight } from "codehike/code"
import { callout } from "./annotations/callout"
import styles from "./code.module.css"

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-dark")
  return (
    <Pre code={highlighted} handlers={[callout]} className={styles.codeBlock} />
  )
}
