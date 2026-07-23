export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: readonly SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Java", "Python", "SQL", "JavaScript"]
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Flask", "REST APIs", "JWT", "Firebase Authentication"]
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"]
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Linux", "Git", "GitHub", "VS Code"]
  },
  {
    title: "Data Science",
    skills: ["NumPy", "Pandas", "Matplotlib", "Feature Engineering", "Data Preprocessing"]
  },
  {
    title: "Core CS",
    skills: ["DSA", "DBMS", "Operating Systems", "Computer Networks", "SDLC"]
  }
];
