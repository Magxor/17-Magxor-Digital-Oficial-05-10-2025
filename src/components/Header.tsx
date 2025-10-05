import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    handleScrollToTop();
  };

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contacto', label: 'Contacto' },
    { path: '/trabaja-con-nosotros', label: 'Trabajá con Nosotros' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={handleScrollToTop}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://i.postimg.cc/VNLywLMy/Logo-Magxor.png"
              alt="Magxor Digital"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-white">Magxor Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleScrollToTop}
                className={`text-gray-300 hover:text-white transition-colors ${
                  location.pathname === item.path ? 'text-blue-500' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            id="header-mobile-menu-toggle-button"
            className="md:hidden text-white hover:text-blue-500 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors ${
                    location.pathname === item.path ? 'text-blue-500 bg-gray-800' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}