export interface TextSegment {
  text: string
  bold?: boolean
}

export interface Principle {
  num: string
  title: string
  description: string
}

export interface SkillCategory {
  label: string
  skills: string[]
}

export interface ProjectItem {
  text: string
  highlight?: string
}

export interface Project {
  title: string
  items: ProjectItem[]
}

export interface TimelineEntry {
  company: string
  role: string
  period: string
  bullets: string[]
  projects: Project[]
}

export interface EduEntry {
  period: string
  institution: string
  course: string
}

export interface Cert {
  title: string
  date: string
  url: string
}

export interface ContactItem {
  label: string
  href: string
}

export interface NavLink {
  label: string
  href: string
}
