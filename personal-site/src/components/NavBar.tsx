import styles from "@/styles/NavBar.module.css"

export default function NavBar () {
    return (
        <div className={styles.navbar}>
            <button className={styles.button}>Personal Projects</button>
            <button className={styles.button}>Hobbies</button>
            <button className={styles.button}>Professional History</button>
            <button className={styles.button}>About Me</button>
            <button className={styles.button}>Political Stances</button>
        </div>
    )
}