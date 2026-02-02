
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../mockData';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = ARTICLES.find(a => a.id === id) || ARTICLES[0];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-6 text-sm">
        <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-primary">Início</Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-500 dark:text-gray-400">Angola</span>
        <span className="text-gray-400">/</span>
        <span className="text-primary font-medium">{article.category}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Share Bar */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-[120px] flex flex-col gap-4">
            <button className="size-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined">chat</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined">alternate_email</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <article className="lg:col-span-8 flex flex-col">
          <header className="mb-8">
            <h1 className="text-[#111418] dark:text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-100 dark:border-gray-800">
              <div className="size-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(https://picsum.photos/seed/author/100/100)` }}></div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 dark:text-gray-100">Por {article.author}</span>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <time>{article.date}</time>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span> {article.readTime} de leitura
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="mb-8">
            <div 
              className="w-full h-[400px] md:h-[500px] bg-center bg-no-repeat bg-cover rounded-xl" 
              style={{ backgroundImage: `url(${article.imageUrl})` }}
            ></div>
            <div className="mt-3 flex justify-between items-start px-2 text-xs text-gray-500">
              <p className="italic">Assembleia Nacional e o skyline de Luanda em foco.</p>
              <p className="uppercase tracking-wider">Foto: Tela Less / Direitos Reservados</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed text-lg">
             <p>{article.excerpt}</p>
             <div className="whitespace-pre-line">
                {article.content || "Conteúdo detalhado do artigo seria exibido aqui..."}
             </div>
             
             <blockquote className="my-10 pl-6 border-l-4 border-primary italic bg-primary/5 p-6 rounded-r-lg">
                <p className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-2">"O compromisso com o jornalismo de qualidade é o que nos move todos os dias para trazer a verdade."</p>
                <footer className="text-sm font-bold text-primary">— Conselho Editorial</footer>
             </blockquote>
          </div>

          {/* Newsletter Section */}
          <section className="mt-12 p-8 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Receba o essencial da Tela Less</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Inscreva-se na nossa newsletter matinal e comece o dia bem informado.</p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <input className="bg-white dark:bg-background-dark border-gray-200 dark:border-gray-700 rounded-lg flex-1 md:min-w-[240px] px-4 py-2" placeholder="Seu e-mail" type="email" />
                <button className="bg-primary text-white font-bold px-6 py-2 rounded-lg">Subscrever</button>
              </div>
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-3 flex flex-col gap-10">
          <section>
            <h4 className="text-lg font-bold mb-4 border-l-4 border-primary pl-3">Relacionadas</h4>
            <div className="flex flex-col gap-6">
              {ARTICLES.filter(a => a.id !== id).map(a => (
                <Link key={a.id} to={`/article/${a.id}`} className="group flex gap-4">
                  <div className="min-w-[80px] size-20 rounded-lg bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: `url(${a.imageUrl})` }}></div>
                  <div>
                    <h5 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors">{a.title}</h5>
                    <span className="text-xs text-gray-400 mt-1 block">{a.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-background-dark text-white rounded-xl overflow-hidden">
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">MMTV Directo</span>
              <div className="size-2 rounded-full bg-red-600 animate-pulse"></div>
            </div>
            <div className="relative aspect-video group cursor-pointer">
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-6xl text-white">play_circle</span>
              </div>
              <img className="w-full h-full object-cover" src="https://picsum.photos/seed/live/400/225" />
            </div>
            <div className="p-4">
              <h4 className="text-sm font-bold">Edição da Tarde: O balanço das visitas oficiais</h4>
              <p className="text-xs text-gray-400 mt-1 italic">Ao vivo de Luanda</p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default ArticleDetail;
