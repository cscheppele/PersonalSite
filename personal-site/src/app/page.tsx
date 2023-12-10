"use client"
import styles from './page.module.css';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Hobbies from '@/components/Hobbies';
import Portfolio from '@/components/Portfolio';
import Politics from '@/components/Politics';
import CurriculumVitae from '@/components/CurriculumVitae';
import { PageComponent } from '@/types';
import { useState } from 'react';
import { MouseEvent } from 'react';
import Contact from '@/components/Contact';
import NavBar from '@/components/NavBar';

export default function Home() {
  // const [selectedComponent, setSelectedComponent] = useState<PageComponent>("Hero")
  
  // const visibleComponent = (selectedComponent === "Hero" ? <Hero setSelectedComponent={setSelectedComponent}/> 
  //   : selectedComponent === "About" ? <About setSelectedComponent={setSelectedComponent}/> 
  //   : selectedComponent === "Hobbies" ? <Hobbies setSelectedComponent={setSelectedComponent}/>
  //   : selectedComponent === "Portfolio" ? <Portfolio setSelectedComponent={setSelectedComponent}/>
  //   : selectedComponent === "Politics" ? <Politics setSelectedComponent={setSelectedComponent}/>
  //   : selectedComponent === "CurriculumVitae" ? <CurriculumVitae setSelectedComponent={setSelectedComponent}/>
  //   : selectedComponent === "Contact" ? <Contact setSelectedComponent={setSelectedComponent}/>
  //   : "Cannot find Component")
  
  return (
      <main className={styles.main}>
        <NavBar/>
        <div className={styles.scroll}>
          <Hero/>
          <CurriculumVitae/>
          <About/>
          <Portfolio/>
          <Hobbies/>
          <Politics/>
          <Contact/>
        </div>
        

        {/* {visibleComponent} */}
        </main>
    
  )
}
