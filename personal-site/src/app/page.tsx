import styles from './page.module.css'
import { PageComponent } from '@/types'
import { useState } from 'react'

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState<PageComponent>("Hero")
  


  const visibleComponent = (selectedComponent === "Hero" ? <Hero selected={setSelectedComponent}/> 
    : selectedComponent === "About" ? <About selected={setSelectedComponent}/> 
    : selectedComponent === "Hobbies" ? <Hobbies selected={setSelectedComponent}/>
    : selectedComponent === "PersonalProjects" ? <PersonalProjects selected={setSelectedComponent}/>
    : selectedComponent === "Politics" ? <Politics selected={setSelectedComponent}/>
    : selectedComponent === "ProfessionalHistory" ? <ProfessionalHistory selected={setSelectedComponent}/>
    : "Cannot find Component")
  
  return (
      <>{visibleComponent}</>
    
  )
}
