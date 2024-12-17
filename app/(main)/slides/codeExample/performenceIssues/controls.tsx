"use client"
import { useSelectedIndex } from "codehike/utils/selection"
import styles from "./performenceIssues.module.css"

interface Props {
  length: number
}

export function Controls({ length }: Props) {
  const [selectedIndex, setSelectedIndex] = useSelectedIndex()

  return (
    <div className={styles.controls}>
      <button onClick={() => setSelectedIndex(Math.max(0, selectedIndex - 1))}>
        Previous
      </button>
      <button
        onClick={() =>
          setSelectedIndex(Math.min(length - 1, selectedIndex + 1))
        }
      >
        Next
      </button>
    </div>
  )
}
