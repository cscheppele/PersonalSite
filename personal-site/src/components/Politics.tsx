import styles from "@/styles/Politics.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function Politics ({setSelectedComponent}:{setSelectedComponent: Dispatch<SetStateAction<PageComponent>>}) {
    return (
      <main className={styles.main}>
        <h1>Everything should be illegal, including government</h1>
        <h4>Real stances will come in the future and be updated frequently, as people opinions should grow and change as 
            we continue to learn new information about ourselves and the world around us.
        </h4>
        <div className={styles.navbar}>
            <h1 className={styles.navigate}>Navigate</h1>
            <div className={styles.button_container}>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Portfolio")}>Portfolio</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hobbies")}>Hobbies</button>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("CurriculumVitae")}>Curriculum Vitae</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("About")}>About</button>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Hero")}>Home</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Contact")}>Contact</button>
            </div>
        </div>
      </main>
    )
}