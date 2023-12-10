import styles from "@/styles/Hobbies.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function Hobbies (/*{setSelectedComponent}:{setSelectedComponent: Dispatch<SetStateAction<PageComponent>>}*/) {
    return (
      <main className={styles.main}>
        <div className={styles.hobby_row}>
            <div className={`${styles.hobby}`}><h2>Volleyball</h2></div>
            <div className={`${styles.hobby}`}><h2>Game Design</h2></div>
        </div>
        <div className={styles.hobby_row}>
            <div className={`${styles.hobby} ${styles.hobby1}`}><h2>Dungeons and Dragons</h2></div>
            <div className={`${styles.hobby}`}><h2>Video Games</h2></div>
            <div className={`${styles.hobby} ${styles.hobby2}`}><h2>Working Out</h2></div>
        </div>
        <div className={`${styles.hobby_row} ${styles.last_row}`}>
         <div className={`${styles.hobby}`}><h2>HorseBack Riding</h2></div>
         <div className={`${styles.hobby}`}><h2>Weekend Trips</h2></div>
        </div>
      </main>
    )
}