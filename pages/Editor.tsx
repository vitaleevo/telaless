
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Editor: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark font-display">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white dark:bg-background-dark px-10 py-3">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-primary">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-lg font-bold">Tela Less Editor</h2>
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">Rascunho</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 border px-4 h-10 rounded-lg text-sm font-bold hover:bg-gray-50">
            <span className="material-symbols-outlined text-lg">visibility</span> Pré-visualizar
          </button>
          <button className="bg-primary text-white px-5 h-10 rounded-lg text-sm font-bold shadow-md hover:bg-blue-700">
            Enviar para Revisão
          </button>
          <div className="size-10 rounded-full bg-gray-200" style={{ backgroundImage: `url(https://picsum.photos/seed/user/50/50)`, backgroundSize: 'cover' }}></div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Writing Area */}
        <div className="flex-1 overflow-y-auto bg-white dark:bg-background-dark p-10">
          <div className="mx-auto max-w-4xl">
            {/* Toolbar */}
            <div className="sticky top-0 z-10 flex items-center justify-center border-b bg-white/95 backdrop-blur-sm py-4 mb-8">
              <div className="flex gap-2 rounded-lg border p-1 bg-white shadow-sm">
                <button className="p-2 hover:bg-gray-100 rounded"><span className="material-symbols-outlined">format_bold</span></button>
                <button className="p-2 hover:bg-gray-100 rounded"><span className="material-symbols-outlined">format_italic</span></button>
                <div className="w-px h-6 bg-gray-200 self-center"></div>
                <button className="p-2 hover:bg-gray-100 rounded"><span className="material-symbols-outlined">format_list_bulleted</span></button>
                <button className="p-2 hover:bg-gray-100 rounded"><span className="material-symbols-outlined">format_list_numbered</span></button>
                <div className="w-px h-6 bg-gray-200 self-center"></div>
                <button className="p-2 hover:bg-gray-100 rounded"><span className="material-symbols-outlined">link</span></button>
                <button className="p-2 hover:bg-gray-100 rounded"><span className="material-symbols-outlined">image</span></button>
              </div>
            </div>

            <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-none p-0 text-5xl font-bold focus:ring-0 placeholder:text-gray-200" 
              placeholder="Título do Artigo"
            />
            <div className="mt-8 flex items-center gap-3 border-b pb-8 mb-8 text-sm text-gray-400">
               <div className="size-6 rounded-full bg-gray-100"></div>
               <span>Adicionar autor...</span>
               <span>•</span>
               <span>Tempo de leitura: 0 min</span>
            </div>
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[600px] border-none p-0 text-xl leading-relaxed focus:ring-0 placeholder:text-gray-200 resize-none" 
              placeholder="Comece a escrever seu artigo aqui..."
            />
          </div>
        </div>

        {/* Sidebar Settings */}
        <aside className="w-80 border-l bg-white overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Configurações</h3>
            <span className="material-symbols-outlined text-gray-400">settings</span>
          </div>
          <div className="space-y-8">
            <section>
              <label className="block text-sm font-semibold mb-2">Categoria</label>
              <select className="w-full rounded-lg border-gray-200 text-sm focus:border-primary focus:ring-primary">
                <option>Selecionar Categoria</option>
                <option>Angola</option>
                <option>Economia</option>
                <option>Desporto</option>
              </select>
            </section>
            
            <section>
              <label className="block text-sm font-semibold mb-2">Tags</label>
              <input className="w-full rounded-lg border-gray-200 text-sm focus:border-primary focus:ring-primary" placeholder="Adicionar tag..." />
            </section>

            <section>
              <label className="block text-sm font-semibold mb-2">Imagem de Destaque</label>
              <div className="aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center p-4 bg-gray-50 hover:border-primary transition-colors cursor-pointer">
                 <span className="material-symbols-outlined text-3xl text-gray-400 mb-2">upload_file</span>
                 <p className="text-xs font-medium text-gray-500">Clique para enviar</p>
              </div>
            </section>

            <section className="pt-4 border-t">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <span className="material-symbols-outlined">search</span>
                <h4 className="text-sm font-bold">Otimização SEO</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase">Slug (URL)</label>
                  <input className="w-full rounded-lg border-gray-200 text-xs mt-1" placeholder="titulo-do-artigo" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase">Meta Description</label>
                  <textarea className="w-full rounded-lg border-gray-200 text-xs mt-1 h-24" placeholder="Resumo para Google..." />
                </div>
              </div>
            </section>
          </div>
          
          <div className="mt-12">
            <button className="w-full py-2.5 rounded-lg border border-red-200 text-red-500 text-xs font-bold hover:bg-red-50">
              Descartar Artigo
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Editor;
