export const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

const SECTION_LABELS = {
  home: "Home",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  experience: "Experience",
  contact: "Contact",
};

const navigation = SECTION_IDS.map((id) => ({
  id,
  label: SECTION_LABELS[id],
}));

export default navigation;
