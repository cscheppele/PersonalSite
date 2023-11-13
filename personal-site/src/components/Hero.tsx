import Image from 'next/image'
import face from "../../public/cropped-face.png"
import styles from "@/styles/Hero.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function Hero({ setSelectedComponent }: { setSelectedComponent: Dispatch<SetStateAction<PageComponent>> }) {
    return (
        <main className={styles.main}>
            <div className={styles.descriptor_box}>
                <h1 className={`${styles.name} ${styles.text}`}>Chris Scheppele</h1>
                <div className={styles.underline}></div>
            </div>
            <h1 className={`${styles.descriptor_container}`}>
                <div className={styles.descriptor_box}>
                    <span className={`${styles.descriptor} ${styles.text}`}>DnD Afficionado</span>
                </div>
                -
                <div className={styles.descriptor_box}>
                    <span className={`${styles.descriptor} ${styles.text}`}>Quest Designer</span>
                </div>
                -
                <div className={styles.descriptor_box}>
                    <span className={`${styles.descriptor} ${styles.text}`}>Game Developer</span>
                </div>
                -
                <div className={styles.descriptor_box}>
                    <span className={`${styles.descriptor} ${styles.text}`}>Would-be Volleyball Pro</span>
                </div>
                -
                <div className={styles.descriptor_box}>
                    <span className={`${styles.descriptor} ${styles.text}`}>Gaymer</span>
                </div>
            </h1>
            <div className={styles.nav_buttons}>
                <div className={styles.face}>
                    <Image src={face} layout='fill' objectFit='cover' alt="profile picture" />
                </div>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Portfolio")}>Portfolio</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hobbies")}>Hobbies</button>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("CurriculumVitae")}>Curriculum Vitae</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("About")}>About</button>
                <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Politics")}>Political Stances</button>
                <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Contact")}>Contact</button>
            </div>
        </main>
    )
}