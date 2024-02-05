import styles from "@/styles/NavBar.module.css"
import { NavBarProps } from "@/types";

export default function NavBar ({heroRef, portfolioRef, aboutRef, hobbiesRef, contactRef, politicsRef, curriculumVitaeRef}: NavBarProps) {
    const scrollToComponent = (ref: React.RefObject<HTMLElement>) => {
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    return (
        <div className={styles.navbar}>
            <button className={styles.button} onClick={() => scrollToComponent(heroRef)}>Home</button>
            <button className={styles.button} onClick={() => scrollToComponent(aboutRef)}>About Me</button>
            <button className={styles.button} onClick={() => scrollToComponent(portfolioRef)}>Portfolio</button>
            <button className={styles.button} onClick={() => scrollToComponent(curriculumVitaeRef)}>Curriculum Vitae</button>
            <button className={styles.button} onClick={() => scrollToComponent(hobbiesRef)}>Hobbies</button>
            <button className={styles.button} onClick={() => scrollToComponent(politicsRef)}>Political Stances</button>
            <button className={styles.button} onClick={() => scrollToComponent(contactRef)}>Contact</button>
        </div>
    )
}