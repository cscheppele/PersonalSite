import React from 'react'; // Import React

export interface NavBarProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
  portfolioRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  hobbiesRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
  politicsRef: React.RefObject<HTMLDivElement | null>;
  curriculumVitaeRef: React.RefObject<HTMLDivElement | null>;
}

// export type PageComponent = "Hero" | "About" | "Politics" | "Hobbies" | "Portfolio" | "CurriculumVitae" | "Contact"