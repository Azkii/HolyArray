import { z } from "zod"
import {
  Selection,
  Selectable,
  SelectionProvider,
} from "codehike/utils/selection"
import { Block, CodeBlock, parseRoot } from "codehike/blocks"
import Content from "./content.md"
import styles from "./arrayInDistress.module.css"
import { CodeWithCopy } from "@/components/codeWithCopy/codeWithCopy"

const Schema = Block.extend({
  steps: z.array(Block.extend({ code: CodeBlock })),
})

export default function ArrayInDistress() {
  const { steps } = parseRoot(Content, Schema)

  return (
    <SelectionProvider className={styles.provider}>
      <div className={styles.container}>
        <div className={styles.content}>
          {steps.map((step, i) => (
            <Selectable
              key={i}
              index={i}
              selectOn={["click"]}
              className={styles.selectable}
            >
              <h2 className={styles.title}>{step.title}</h2>
            </Selectable>
          ))}
        </div>
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
