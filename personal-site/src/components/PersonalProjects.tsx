import styles from "@/styles/PersonalProjects.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function PersonalProjects ({setSelectedComponent}:{setSelectedComponent: Dispatch<SetStateAction<PageComponent>>}) {
    return (
      <main className={styles.main}>
        <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Hero")}>Home</button>
        <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hobbies")}>Hobbies</button>
        <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("ProfessionalHistory")}>Professional History</button>
        <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("About")}>About</button>
        <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Politics")}>Political Stances</button>
      </main>
    )
}