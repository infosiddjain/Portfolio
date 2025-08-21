export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const navigationItems: NavigationItem[] = [
  { id: "about", label: "ABOUT", href: "/#about" },
  { id: "experience", label: "EXPERIENCE", href: "/#experience" },
  { id: "skills", label: "SKILLS", href: "/#skills" },
  { id: "education", label: "EDUCATION", href: "/#education" },
  { id: "blogs", label: "BLOGS", href: "/blog" },
  { id: "projects", label: "PROJECTS", href: "/#projects" },
] as const;
