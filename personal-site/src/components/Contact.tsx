import styles from "@/styles/Contact.module.css";
import { useState, useSyncExternalStore } from "react";

const NAME = "Chris Scheppele";
// Stored in pieces and joined only in the browser, so the full address never
// appears in the page's HTML for scraper bots to harvest.
const EMAIL_PARTS = ["cmscheppele", "gmail", "com"];
const assembleEmail = () => `${EMAIL_PARTS[0]}@${EMAIL_PARTS[1]}.${EMAIL_PARTS[2]}`;
const noSubscribe = () => () => {};
const GITHUB_URL = "https://github.com/cscheppele";
const LINKEDIN_URL = "https://www.linkedin.com/in/cscheppele/";

const MailIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
        <path fill="currentColor" d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.4V17h16V7.4l-8 5.6-8-5.6ZM18.6 7H5.4L12 11.6 18.6 7Z"/>
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
        <path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
        <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>
    </svg>
);

export default function Contact () {
    const [copied, setCopied] = useState(false);
    // Server-rendered HTML gets "" (no address); the browser gets the real one.
    const email = useSyncExternalStore(noSubscribe, assembleEmail, () => "");

    const copyEmail = async () => {
        if (!email) return;
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard unavailable; the mailto link still works.
        }
    };

    return (
        <main className={styles.main}>
            <section className={styles.card} aria-labelledby="contact-heading">
                <p className={styles.eyebrow}>Get in touch</p>
                <h2 id="contact-heading" className={styles.name}>{NAME}</h2>

                <div className={styles.email_row}>
                    <a className={styles.email} href={email ? `mailto:${email}` : undefined}>
                        <MailIcon />
                        <span>{email || "Loading email..."}</span>
                    </a>
                    <button type="button" className={styles.copy} onClick={copyEmail} disabled={!email}>
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>

                <div className={styles.links}>
                    <a className={styles.link} href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                        <span>LinkedIn</span>
                    </a>
                    <a className={styles.link} href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                        <span>GitHub</span>
                    </a>
                </div>
            </section>
        </main>
    )
}
