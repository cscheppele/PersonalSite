"use client"
import styles from './page.module.css';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Hobbies from '@/components/Hobbies';
import Portfolio from '@/components/Portfolio';
import Politics from '@/components/Politics';
import CurriculumVitae from '@/components/CurriculumVitae';
import React, { useRef /*, useState*/} from 'react';
// import { MouseEvent } from 'react';
import Contact from '@/components/Contact';
import NavBar from '@/components/NavBar';

export default function Home() {
  
  const portfolioRef = useRef(null);
  const hobbiesRef = useRef(null);
  const contactRef = useRef(null);
  const curriculumVitaeRef = useRef(null);
  const politicsRef = useRef(null);
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  
  return (
      <main className={styles.main}>
        <NavBar portfolioRef={portfolioRef} hobbiesRef={hobbiesRef} contactRef={contactRef} curriculumVitaeRef={curriculumVitaeRef} politicsRef={politicsRef} aboutRef={aboutRef} heroRef={heroRef}/>
        <div className={styles.scroll}>
          <div className={styles.component} ref={heroRef}><Hero/></div>
          <div className={styles.component} ref={aboutRef}><About/></div>
          <div className={styles.component} ref={portfolioRef}><Portfolio/></div>
          <div className={styles.component} ref={curriculumVitaeRef}><CurriculumVitae/></div>
          <div className={styles.component} ref={hobbiesRef}><Hobbies/></div>
          <div className={styles.component} ref={politicsRef}><Politics/></div>
          <div className={styles.component} ref={contactRef}><Contact/></div>
        </div>
        </main>
    
  )
}
