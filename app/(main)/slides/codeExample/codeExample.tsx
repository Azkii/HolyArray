import React from "react"

import styles from "./codeExample.module.css"
import ArrayInDistress from "./arrayInDistress/arrayInDistress"
import Diagram1 from "@assets/diagram1.svg"
import Diagram2 from "@assets/diagram2.svg"
import Image from "next/image"
import HolesInDistress from "./holesInDistress/holesInDistress"
import PerformenceIssues from "./performenceIssues/performenceIssues"

export default function CodeExample() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Array in Distress: Mutations Unleashed</h2>
      <Image
        src={Diagram1}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt=""
      />
      <ArrayInDistress />
      <h2 className={styles.title}>Array in Distress: The Collapse of Order</h2>
      <Image
        src={Diagram2}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt=""
      />
      <HolesInDistress />
      <p>const array = new Array(3)</p>
      <h2 className={styles.title}>Performence issues</h2>
      <PerformenceIssues />
    </section>
  )
}
