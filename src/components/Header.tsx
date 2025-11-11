
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', name: 'Inicio' },
    { to: '/menu', name: 'Nuestra Cocina' },
    { to: '/reservations', name: 'Reservas' },
    { to: '/desserts', name: 'Postres' },
    { to: '/about', name: 'Sobre Nosotros' },
    { to: '/contact', name: 'Contacto' },
  ];

  const linkClasses = (path: string) => `
    transition-colors py-2 block text-lg
    ${location.pathname === path
      ? 'text-primary'
      : 'text-stone-700 dark:text-stone-300 hover:text-primary dark:hover:text-primary'
    }
  `;

  return (
    <header className="sticky top-0 z-20 w-full border-b border-primary/20 dark:border-primary/30 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-4 py-3">
            <img src={logo} alt="El Rincón de los Sabores Logo" className="h-28 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-base font-medium lg:flex">
          {navLinks.map(link => (
            <Link key={link.name} to={link.to} className={linkClasses(link.to).replace('block', '')}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
           <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 dark:bg-primary/30 px-5 py-3 text-base font-bold text-primary shadow-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
            <span className="truncate">Iniciar Sesión</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-stone-700 dark:text-stone-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
            <span className="sr-only">Abrir menú</span>
            {isMenuOpen ? (
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background-light dark:bg-background-dark border-t border-primary/20 dark:border-primary/30">
          <nav className="px-4 pt-2 pb-4 space-y-2 text-center">
            {navLinks.map(link => (
              <Link key={link.name} to={link.to} className={linkClasses(link.to)} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 dark:bg-primary/30 px-5 py-3 text-base font-bold text-primary shadow-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
                <span className="truncate">Iniciar Sesión</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
