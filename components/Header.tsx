
import React, { useState, useEffect } from 'react';
import { BRAND_NAME, CONTACTS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-blue-100' 
        : 'bg-white/50 backdrop-blur-sm py-5 border-b border-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Логотип */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
            <i className="fa-solid fa-plus-plus text-xl"></i>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">{BRAND_NAME}</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Новокузнецк</span>
          </div>
        </a>
        
        {/* Навигация */}
        <nav className="hidden lg:flex items-center gap-2 p-1 bg-slate-100/50 rounded-2xl border border-slate-200/50">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="px-5 py-2 rounded-xl text-sm font-bold text-slate-600 hover:text-blue-600 hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Правая часть: Информация о записи */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider mb-0.5">Запись на консультацию:</span>
            <a href={CONTACTS.phones[0].link} className="text-base font-black text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2">
              <i className="fa-solid fa-phone text-blue-500 text-sm"></i>
              {CONTACTS.phones[0].value}
            </a>
          </div>
          
          {/* Мобильная кнопка вызова (только иконка) */}
          <a href={CONTACTS.phones[0].link} className="md:hidden w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
