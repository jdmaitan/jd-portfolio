export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  detail: string;
}

export const education: EducationItem[] = [
  {
    degree: "Master's Degree in Web Applications and Services Development",
    institution: "Universidad de Alicante",
    location: "Alicante, Spain",
    period: "2025",
    detail:
      "Premio Extraordinario Curso Académico, awarded for the highest academic performance in the cohort.",
  },
  {
    degree: "Bachelor's Degree in Electrical Engineering",
    institution: "Universidad Central de Venezuela",
    location: "Caracas, Venezuela",
    period: "2018",
    detail: "Specialization in Electronics, Computing, and Control.",
  },
];
