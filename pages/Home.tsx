
import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES, VIDEOS } from '../mockData';

const Home: React.FC = () => {
  const mainArticle = ARTICLES[0];
  const angolaArticles = ARTICLES.slice(1, 3);

  return (
    <div>
      {/* Breaking News Ticker */}
      <div className="bg-white dark:bg-[#1a2632] border-b border-[#f0f2f5] dark:border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 py-2 overflow-hidden flex items-center gap-4">
          <span className="bg-accent-red text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider whitespace-nowrap">Última Hora</span>
          <div className="flex gap-8 items-center animate-marquee whitespace-nowrap text-sm font-medium">
            <p>• Presidente inaugura novo Aeroporto Internacional Dr. António Agostinho Neto</p>
            <p>• Cotação do petróleo sobe no mercado internacional impactando economia nacional</p>
            <p>• Seleção nacional prepara-se para o próximo confronto no CAN</p>
            <p>• Presidente inaugura novo Aeroporto Internacional Dr. António Agostinho Neto</p>
            <p>• Cotação do petróleo sobe no mercado internacional impactando economia nacional</p>
          </div>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 md:px-10 py-8">
        {/* Hero Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Big Story Main */}
          <div className="lg:col-span-2">
            <Link to={`/article/${mainArticle.id}`} className="block relative group cursor-pointer overflow-hidden rounded-xl shadow-lg">
              <div 
                className="w-full aspect-[16/9] bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: `url(${mainArticle.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 p-6 md:p-8 w-full">
                  <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded mb-3 inline-block uppercase">{mainArticle.category}</span>
                  <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight mb-3 group-hover:underline">{mainArticle.title}</h2>
                  <p className="text-gray-200 text-sm md:text-base line-clamp-2 mb-4">{mainArticle.excerpt}</p>
                  <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors">Ler Reportagem Completa</button>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar Most Read */}
          <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#f0f2f5] dark:border-gray-700 p-6">
            <h3 className="text-lg font-bold border-b border-primary/20 pb-4 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">trending_up</span> Mais Lidas
            </h3>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex gap-4 group cursor-pointer">
                  <span className="text-3xl font-black text-[#f0f2f5] dark:text-gray-700 group-hover:text-primary transition-colors">0{num}</span>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase mb-1">Economia</p>
                    <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">Notícia de destaque número {num} que os leitores estão a consumir imenso.</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Angola */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6 border-b-2 border-[#f0f2f5] dark:border-gray-700">
            <h2 className="text-2xl font-bold border-b-2 border-primary pb-2 -mb-[2px]">Angola</h2>
            <a className="text-primary text-sm font-bold flex items-center hover:underline" href="#">Ver tudo <span className="material-symbols-outlined text-sm">chevron_right</span></a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTICLES.slice(0, 4).map(article => (
              <Link key={article.id} to={`/article/${article.id}`} className="group cursor-pointer">
                <div 
                  className="aspect-video bg-cover bg-center rounded-lg mb-3 shadow-sm group-hover:shadow-md transition-all overflow-hidden" 
                  style={{ backgroundImage: `url(${article.imageUrl})` }}
                >
                  <div className="w-full h-full bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase">{article.date}</span>
                <h4 className="font-bold text-base mt-1 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h4>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Multimedia Section */}
      <section className="bg-[#0a1219] py-16 text-white mt-12 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="size-10 bg-primary flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-white">play_circle</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">MMTV</h2>
              <p className="text-gray-400 text-sm">O seu canal de notícias e documentários exclusivos</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VIDEOS.map(video => (
              <div key={video.id} className="group relative cursor-pointer">
                <div 
                  className="aspect-video bg-cover bg-center rounded-xl overflow-hidden relative" 
                  style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-white/80 group-hover:text-white transition-all transform group-hover:scale-110">play_circle</span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-2 py-1 rounded">{video.duration}</div>
                </div>
                <h4 className="mt-4 font-bold text-lg group-hover:text-primary transition-colors">{video.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
