import { Block, CodeBlock, parseRoot } from "codehike/blocks"
import { z } from "zod"
import { Pre, RawCode, highlight } from "codehike/code"
import {
  Selection,
  Selectable,
  SelectionProvider,
} from "codehike/utils/selection"
import Content from "./content.md"
import styles from "./test.module.css"
import { tokenTransitions } from "@components/annotations/token-transitions"

const Schema = Block.extend({
  intro: Block,
  steps: z.array(Block.extend({ code: CodeBlock })),
  outro: Block,
})

export default function Test() {
  const { intro, steps, outro } = parseRoot(Content, Schema)
  return (
    <main className={styles.main}>
      <h1 className={styles.introTitle}>{intro.title}</h1>
      <div>{intro.children}</div>
      <SelectionProvider className={styles.selectionProvider}>
        <div className={styles.stepsContainer}>
          {steps.map((step, i) => (
            <Selectable
              key={i}
              index={i}
              selectOn={["click", "scroll"]}
              className={styles.step}
            >
              <h2 className={styles.stepTitle}>{step.title}</h2>
              <div>{step.children}</div>
            </Selectable>
          ))}
        </div>
        <div className={styles.codeContainer}>
          <div className={styles.codeSticky}>
            <Selection
              from={steps.map((step) => (
                <Code codeblock={step.code} />
              ))}
            />
          </div>
        </div>
      </SelectionProvider>
      <h2 className={styles.outroTitle}>{outro.title}</h2>
      <div>{outro.children}</div>
    </main>
  )
}

async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-dark")
  return (
    <Pre
      code={highlighted}
      handlers={[tokenTransitions]}
      className={styles.pre}
    />
  )
}
