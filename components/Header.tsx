
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-[#1a2632] border-b border-solid border-[#f0f2f5] dark:border-gray-700 sticky top-0 z-50 transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
              </svg>
            </div>
            <h1 className="text-xl font-black uppercase tracking-tighter text-[#111418] dark:text-white">Tela Less</h1>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) => `hover:text-primary transition-colors text-sm font-semibold ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`}>Home</NavLink>
            <NavLink to="/economia" className={({ isActive }) => `hover:text-primary transition-colors text-sm font-semibold ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`}>Economia</NavLink>
            <NavLink to="/politica" className={({ isActive }) => `hover:text-primary transition-colors text-sm font-semibold ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`}>Política</NavLink>
            <Link to="/admin" className="hover:text-primary transition-colors text-sm font-semibold flex items-center gap-1 text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined text-base">settings</span> Admin Panel
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#f0f2f5] dark:hover:bg-gray-700 rounded-lg transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-[#111418] dark:text-white">
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#1a2632] border-t border-[#f0f2f5] dark:border-gray-700 p-4 absolute w-full shadow-lg z-50">
           <nav className="flex flex-col gap-4">
             <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold">Home</Link>
             <Link to="/economia" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold">Economia</Link>
             <Link to="/politica" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold">Política</Link>
             <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold">Admin Panel</Link>
           </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
