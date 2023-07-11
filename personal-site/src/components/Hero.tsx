import Image from 'next/image'
import face from "../../public/cropped-face.png"
import styles from "@/styles/Hero.module.css"

export default function Hero ({handleClick}:{handleClick: VoidFunction}) {
    return (
      <main className={styles.main}>
        <div className={styles.face}>
          <Image src={face} layout='fill' objectFit='cover' alt="profile picture"/>
        </div>
        <button className={`${styles.button} ${styles.button_bottom}`} onClick={handleClick}>Personal Projects</button>
        <button className={`${styles.button} ${styles.button_top}`} onClick={handleClick}>Hobbies</button>
        <button className={`${styles.button} ${styles.button_bottom}`} onClick={handleClick}>Professional History</button>
        <button className={`${styles.button} ${styles.button_top}`} onClick={handleClick}>About Me</button>
        <button className={`${styles.button} ${styles.button_bottom}`} onClick={handleClick}>Political Stances</button>
      </main>
    )
}