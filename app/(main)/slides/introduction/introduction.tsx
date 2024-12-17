import React from "react"
import styles from "./introduction.module.css"

export default function Introduction() {
  const rows = [
    ["PACKED_SMI_ELEMENTS", "HOLEY_SMI_ELEMENTS"],
    ["PACKED_DOUBLE_ELEMENTS", "HOLEY_DOUBLE_ELEMENTS"],
    ["PACKED_ELEMENTS", "HOLEY_ELEMENTS"],
  ]

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>What are elements kinds?</h2>
        <p className={styles.subtitle}>
          Elements kinds refer to the internal classification of array storage
          formats. This classification allows V8 to optimize how arrays are
          stored and accessed based on their content type and usage patterns.
        </p>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Packed</th>
            <th className={styles.tableHeader}>Holey</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={styles.cell}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
