import styles from "@/styles/PersonalProjects.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function PersonalProjects ({setSelectedComponent}:{setSelectedComponent: Dispatch<SetStateAction<PageComponent>>}) {
    return (
      <main className={styles.main}>
        <div className={styles.project_container}>
            <div className={styles.project}>
                <h1>Super Cool Project number 1</h1>
                <h3>blurb about it</h3>
                <h3>tech stack</h3>
                <a>this is a link to the Github repo.</a>
            </div>
            <div className={styles.project}>
                <h1>Super Cool Project number 1</h1>
                <h3>blurb about it</h3>
                <h3>tech stack</h3>
                <a>this is a link to the Github repo.</a>
            </div>
        </div>
        <div className={styles.navbar}>
            <h1 className={styles.navigate}>Navigate</h1>
            <div className={styles.button_container}>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Hero")}>Home</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hobbies")}>Hobbies</button>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("ProfessionalHistory")}>Professional History</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("About")}>About</button>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Politics")}>Political Stances</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Contact")}>Contact</button>
            </div>
        </div>
      </main>
    )
}