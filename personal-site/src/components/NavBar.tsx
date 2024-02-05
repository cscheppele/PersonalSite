import styles from "@/styles/NavBar.module.css"

export default function NavBar () {
    return (
        <div className={styles.navbar}>
            <button className={styles.button}>Home</button>
            <button className={styles.button}>Portfolio</button>
            <button className={styles.button}>Hobbies</button>
            <div className={styles.descriptor_box}>
                <h1 className={`${styles.name} ${styles.text}`}>Chris Scheppele</h1>
                <div className={styles.underline}></div>
            </div>
            <button className={styles.button}>Curriculum Vitae</button>
            <button className={styles.button}>About Me</button>
            <button className={styles.button}>Political Stances</button>
            <button className={styles.button}>Contact</button>
        </div>
    )
}