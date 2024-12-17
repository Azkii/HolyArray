import React from "react"

import { Block, CodeBlock, parseRoot } from "codehike/blocks"
import Content from "./content.md"
import { z } from "zod"
import { Selection, SelectionProvider } from "codehike/utils/selection"
import { Pre, highlight } from "codehike/code"
import { tokenTransitions } from "@/components/annotations/token-transitions"
import { Controls } from "./controls"
import styles from "./performenceIssues.module.css"

const Schema = Block.extend({
  steps: z.array(Block.extend({ code: CodeBlock })),
})

export default function PerformenceIssues() {
  const { steps } = parseRoot(Content, Schema)

  return (
    <SelectionProvider className={styles.provider}>
      <div className={styles.container}>
        <Selection from={steps.map((step) => step.children)} />
        <Controls length={steps.length} />
      </div>
      <div className={styles.codeBlock}>
        <Selection
          from={steps.map((step) => (
            <Code codeblock={step.code} />
          ))}
        />
      </div>
    </SelectionProvider>
  )
}

async function Code({ codeblock }: any) {
  const highlighted = await highlight(codeblock, "github-dark")
  return <Pre code={highlighted} handlers={[tokenTransitions]} />
}
