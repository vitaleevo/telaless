
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#111418] border-t border-[#f0f2f5] dark:border-gray-800 pt-16 pb-8 mt-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-xl font-black uppercase text-[#111418] dark:text-white">Tela Less</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">A sua fonte diária de notícias credíveis em Angola e no mundo. Jornalismo independente, moderno e multimédia.</p>
            <div className="flex gap-4">
              <button className="size-10 bg-[#f0f2f5] dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">share</span>
              </button>
              <button className="size-10 bg-[#f0f2f5] dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">camera</span>
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Secções</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">Angola</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Internacional</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Economia</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Desporto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Institucional</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">Sobre Nós</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Equipa Editorial</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Publicidade</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contactos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Fique Atualizado</h4>
            <p className="text-xs text-gray-500 mb-4">Receba os destaques do dia diretamente no seu e-mail.</p>
            <div className="flex flex-col gap-2">
              <input className="bg-[#f0f2f5] dark:bg-gray-800 border-none rounded-lg text-sm px-4 py-2 focus:ring-1 focus:ring-primary w-full" placeholder="Seu e-mail" type="email" />
              <button className="bg-primary text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Subscrever</button>
            </div>
          </div>
        </div>
        <div className="border-t border-[#f0f2f5] dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2024 Tela Less. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary" href="#">Termos de Uso</a>
            <a className="hover:text-primary" href="#">Privacidade</a>
            <a className="hover:text-primary" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
