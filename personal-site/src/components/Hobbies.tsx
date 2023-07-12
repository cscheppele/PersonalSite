import styles from "@/styles/Hobbies.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function Hobbies ({setSelectedComponent}:{setSelectedComponent: Dispatch<SetStateAction<PageComponent>>}) {
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
        <div className={styles.navbar}>
        <h1 className={styles.navigate}>Navigate</h1>
            <div className={styles.button_container}>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("PersonalProjects")}>Personal Projects</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hero")}>Home</button>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("ProfessionalHistory")}>Professional History</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("About")}>About</button>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Politics")}>Political Stances</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Contact")}>Contact</button>
            </div>
        </div>
      </main>
    )
}