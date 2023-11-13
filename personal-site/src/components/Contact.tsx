import styles from "@/styles/Contact.module.css";
import { Dispatch, SetStateAction } from 'react';
import { PageComponent } from '@/types';

export default function Contact ({setSelectedComponent}:{setSelectedComponent: Dispatch<SetStateAction<PageComponent>>}) {
    return(
        <main className={styles.main}>
            <form className={styles.form}>
                <label>Name</label>
                <input className={styles.input} type="text"/>
                <label>Email</label>
                <input className={styles.input} type="email"/>
                <label>Subject</label>
                <input className={styles.input} type="text"/>
                <label>Message</label>
                <textarea className={`${styles.input} ${styles.text_area}`}/>
                <input className={styles.submit} type="submit" value="Send Email"/>
            </form>
            <div className={styles.navbar}>
            <h1 className={styles.navigate}>Navigate</h1>
                <div className={styles.button_container}>
                    <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Portfolio")}>Portfolio</button>
                    <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hobbies")}>Hobbies</button>
                    <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("CurriculumVitae")}>Curriculum Vitae</button>
                    <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("About")}>About</button>
                    <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Politics")}>Political Stances</button>
                    <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hero")}>Home</button>
                </div>
            </div>
        </main>
    )
}