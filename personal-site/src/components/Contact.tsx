import styles from "@/styles/Contact.module.css";
import { Dispatch, SetStateAction } from 'react';
import { PageComponent } from '@/types';

export default function Contact ({setSelectedComponent}:{setSelectedComponent: Dispatch<SetStateAction<PageComponent>>}) {
    return(
        <main className={styles.main}>
            <div className={styles.navbar}>
            <h1 className={styles.navigate}>Navigate</h1>
                <div className={styles.button_container}>
                    <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("PersonalProjects")}>Personal Projects</button>
                    <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hobbies")}>Hobbies</button>
                    <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("ProfessionalHistory")}>Professional History</button>
                    <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("About")}>About</button>
                    <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Politics")}>Political Stances</button>
                    <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hero")}>Home</button>
                </div>
            </div>
        </main>
    )
}