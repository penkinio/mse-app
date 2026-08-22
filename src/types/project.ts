import type { ImageSourcePropType } from 'react-native';

export type ProjectDomain = 'Génie Civil' | 'Génie Électrique' | 'Génie Informatique';

export type Project = {
  id: string;
  title: string;
  description: string;
  domain: ProjectDomain;
  technologies: string[];
  year: number;
  location?: string;
  image?: ImageSourcePropType;
};
