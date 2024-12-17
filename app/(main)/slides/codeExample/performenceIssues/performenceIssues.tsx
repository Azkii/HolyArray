import React from "react"

import { Block, CodeBlock, parseRoot } from "codehike/blocks"
import Content from "./content.md"
import { z } from "zod"
import { Selection, SelectionProvider } from "codehike/utils/selection"
import { Controls } from "./controls"
import styles from "./performenceIssues.module.css"
import { CodeWithCopy } from "@/components/codeWithCopy/codeWithCopy"

const Schema = Block.extend({
  steps: z.array(Block.extend({ code: CodeBlock })),
})

export default function PerformenceIssues() {
  const { steps } = parseRoot(Content, Schema)

  return (
    <SelectionProvider className={styles.provider}>
      <div className={styles.container}>
        <Selection
          from={steps.map((step) => (
            <div className={styles.step}>
              <h3>{step.title}</h3>
              <span>{step.children}</span>
            </div>
          ))}
        />
        <Controls length={steps.length} />
      </div>
      <div className={styles.codeBlock}>
        <Selection
          from={steps.map((step) => (
            <CodeWithCopy codeblock={step.code} />
          ))}
        />
      </div>
    </SelectionProvider>
  )
}
