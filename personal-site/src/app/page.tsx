"use client"
import styles from './page.module.css';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Hobbies from '@/components/Hobbies';
import PersonalProjects from '@/components/PersonalProjects';
import Politics from '@/components/Politics';
import ProfessionalHistory from '@/components/ProfessionalHistory';
import { PageComponent } from '@/types';
import { useState } from 'react';
import { MouseEvent } from 'react';
import Contact from '@/components/Contact';

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState<PageComponent>("Hero")
  
  const visibleComponent = (selectedComponent === "Hero" ? <Hero setSelectedComponent={setSelectedComponent}/> 
    : selectedComponent === "About" ? <About setSelectedComponent={setSelectedComponent}/> 
    : selectedComponent === "Hobbies" ? <Hobbies setSelectedComponent={setSelectedComponent}/>
    : selectedComponent === "PersonalProjects" ? <PersonalProjects setSelectedComponent={setSelectedComponent}/>
    : selectedComponent === "Politics" ? <Politics setSelectedComponent={setSelectedComponent}/>
    : selectedComponent === "ProfessionalHistory" ? <ProfessionalHistory setSelectedComponent={setSelectedComponent}/>
    : selectedComponent === "Contact" ? <Contact setSelectedComponent={setSelectedComponent}/>
    : "Cannot find Component")
  
  return (
      <main className={styles.main}>
        {visibleComponent}
        </main>
    
  )
}
