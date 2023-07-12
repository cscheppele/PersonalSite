import styles from "@/styles/ProfessionalHistory.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function ProfessionalHistory ({setSelectedComponent}:{setSelectedComponent: Dispatch<SetStateAction<PageComponent>>}) {
    return (
      <div className={styles.main}>
        <div className={styles.row}>
            <div className={styles.professional_section}>EDUCATION</div>
            <div className={styles.professional_section}>WORK HISTORY</div>
            <div className={styles.professional_section}>KNOWN TECH</div>
        </div>
            <div className={styles.row}>
            <div className={styles.professional_section}>SPOKEN LANGUAGES</div>
            <div className={styles.professional_section}>CODING LANGUAGES</div>
            <div className={styles.professional_section}>SKILLS</div>
        </div>
        <div className={styles.hire_me}>
            Want to hire me and need somthing for your files? Check out my CV
        </div>
        <div className={styles.navbar}>
        <h1 className={styles.navigate}>Navigate</h1>
            <div className={styles.button_container}>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("PersonalProjects")}>Personal Projects</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hobbies")}>Hobbies</button>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Hero")}>Home</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("About")}>About</button>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Politics")}>Political Stances</button>
            </div>
        </div>
      </div>
    )
}