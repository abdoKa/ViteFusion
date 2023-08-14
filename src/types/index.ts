export type FrontEndDeveloper = {
  name: string;
  yearsOfExperience: number;
  primaryFramework: "React" | "Vue" | "Angular" | "Svelte" | "Other";
  proficientLanguages: string[];
  hasExperienceWithResponsiveDesign: boolean;
  familiarWithVersionControl: boolean;
  portfolioURL?: string;
  certifications?: string[];
};
