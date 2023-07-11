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

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState<PageComponent>("Hero")
  
  // function handleClick (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void {
  //   console.log((event.target as any).value, (event.target as any).name)
  //   setSelectedComponent((event.target as any).name)
  // }
  
  const visibleComponent = (selectedComponent === "Hero" ? <Hero setSelectedComponent={setSelectedComponent}/> 
    : selectedComponent === "About" ? <About setSelectedComponent={setSelectedComponent}/> 
    : selectedComponent === "Hobbies" ? <Hobbies setSelectedComponent={setSelectedComponent}/>
    : selectedComponent === "PersonalProjects" ? <PersonalProjects setSelectedComponent={setSelectedComponent}/>
    : selectedComponent === "Politics" ? <Politics setSelectedComponent={setSelectedComponent}/>
    : selectedComponent === "ProfessionalHistory" ? <ProfessionalHistory setSelectedComponent={setSelectedComponent}/>
    : "Cannot find Component")
  
  return (
      <>{visibleComponent}</>
    
  )
}
