import Image from 'next/image'
import face from "../../public/cropped-face.png"
import styles from "@/styles/Hero.module.css"
import NavBar from './NavBar'
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function Hero(/*{ setSelectedComponent }: { setSelectedComponent: Dispatch<SetStateAction<PageComponent>> }*/) {
    return (
        <main className={styles.main}>
            <div className={styles.descriptor_box}>
                <h1 className={`${styles.name} ${styles.text}`}>Chris Scheppele</h1>
                <div className={styles.underline}></div>
            </div>
            <h1 className={`${styles.descriptors_container}`}>
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
            <Image src={face} alt="Profile Image" className={styles.face}/>
        </main>
    )
}