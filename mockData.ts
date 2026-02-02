
import { Article, Video, Podcast } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Modernização de Luanda: Novos projetos de infraestrutura transformam a capital angolana',
    category: 'Grande Destaque',
    excerpt: 'O governo provincial anuncia novos investimentos de grande escala em mobilidade urbana, saneamento e habitação social para os próximos cinco anos.',
    content: `Angola tem demonstrado uma crescente proatividade no cenário diplomático internacional, posicionando-se como um mediador chave em conflitos regionais e um destino atrativo para investimentos estrangeiros. A recente postura do executivo reflete uma mudança estratégica que visa não apenas fortalecer as relações bilaterais, mas também diversificar a economia nacional.

"O papel de Angola na mediação do conflito no Leste da RDC é prova da nossa maturidade diplomática e do compromisso com a paz continental." — Ministro das Relações Exteriores

Especialistas apontam que a estabilidade política interna tem sido o pilar fundamental para esta nova projeção externa. Com a implementação de reformas estruturantes e a abertura ao mercado global, o país tem conseguido atrair a atenção de grandes potências mundiais, desde a União Europeia até os Estados Unidos e a China.`,
    imageUrl: 'https://picsum.photos/seed/luanda/1200/800',
    author: 'Redação Tela Less',
    date: '12 de Outubro, 2023',
    readTime: '8 min',
    status: 'Publicado'
  },
  {
    id: '2',
    title: 'Novos polos industriais em Benguela prometem 5 mil empregos',
    category: 'Angola',
    excerpt: 'Investimentos em infraestrutura industrial devem impulsionar a economia local.',
    imageUrl: 'https://picsum.photos/seed/benguela/600/400',
    author: 'Equipa Editorial',
    date: 'Há 45 minutos',
    readTime: '4 min',
    status: 'Publicado'
  },
  {
    id: '3',
    title: 'BNA mantém taxas de juro para controlar inflação nacional',
    category: 'Angola',
    excerpt: 'Comité de Política Monetária decide manter o curso atual.',
    imageUrl: 'https://picsum.photos/seed/bank/600/400',
    author: 'Economia Today',
    date: 'Há 2 horas',
    readTime: '5 min',
    status: 'Publicado'
  }
];

export const VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Documentário: O Renascimento do Caminho de Ferro de Benguela',
    description: 'Série especial Tela Less sobre infraestruturas estratégicas.',
    duration: '12:45',
    thumbnailUrl: 'https://picsum.photos/seed/train/640/360',
    views: '3.4k'
  },
  {
    id: 'v2',
    title: 'Economia Hoje: O Futuro das Startups em Luanda',
    description: 'Entrevista exclusiva com líderes do ecossistema tecnológico.',
    duration: '05:20',
    thumbnailUrl: 'https://picsum.photos/seed/startup/640/360'
  }
];

export const PODCASTS: Podcast[] = [
  {
    id: 'p1',
    title: 'Café com Notícias',
    frequency: 'Diário',
    duration: '20 min',
    imageUrl: 'https://picsum.photos/seed/p1/400/400'
  },
  {
    id: 'p2',
    title: 'Futuro Hoje',
    frequency: 'Semanal',
    duration: '45 min',
    imageUrl: 'https://picsum.photos/seed/p2/400/400'
  }
];
