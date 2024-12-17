import React from "react"
import styles from "./welcome.module.css"

const title = `                                                                                                  
88                        88                   db                                                          
88                        88                  d88b                                                         
88                        88                 d8''8b                                                        
88,dPPYba,    ,adPPYba,   88  8b       d8   d8'  '8b      8b,dPPYba,  8b,dPPYba,  ,adPPYYba,  8b       d8  
88P'    "8a  a8"     "8a  88  '8b     d8'  d8YaaaaY8b     88P'   "Y8  88P'   "Y8  ""     'Y8  '8b     d8'  
88       88  8b       d8  88   '8b   d8'  d8""""""""8b    88          88          ,adPPPPP88   '8b   d8'   
88       88  "8a,   ,a8"  88    '8b,d8'  d8'        '8b   88          88          88,    ,88    '8b,d8'    
88       88   '"YbbdP"'   88      Y88'  d8'          '8b  88          88          '"8bbdP"Y8      Y88'     
                                  d8'                                                             d8'      
                                 d8'                                                             d8'       
`

export default function Welcome() {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <pre>{title}</pre>
        <h2>
          <a>0,27 km/h</a>
        </h2>
      </div>
    </section>
  )
}
