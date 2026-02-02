
import React, { useState } from 'react';
import { VIDEOS, PODCASTS } from '../mockData';

const Multimedia: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);

  return (
    <div className="w-full">
      {/* MMTV Hero Section */}
      <section className="bg-[#0a0a0a] text-white pt-8 pb-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 px-4 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
            <h2 className="text-2xl font-bold tracking-tight">MMTV Ao Vivo</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4">
            {/* Player */}
            <div className="lg:col-span-8">
              <div className="relative group flex items-center justify-center bg-black bg-cover bg-center aspect-video rounded-xl overflow-hidden shadow-2xl" style={{ backgroundImage: `url(${activeVideo.thumbnailUrl})` }}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                <button className="relative z-10 flex items-center justify-center rounded-full size-20 bg-primary/90 text-white shadow-xl hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined fill-icon text-[40px]">play_arrow</span>
                </button>
              </div>
              <div className="mt-4">
                <h1 className="text-xl font-bold">{activeVideo.title}</h1>
                <p className="text-white/60 text-sm mt-1">{activeVideo.description}</p>
              </div>
            </div>
            {/* Playlist Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white/5 border border-white/10 rounded-xl h-full flex flex-col">
                <div className="p-4 border-b border-white/10">
                  <h3 className="font-bold text-lg">A Seguir</h3>
                  <p className="text-white/40 text-xs">MMTV Playlist Oficial</p>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-2 max-h-[480px]">
                  {VIDEOS.map(video => (
                    <button 
                      key={video.id}
                      onClick={() => setActiveVideo(video)}
                      className={`flex w-full items-center gap-4 p-3 rounded-lg border transition-colors ${activeVideo.id === video.id ? 'bg-primary/20 border-primary/30' : 'hover:bg-white/5 border-transparent'}`}
                    >
                      <div className="relative w-24 aspect-video rounded overflow-hidden flex-shrink-0" style={{ backgroundImage: `url(${video.thumbnailUrl})`, backgroundSize: 'cover' }}>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className={`material-symbols-outlined fill-icon ${activeVideo.id === video.id ? 'text-primary' : 'text-white/60'} text-sm`}>play_circle</span>
                        </div>
                      </div>
                      <div className="flex flex-col min-w-0 text-left">
                        <p className="text-white text-sm font-bold truncate">{video.title}</p>
                        <p className="text-white/40 text-xs">{activeVideo.id === video.id ? 'AGORA' : video.duration}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-20 py-12">
        <div className="flex items-center justify-between mb-8 px-4">
          <h2 className="text-[#111418] dark:text-white text-2xl font-bold">Podcasts Tela Less</h2>
          <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
            Ver Todos <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PODCASTS.map(podcast => (
            <div key={podcast.id} className="group flex flex-col gap-3">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[#f0f2f5] shadow-sm hover:shadow-lg transition-all" style={{ backgroundImage: `url(${podcast.imageUrl})`, backgroundSize: 'cover' }}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 bg-primary text-white size-12 rounded-full flex items-center justify-center transition-all shadow-xl">
                    <span className="material-symbols-outlined fill-icon">play_arrow</span>
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-[#111418] dark:text-white font-bold text-base group-hover:text-primary transition-colors">{podcast.title}</h4>
                <p className="text-[#5f758c] text-xs font-medium">{podcast.frequency} • {podcast.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gospel Banner */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-20 py-12 border-t border-[#f0f2f5] dark:border-white/10">
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-primary">
                <span className="material-symbols-outlined fill-icon">auto_awesome</span>
                <span className="font-bold tracking-widest uppercase text-xs">Destaque Espiritual</span>
              </div>
              <h2 className="text-3xl font-bold">MM Gospel: Louvor e Adoração</h2>
              <p className="text-[#5f758c] dark:text-white/70 text-lg">Acompanhe as transmissões exclusivas das maiores celebrações e coros de Angola em alta definição.</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold">Assistir Agora</button>
                <button className="bg-white dark:bg-white/10 text-[#111418] dark:text-white px-8 py-3 rounded-xl font-bold border border-[#f0f2f5] dark:border-transparent">Explorar Playlist</button>
              </div>
            </div>
            <div className="relative w-full lg:w-1/3 aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundImage: `url(https://picsum.photos/seed/gospel/600/600)`, backgroundSize: 'cover' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Multimedia;
