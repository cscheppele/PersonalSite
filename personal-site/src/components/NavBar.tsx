import styles from "@/styles/NavBar.module.css"

export default function NavBar () {
    return (
        <div className={styles.navbar}>
            <button className={styles.button}>Portfolio</button>
            <button className={styles.button}>Hobbies</button>
            <button className={styles.button}>Curriculum Vitae</button>
            <button className={styles.button}>About Me</button>
            <button className={styles.button}>Political Stances</button>
        </div>
    )
}