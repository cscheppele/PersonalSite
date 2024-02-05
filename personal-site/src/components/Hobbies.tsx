import styles from "@/styles/Hobbies.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function Hobbies (/*{setSelectedComponent}:{setSelectedComponent: Dispatch<SetStateAction<PageComponent>>}*/) {
    return (
      <main className={styles.main}>
        <div className={`${styles.hobby_row} ${styles.row1}`}>
            <div className={`${styles.hobby}`}><h2>Volleyball</h2></div>
            <div className={`${styles.hobby}`}><h2>Horse Training</h2></div>
        </div>
        <div className={`${styles.hobby_row}  ${styles.row2}`}>
            <div className={styles.hobby}><h2>Dungeons and Dragons</h2></div>
            <div className={styles.hobby}><h2>Video Games</h2></div>
            <div className={styles.hobby}><h2>Working Out</h2></div>
        </div>
      </main>
    )
}