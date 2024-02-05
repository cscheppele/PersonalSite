import styles from "@/styles/Contact.module.css";

export default function Contact () {
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
        </main>
    )
}