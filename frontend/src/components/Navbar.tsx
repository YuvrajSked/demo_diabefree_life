'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/programs', label: 'Programs' },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold hover:text-blue-200 transition-colors"
            onClick={handleNavClick}
          >
            DiabeFree Life
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-blue-700 text-white'
                    : 'hover:bg-blue-500 hover:text-white'
                }`}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
              onClick={() => alert('Book Free Session - Coming Soon!')}
            >
              Book Free Session
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-200 hover:border-blue-200"
            onClick={handleMenuToggle}
          >
            <FontAwesomeIcon 
              icon={faBars} 
              className={`h-4 w-4 transition-transform duration-200 ${
                isMenuOpen ? 'rotate-90' : ''
              }`}
            />
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700 rounded-lg mb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-100 hover:bg-blue-600 hover:text-white'
                }`}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <button
              className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
              onClick={() => {
                alert('Book Free Session - Coming Soon!');
                handleNavClick();
              }}
            >
              Book Free Session
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
