
import React from 'react';
import { FULL_BRAND_NAME, GLOBAL_RATING } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden hero-gradient">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="space-y-8 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mx-auto">
            <i className="fa-solid fa-certificate text-blue-500"></i>
            Сертифицированный медицинский центр
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] text-slate-900 tracking-tight">
            Возвращаем <br/><span className="gradient-text">радость</span> движения
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            {FULL_BRAND_NAME} — профессиональная помощь в подборе и изготовлении качественных протезов конечностей. Современные технологии на службе вашего комфорта.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            {/* Указатель вместо кнопки */}
            <div className="flex flex-col items-center gap-3 group">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-blue-600 transition-colors">Листайте вниз</span>
              <a href="#services" className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all animate-bounce">
                <i className="fa-solid fa-arrow-down"></i>
              </a>
            </div>

            <div className="flex items-center gap-4 bg-white/50 backdrop-blur px-6 py-4 rounded-2xl border border-white">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center text-slate-900 shadow-sm">
                    <i className="fa-solid fa-star text-xs"></i>
                  </div>
                  <div className="text-left">
                    <div className="font-black text-lg leading-none text-slate-900">{GLOBAL_RATING}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Рейтинг Яндекс</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 relative w-full max-w-5xl">
          <div className="absolute inset-0 bg-blue-600 rounded-[3rem] blur-[120px] opacity-10"></div>
          <div className="relative h-2 w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
