import styles from "@/styles/Politics.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function Politics ({setSelectedComponent}:{setSelectedComponent: Dispatch<SetStateAction<PageComponent>>}) {
    return (
      <main className={styles.main}>
        <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("PersonalProjects")}>Personal Projects</button>
        <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hobbies")}>Hobbies</button>
        <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("ProfessionalHistory")}>Professional History</button>
        <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("About")}>About</button>
        <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Hero")}>Home</button>
      </main>
    )
}