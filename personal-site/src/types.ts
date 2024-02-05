import React from 'react'; // Import React

export interface NavBarProps {
  heroRef: React.RefObject<HTMLElement>;
  portfolioRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  hobbiesRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
  politicsRef: React.RefObject<HTMLElement>;
  curriculumVitaeRef: React.RefObject<HTMLElement>;
}

// export type PageComponent = "Hero" | "About" | "Politics" | "Hobbies" | "Portfolio" | "CurriculumVitae" | "Contact"