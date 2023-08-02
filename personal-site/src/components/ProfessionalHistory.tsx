import styles from "@/styles/ProfessionalHistory.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function ProfessionalHistory({ setSelectedComponent }: { setSelectedComponent: Dispatch<SetStateAction<PageComponent>> }) {
    return (
        <div className={styles.main}>
            <div className={styles.row}>
                <div className={styles.professional_section}>
                    <h2>EDUCATION</h2>
                    <ul>
                        <li>
                            <h3>BA Psychology & Spanish</h3>
                            <h4>Oklahoma State University</h4>
                            <h5>2008 - 2014</h5>
                        </li>
                        {"\n \n"}
                        <li>
                            <h3>Software Engineering</h3>
                            <h4>Codeworks</h4>
                            <h5>2023</h5>
                        </li>
                    </ul>
                </div>
                <div className={styles.professional_section}>
                    <h2>EXPERIENCE</h2>
                    <details>
                        <summary>
                            <h3>Full Stack Developer</h3>
                            <h4>JAM</h4>
                            <h5>2023 – present</h5>
                            <h5>Barcelona, Spain</h5>
                        </summary>
                        <ul>
                            <li>Worked with 6 member team, Spearheaded the Redux sub-group and mentored the entire team on the use and implementation of Redux, Redux Toolkit, and RTK Queries.</li>
                            <li>Developed 100% of the algorithms for handling the app&apos;s expense calculations and payment suggestions.</li>
                            <li>Assisted in backend MVC design with Express/Postgres.</li>
                            <li>Collaborated with the team on typescript implementation and introduced new features</li>
                            <li>Served as Project Manager.</li>
                        </ul>
                    </details>
                    <details>
                        <summary>Contract Software Engineer</summary>
                        <ul></ul>
                    </details>
                    <details>
                        <summary>Lead Developer</summary>
                        <ul></ul>
                    </details>
                    <details>
                        <summary>Hospitality Work</summary>
                        <ul></ul>
                    </details>
                </div>
                <div className={styles.professional_section}>
                    <h2>KNOWN TECH</h2>
                    <ul>
                        <li>
                            <h3>React.js</h3>
                        </li>
                        <li>
                            <h3>Redux</h3>
                        </li>
                        <li>
                            <h3>Redux ToolKit</h3>
                        </li>
                        <li>
                            <h3>Next.js</h3>
                        </li>
                        <li>
                            <h3>CSS</h3>
                        </li>
                        <li>
                            <h3>HTML (5)</h3>
                        </li>
                        <li>
                            <h3>Angular</h3>
                        </li>
                        <li>
                            <h3>Express</h3>
                        </li>
                        <li>
                            <h3>Koa</h3>
                        </li>
                        <li>
                            <h3>MongoDB</h3>
                        </li>
                        <li>
                            <h3>PostgresQl</h3>
                        </li>
                        <li>
                            <h3>Mongoose</h3>
                        </li>
                        <li>
                            <h3>Prisma</h3>
                        </li>
                        <li>
                            <h3>Cypress</h3>
                        </li>
                        <li>
                            <h3>Jest</h3>
                        </li>
                        <li>
                            <h3>Mocha</h3>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.professional_section}>
                    <h2>SPOKEN LANGUAGES</h2>
                    <ul>
                        <li>
                            <h3>English</h3>
                            <h4>Native</h4>
                        </li>
                        <li>
                            <h3>Spanish</h3>
                            <h4>Fluent</h4>
                        </li>
                        <li>
                            <h3>French</h3>
                            <h4>Conversational</h4>
                        </li>
                    </ul>
                </div>
                <div className={styles.professional_section}>
                    <h2>CODING LANGUAGES</h2>
                    <ul>
                        <li>
                            <h3>JavaScript</h3>
                        </li>
                        <li>
                            <h3>TypeScript</h3>
                        </li>
                        <li>
                            <h3>C#</h3>
                        </li>
                    </ul>
                </div>
                <div className={styles.professional_section}>
                    <h2>SKILLS</h2>
                    <ul>
                        <li>
                            <h3>Project Management</h3>
                        </li>
                        <li>
                            <h3>Mentoring</h3>
                        </li>
                        <li>
                            <h3>Leadership</h3>
                        </li>
                        <li>
                            <h3>Algorithms</h3>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.hire_me}>
                Want to hire me and need somthing for your files? Check out my CV
            </div>
            <div className={styles.navbar}>
                <h1 className={styles.navigate}>Navigate</h1>
                <div className={styles.button_container}>
                    <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("PersonalProjects")}>Personal Projects</button>
                    <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Hobbies")}>Hobbies</button>
                    <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Hero")}>Home</button>
                    <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("About")}>About</button>
                    <button className={`${styles.button} ${styles.button_bottom}`} onClick={() => setSelectedComponent("Politics")}>Political Stances</button>
                    <button className={`${styles.button} ${styles.button_top}`} onClick={() => setSelectedComponent("Contact")}>Contact</button>
                </div>
            </div>
        </div>
    )
}