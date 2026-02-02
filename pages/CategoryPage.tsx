
import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../mockData';

interface CategoryPageProps {
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const filteredArticles = ARTICLES.filter(a => a.category === category);

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-12">
      <header className="mb-12 border-b-4 border-primary/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">{category}</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">Acompanhe as principais notícias de {category.toLowerCase()} em Angola e no mundo.</p>
        </div>
        <div className="flex gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
           <span>Tela Less</span>
           <span>/</span>
           <span className="text-primary">{category}</span>
        </div>
      </header>

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.map(article => (
            <Link key={article.id} to={`/article/${article.id}`} className="group bg-white dark:bg-[#1a2632] rounded-2xl overflow-hidden border border-[#f0f2f5] dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                   <span className="text-[10px] font-black uppercase text-primary tracking-widest">{article.author}</span>
                   <span className="text-[10px] font-bold text-gray-400 uppercase">{article.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors mb-3 line-clamp-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                   <span className="text-xs font-bold text-gray-400">{article.readTime} min de leitura</span>
                   <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
           <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">newspaper</span>
           <p className="text-gray-500">Nenhum artigo encontrado nesta categoria.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
