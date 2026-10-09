export interface ProjectLink {
  label: string;
  href: string;
}

export interface StackItem {
  label: string;
  icon?: string;
  initials?: string;
  onDark?: boolean;
}

export interface LimitationItem {
  title: string;
  detail: string;
  mitigation?: string;
}

export interface ProjectSection {
  title: string;
  body?: string;
  items?: string[];
}

export interface ProjectCredentials {
  label?: string;
  username: string;
  password: string;
}

export interface ProjectCategory {
  id: string;
  order: string;
  label: string;
  caption: string;
  description: string;
}

export interface ProjectType {
  id: string;
  categoryId: string;
  title: string;
  subtitle: string;
  summary: string;
  image?: string;
  imageClass?: string;
  highlights: string[];
  sections: ProjectSection[];
  stack: StackItem[];
  limitations: LimitationItem[];
  links: ProjectLink[];
  credentials?: ProjectCredentials;
}