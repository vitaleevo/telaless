
export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content?: string;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
  status?: 'Publicado' | 'Em Revisão' | 'Rascunho';
}

export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnailUrl: string;
  views?: string;
}

export interface Podcast {
  id: string;
  title: string;
  frequency: string;
  duration: string;
  imageUrl: string;
}

export enum AppRoute {
  HOME = '/',
  ARTICLE = '/article/:id',
  MULTIMEDIA = '/multimedia',
  ADMIN = '/admin',
  EDITOR = '/admin/editor'
}
