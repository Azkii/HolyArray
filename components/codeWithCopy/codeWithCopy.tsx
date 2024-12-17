import { highlight, Pre } from "codehike/code"
import React from "react"
import styles from "./codeWithCopy.module.css"
import { CopyButton } from "../copyButton/copyButton"
import { tokenTransitions } from "../annotations/token-transitions"

export async function CodeWithCopy({ codeblock }: any) {
  const highlighted = await highlight(codeblock, "github-dark")
  return (
    <div className={styles.code}>
      <Pre code={highlighted} handlers={[tokenTransitions]} />
      <CopyButton text={highlighted.code} />
    </div>
  )
}
