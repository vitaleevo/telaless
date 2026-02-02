
import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../mockData';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-white dark:bg-[#1a242f] border-r border-[#dae0e7] dark:border-[#2d3748] flex flex-col justify-between p-4">
        <div className="flex flex-col gap-8">
          <div className="flex gap-3 items-center px-2">
            <Link to="/" className="bg-primary rounded-lg size-10 flex items-center justify-center text-white">
              <span className="material-symbols-outlined">newspaper</span>
            </Link>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none">Tela Less</h1>
              <p className="text-[#5e758d] text-xs">Admin CMS</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            <Link to="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-semibold">Dashboard</p>
            </Link>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#5e758d] hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined">description</span>
              <p className="text-sm font-medium">Artigos</p>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#5e758d] hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined">perm_media</span>
              <p className="text-sm font-medium">Multimídia</p>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#5e758d] hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined">group</span>
              <p className="text-sm font-medium">Usuários</p>
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <Link to="/admin/editor" className="flex w-full items-center justify-center rounded-lg h-11 bg-primary text-white text-sm font-bold shadow-sm">
            <span className="material-symbols-outlined mr-2">add</span> Novo Artigo
          </Link>
          <div className="border-t pt-4">
            <div className="flex items-center gap-3 px-2">
              <div className="size-8 rounded-full bg-cover" style={{ backgroundImage: `url(https://picsum.photos/seed/user/50/50)` }}></div>
              <div className="flex flex-col overflow-hidden">
                <p className="text-sm font-semibold truncate">Marcos Silva</p>
                <p className="text-[10px] text-[#5e758d] uppercase">Editor Senior</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-black tracking-tight">Bem-vindo de volta, Editor</h2>
              <p className="text-[#5e758d] text-base">Aqui está o resumo das suas publicações hoje.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/admin/editor" className="flex items-center px-5 h-10 bg-primary text-white rounded-lg text-sm font-bold">
                <span className="material-symbols-outlined mr-2">edit</span> Novo Artigo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-6 bg-white dark:bg-[#1a242f] rounded-xl border border-[#dae0e7] shadow-sm">
              <div className="flex justify-between mb-2">
                <p className="text-[#5e758d] text-sm uppercase font-bold tracking-wider">Artigos</p>
                <span className="material-symbols-outlined text-primary">check_circle</span>
              </div>
              <p className="text-3xl font-bold">1,284</p>
              <div className="mt-2 text-[#078838] text-xs font-bold bg-[#078838]/10 px-2 py-0.5 rounded w-fit">+2.4%</div>
            </div>
            <div className="p-6 bg-white dark:bg-[#1a242f] rounded-xl border border-[#dae0e7] shadow-sm">
              <div className="flex justify-between mb-2">
                <p className="text-[#5e758d] text-sm uppercase font-bold tracking-wider">Pendentes</p>
                <span className="material-symbols-outlined text-amber-500">pending</span>
              </div>
              <p className="text-3xl font-bold">12</p>
              <p className="text-xs text-gray-500 mt-2">Aguardando aprovação</p>
            </div>
            <div className="p-6 bg-white dark:bg-[#1a242f] rounded-xl border border-[#dae0e7] shadow-sm">
              <div className="flex justify-between mb-2">
                <p className="text-[#5e758d] text-sm uppercase font-bold tracking-wider">Visualizações</p>
                <span className="material-symbols-outlined text-blue-500">visibility</span>
              </div>
              <p className="text-3xl font-bold">45.2k</p>
              <div className="mt-2 text-[#078838] text-xs font-bold bg-[#078838]/10 px-2 py-0.5 rounded w-fit">+12.5%</div>
            </div>
            <div className="p-6 bg-white dark:bg-[#1a242f] rounded-xl border border-[#dae0e7] shadow-sm">
              <div className="flex justify-between mb-2">
                <p className="text-[#5e758d] text-sm uppercase font-bold tracking-wider">Feedback</p>
                <span className="material-symbols-outlined text-emerald-500">chat_bubble</span>
              </div>
              <p className="text-3xl font-bold">89</p>
              <div className="mt-2 text-[#078838] text-xs font-bold bg-[#078838]/10 px-2 py-0.5 rounded w-fit">+5%</div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white dark:bg-[#1a242f] rounded-xl border border-[#dae0e7] overflow-hidden shadow-sm">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold">Artigos Recentes</h3>
              <button className="text-primary text-sm font-bold">Ver todos</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-[#5e758d] uppercase">Título</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#5e758d] uppercase">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#5e758d] uppercase">Categoria</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#5e758d] uppercase text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {ARTICLES.map(a => (
                    <tr key={a.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${a.imageUrl})` }}></div>
                          <span className="text-sm font-semibold line-clamp-1">{a.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">{a.status}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#5e758d]">{a.category}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[#5e758d] hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
