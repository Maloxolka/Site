
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import { SERVICES, CONTACTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-700">
      <Header />
      <Hero />
      
      {/* Секция услуг */}
      <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-4">Наши направления</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Профессиональная помощь</h2>
            <p className="text-lg text-slate-600 leading-relaxed">Мы применяем надежные технологии и комплектующие ведущих производителей для создания качественных изделий.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                  <img src={service.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={service.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                       <i className={`fa-solid ${service.icon} text-xl`}></i>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold mb-4 text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <div className="pt-5 border-t border-slate-50">
                    <a href="#contacts" className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                      Записаться <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      
      {/* Секция преимуществ */}
      <section className="py-24 bg-blue-700 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'Индивидуальный подход', desc: 'Каждая приемная гильза изготавливается по персональному слепку вашей культи для обеспечения идеальной посадки.' },
              { num: '02', title: 'Помощь с документами', desc: 'Бесплатные консультации по вопросам получения протезов через государственные программы компенсации (ФСС).' },
              { num: '03', title: 'Сервисная поддержка', desc: 'Гарантийное обслуживание, ремонт и замена комплектующих на протяжении всего срока эксплуатации.' }
            ].map((item, i) => (
              <div key={i} className="space-y-4 group">
                <div className="text-5xl font-black text-blue-300/30 group-hover:text-white/40 transition-colors duration-500">{item.num}</div>
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-blue-100/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer id="contacts" className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2 space-y-8">
               <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/20">
                    <i className="fa-solid fa-plus-plus text-2xl"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black uppercase tracking-tighter">ЕЦПО</span>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Протезно-ортопедический центр</span>
                  </div>
               </div>
               <p className="text-slate-400 max-w-md text-lg leading-relaxed">
                 Ваш надежный партнер в возвращении к полноценной жизни. Современное производство и профессиональная адаптация в Новокузнецке.
               </p>
            </div>
            
            <div>
              <h4 className="font-extrabold text-xl mb-8 flex items-center gap-2">
                <span className="w-6 h-1 bg-blue-500 rounded-full"></span>
                Меню
              </h4>
              <ul className="space-y-5 text-slate-400 font-bold">
                <li><a href="#services" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                  <i className="fa-solid fa-chevron-right text-[10px] text-blue-500 opacity-0 group-hover:opacity-100"></i> Услуги
                </a></li>
                <li><a href="#reviews" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                  <i className="fa-solid fa-chevron-right text-[10px] text-blue-500 opacity-0 group-hover:opacity-100"></i> Отзывы
                </a></li>
                <li><a href="#contacts" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                  <i className="fa-solid fa-chevron-right text-[10px] text-blue-500 opacity-0 group-hover:opacity-100"></i> Контакты
                </a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-extrabold text-xl mb-8 flex items-center gap-2">
                <span className="w-6 h-1 bg-blue-500 rounded-full"></span>
                Связь
              </h4>
              <ul className="space-y-6 text-slate-400 font-medium">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-location-dot text-blue-500"></i>
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-bold mb-1">{CONTACTS.address}</div>
                    <span className="opacity-60">{CONTACTS.district}</span>
                  </div>
                </li>
                {CONTACTS.phones.map((phone, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-phone text-blue-500"></i>
                    </div>
                    <a href={phone.link} className="hover:text-white font-bold transition-colors">
                      {phone.value}
                      <span className="block text-[10px] opacity-40 uppercase tracking-widest">{phone.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-900/50 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <div>© 2025 ЕЦПО НОВОКУЗНЕЦК</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-500">Политика конфиденциальности</a>
              <a href="#" className="hover:text-blue-500 text-red-400/80 uppercase">Имеются противопоказания</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
