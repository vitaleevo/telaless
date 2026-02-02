
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

export enum AppRoute {
  HOME = '/',
  ARTICLE = '/article/:id',
  ECONOMIA = '/economia',
  POLITICA = '/politica',
  ADMIN = '/admin',
  EDITOR = '/admin/editor'
}
