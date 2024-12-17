import { z } from "zod"
import {
  Selection,
  Selectable,
  SelectionProvider,
} from "codehike/utils/selection"
import { Block, CodeBlock, parseRoot } from "codehike/blocks"
import { highlight, Pre } from "codehike/code"
import Content from "./content.md"
import { tokenTransitions } from "@/components/annotations/token-transitions"
import styles from "./arrayInDistress.module.css"

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
