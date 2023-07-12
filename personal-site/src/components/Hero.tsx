import Image from 'next/image'
import face from "../../public/cropped-face.png"
import styles from "@/styles/Hero.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function Hero ({setSelectedComponent}:{setSelectedComponent: Dispatch<SetStateAction<PageComponent>>}) {
    return (
      <main className={styles.main}>
        <div className={styles.descriptor_box}>
            <h1 className={`${styles.name} ${styles.text}`}>Chris Scheppele</h1>
            <div className={styles.underline}></div>
        </div>
        <h1 className={`${styles.descriptor_container}`}>
            <div className={styles.descriptor_box}>
                <span className={`${styles.descriptor} ${styles.text}`}>DnD Afficionado</span>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.descriptor_box}>
                <span className={`${styles.descriptor} ${styles.text}`}>Animal Trainer</span>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.descriptor_box}>
                <span className={`${styles.descriptor} ${styles.text}`}>Full Stack Developer</span>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.descriptor_box}>
                <span className={`${styles.descriptor} ${styles.text}`}>Would-be Volleyball Pro</span>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.descriptor_box}>
                <span className={`${styles.descriptor} ${styles.text}`}>Gaymer</span>
                <div className={styles.underline}></div>
            </div>
        </h1>
        <div className={styles.nav_buttons}>
            <div className={styles.face}>
            <Image src={face} layout='fill' objectFit='cover' alt="profile picture"/>
            </div>
            <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("PersonalProjects")}>Personal Projects</button>
            <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hobbies")}>Hobbies</button>
            <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("ProfessionalHistory")}>Professional History</button>
            <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("About")}>About</button>
            <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Politics")}>Political Stances</button>
        </div>
      </main>
    )
}