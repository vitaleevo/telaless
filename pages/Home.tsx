
import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../mockData';

const Home: React.FC = () => {
  const mainArticle = ARTICLES[0];
  const secondaryArticles = ARTICLES.slice(1, 5);

  return (
    <div>
      {/* Breaking News Ticker */}
      <div className="bg-white dark:bg-[#1a2632] border-b border-[#f0f2f5] dark:border-gray-700 transition-colors">
        <div className="max-w-[1200px] mx-auto px-4 py-2 overflow-hidden flex items-center gap-4">
          <span className="bg-accent-red text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider whitespace-nowrap shadow-sm">Última Hora</span>
          <div className="flex gap-8 items-center animate-marquee whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300">
            <p>• Presidente inaugura novo Aeroporto Internacional Dr. António Agostinho Neto</p>
            <p>• Cotação do petróleo sobe no mercado internacional impactando economia nacional</p>
            <p>• Reforma administrativa visa redução de custos em Luanda</p>
            <p>• Presidente inaugura novo Aeroporto Internacional Dr. António Agostinho Neto</p>
            <p>• Cotação do petróleo sobe no mercado internacional impactando economia nacional</p>
          </div>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 md:px-10 py-8">
        {/* Hero Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story */}
          <div className="lg:col-span-2">
            <Link to={`/article/${mainArticle.id}`} className="block relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl">
              <div 
                className="w-full aspect-[16/9] bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url(${mainArticle.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 p-6 md:p-10 w-full">
                  <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded mb-4 inline-block uppercase tracking-widest">{mainArticle.category}</span>
                  <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4 group-hover:underline decoration-primary underline-offset-8 transition-all">{mainArticle.title}</h2>
                  <p className="text-gray-200 text-sm md:text-lg line-clamp-2 mb-6 max-w-2xl">{mainArticle.excerpt}</p>
                  <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg hover:shadow-primary/20">Ler Reportagem Completa</button>
                </div>
              </div>
            </Link>
          </div>

          {/* Most Read */}
          <div className="bg-white dark:bg-[#1a2632] rounded-2xl border border-[#f0f2f5] dark:border-gray-700 p-8 transition-colors">
            <h3 className="text-xl font-black border-b border-primary/20 pb-5 mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">trending_up</span> Mais Lidas
            </h3>
            <div className="space-y-8">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex gap-5 group cursor-pointer">
                  <span className="text-4xl font-black text-[#f0f2f5] dark:text-gray-700 group-hover:text-primary transition-all duration-300">0{num}</span>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-primary uppercase mb-1 tracking-widest">Destaque</p>
                    <h4 className="font-bold text-sm leading-snug text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">Tópico relevante de hoje que atrai milhares de leitores em Angola.</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: News Feed */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8 border-b-2 border-[#f0f2f5] dark:border-gray-700">
            <h2 className="text-2xl font-black border-b-2 border-primary pb-3 -mb-[2px] uppercase tracking-tighter">Últimas Notícias</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {secondaryArticles.map(article => (
              <Link key={article.id} to={`/article/${article.id}`} className="group cursor-pointer flex flex-col">
                <div 
                  className="aspect-video bg-cover bg-center rounded-xl mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300 overflow-hidden" 
                  style={{ backgroundImage: `url(${article.imageUrl})` }}
                >
                  <div className="w-full h-full bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">{article.category}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">{article.date}</span>
                </div>
                <h4 className="font-bold text-base text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors line-clamp-2 leading-tight">{article.title}</h4>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
