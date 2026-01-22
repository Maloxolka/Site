
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import { SERVICES, CONTACTS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeBandageTab, setActiveBandageTab] = useState(0); // 0: голень, 1: бедро
  const [activeDetailKey, setActiveDetailKey] = useState<string | null>(null);
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const walkingSchoolSteps = [
    {
      id: "early",
      title: "Ранний постоперационный период",
      subtitle: "Первые недели после ампутации",
      description: "Главная цель этого этапа — правильное заживление рубца, уменьшение отека и подготовка организма к будущим нагрузкам.",
      features: [
        { id: 'bandage', name: "Компрессионная терапия (бинтование культи)", interactive: true },
        { id: 'contracture', name: "Профилактика контрактур", interactive: true },
        { id: 'phantom', name: "Работа с фантомными болями", interactive: true },
        { id: 'bed_exercises', name: "Упражнения в постели", interactive: true }
      ],
      icon: "fa-hospital-user",
    },
    {
      id: "late",
      title: "Поздний постоперационный период",
      subtitle: "От выписки до 3-6 месяцев",
      description: "Подготовка культи к первичному протезированию. Мы работаем над укреплением мышц и кожной чувствительностью.",
      features: [
        { id: 'shaping', name: "Формирование формы культи", interactive: true },
        { id: 'desensitization', name: "Массаж и десенсибилизация кожи", interactive: true },
        { id: 'prep_exercises', name: "Общефизическая подготовка", interactive: true },
        { id: 'psychology', name: "Психологическая адаптация", interactive: true }
      ],
      icon: "fa-stethoscope",
    },
    {
      id: "learning",
      title: "Обучение ходьбе на протезе",
      subtitle: "Активная реабилитация",
      description: "Самый ответственный этап. Под руководством инструктора вы заново учитесь чувствовать опору и уверенно шагать.",
      features: [
        { id: 'wearing', name: "Обучение надеванию и снятию протеза", interactive: true },
        { id: 'balance', name: "Упражнения на равновесие и баланс", interactive: true },
        { id: 'gait', name: "Отработка фаз шага", interactive: true },
        { id: 'stairs', name: "Ходьба по лестницам и неровностям", interactive: true }
      ],
      icon: "fa-shoe-prints",
    }
  ];

  const detailContent: Record<string, any> = {
    bandage: {
      title: "Компрессионная терапия",
      text: "Бинтование необходимо для уменьшения послеоперационного отека и подготовки культи к протезированию.",
      tabs: ["Голень", "Бедро"],
      content: [
        {
          text: "Бинтование культи голени выполняется эластичным бинтом средней растяжимости. Давление должно быть плотным внизу и ослабевать кверху.",
          warning: "Если культя посинела — немедленно снимите бинт и перебинтуйте слабее.",
          image: "https://vash-protez.ru/wp-content/uploads/2019/11/bintovanie-kul-ti-goleni.jpg"
        },
        {
          text: "Для бедра используется 'восьмиобразная' техника. Важно захватывать область таза, чтобы бинт не сползал.",
          warning: "Избегайте складок бинта, они могут натереть кожу и вызвать воспаление.",
          image: "https://protez-shkola.ru/wp-content/uploads/2021/01/bintovanie-bedra.jpg"
        }
      ]
    },
    contracture: {
      title: "Профилактика контрактур",
      text: "Контрактура — это ограничение подвижности в суставе. Если она разовьется, ходить на протезе будет крайне сложно или невозможно.",
      methods: [
        { name: "Правильное положение", desc: "Не кладите подушку под колено или под культю бедра. Нога должна лежать максимально ровно." },
        { name: "Положение на животе", desc: "Лежите на животе 2-3 раза в день по 20 минут. Это растягивает мышцы передней поверхности бедра." },
        { name: "Активные движения", desc: "Постоянно делайте махи культей во всех доступных направлениях, преодолевая легкое сопротивление." }
      ],
      image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=800"
    },
    phantom: {
      title: "Фантомные боли",
      text: "Это боли в конечности, которой уже нет. Мозг продолжает посылать сигналы в пустоту.",
      methods: [
        { name: "Зеркальная терапия", desc: "Смотрите в зеркало на здоровую ногу — мозг 'видит' две ноги, и боль часто уходит." },
        { name: "Сенсорная стимуляция", desc: "Растирайте культю махровым полотенцем или мягкой щеткой." }
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    bed_exercises: {
      title: "Упражнения в постели",
      text: "Первые шаги к протезу начинаются в палате. Важно укрепить мышцы культи и спины.",
      list: ["Напряжение мышц бедра и ягодиц", "Подъемы таза", "Упражнения с эластичной лентой", "Дыхательная гимнастика"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    },
    shaping: {
      title: "Формирование формы культи",
      text: "Для хорошей посадки в гильзу культя должна иметь коническую форму.",
      methods: [
        { name: "Компрессионный чехол", desc: "Специальный трикотаж, который носится 23 часа в сутки." },
        { name: "Силиконовый лайнер", desc: "Помогает не только формировать культю, но и снижает чувствительность рубца." }
      ],
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&q=80&w=800"
    },
    desensitization: {
      title: "Десенсибилизация кожи",
      text: "Кожа культи должна привыкнуть к постоянному контакту с гильзой протеза.",
      list: ["Похлопывания ладонью", "Растирание материалами разной жесткости", "Вибромассаж", "Воздушные ванны"],
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800"
    },
    prep_exercises: {
      title: "Общефизическая подготовка",
      text: "Ходьба на протезе требует больше энергии, чем обычная ходьба. Нужно укрепить всё тело.",
      list: ["Укрепление мышц пресса и спины", "Тренировка рук для опоры на брусья", "Равновесие на здоровой ноге"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
    },
    psychology: {
      title: "Психологическая адаптация",
      text: "Принятие новой реальности — важная часть пути. Вы не одиноки в своей ситуации.",
      methods: [
        { name: "Общение с равными", desc: "Встречи с людьми, которые уже успешно пользуются протезами." },
        { name: "Постановка целей", desc: "Двигайтесь маленькими шагами: от первого вставания до похода в магазин." }
      ],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
    },
    wearing: {
      title: "Надевание протеза",
      text: "Правильное положение культи в гильзе — залог отсутствия натертостей.",
      steps: ["Проверка чистоты кожи", "Надевание лайнера без воздуха", "Использование спрея-смазки", "Проверка замкового механизма"],
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=800"
    },
    balance: {
      title: "Равновесие и баланс",
      text: "Первая задача — научиться стоять на двух ногах, распределяя вес равномерно.",
      methods: [
        { name: "Перенос веса", desc: "Покачивания влево-вправо, стоя в брусьях." },
        { name: "Стояние на протезе", desc: "Постепенное уменьшение опоры на здоровую ногу." }
      ],
      image: "https://images.unsplash.com/photo-1594404322491-6273c88d15e2?auto=format&fit=crop&q=80&w=800"
    },
    gait: {
      title: "Отработка фаз шага",
      text: "Биомеханика шага на протезе отличается от обычной. Мы учим работать тазом и коленным узлом.",
      steps: ["Наступание на пятку", "Перекат через всю стопу", "Толчок носком", "Мах протезом"],
      image: "https://images.unsplash.com/photo-1434493907317-a46b5bc78344?auto=format&fit=crop&q=80&w=800"
    },
    stairs: {
      title: "Лестницы и неровности",
      text: "Уверенное движение в городской среде.",
      rule: "Вверх — со здоровой ноги. Вниз — с протеза.",
      details: "Это правило позволяет всегда иметь надежную опору при смене высоты.",
      image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800"
    }
  };

  const renderDetail = () => {
    if (!activeDetailKey || !detailContent[activeDetailKey]) return null;
    const detail = detailContent[activeDetailKey];

    return (
      <div className="animate-in fade-in zoom-in-95 duration-300">
        <button 
          onClick={() => setActiveDetailKey(null)}
          className="mb-8 flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors group"
        >
          <i className="fa-solid fa-arrow-left text-xs transition-transform group-hover:-translate-x-1"></i>
          Назад к программе
        </button>

        <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">Инструкция</div>
        
        {activeDetailKey === 'bandage' ? (
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl">
             <div className="flex gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-200 w-fit mb-10 mx-auto sm:mx-0">
                <button onClick={() => setActiveBandageTab(0)} className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all ${activeBandageTab === 0 ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}>Голень</button>
                <button onClick={() => setActiveBandageTab(1)} className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all ${activeBandageTab === 1 ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}>Бедро</button>
             </div>
             <h4 className="text-2xl font-black text-slate-900 mb-6">{detail.title} ({activeBandageTab === 0 ? 'голень' : 'бедро'})</h4>
             <p className="text-slate-600 leading-relaxed font-medium mb-8">{detail.content[activeBandageTab].text}</p>
             <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-xl mb-10 text-red-900 text-sm font-bold">{detail.content[activeBandageTab].warning}</div>
             <img src={detail.content[activeBandageTab].image} className="w-full h-auto rounded-3xl border-4 border-slate-50 shadow-lg" alt="Схема" />
          </div>
        ) : (
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <h4 className="text-3xl font-black text-slate-900 mb-8">{detail.title}</h4>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-slate-600 leading-relaxed font-medium mb-8 text-lg">{detail.text}</p>
                {detail.methods && (
                  <div className="space-y-6">
                    {detail.methods.map((m: any, i: number) => (
                      <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="font-black text-blue-600 text-sm uppercase mb-2">{m.name}</div>
                        <p className="text-slate-600 text-sm font-medium">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
                {detail.list && (
                  <ul className="space-y-4">
                    {detail.list.map((item: string, i: number) => (
                      <li key={i} className="flex gap-4 text-slate-600 font-medium items-start">
                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                           <i className="fa-solid fa-check text-blue-500 text-[10px]"></i>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {detail.steps && (
                   <div className="space-y-4">
                      {detail.steps.map((s: string, i: number) => (
                         <div key={i} className="flex gap-4 items-center">
                            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-xs shrink-0">{i+1}</div>
                            <span className="text-slate-700 font-bold">{s}</span>
                         </div>
                      ))}
                   </div>
                )}
                {detail.rule && (
                  <div className="p-8 bg-blue-600 text-white rounded-[2rem] shadow-xl shadow-blue-200 mt-8">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 opacity-80">Золотое правило:</div>
                    <div className="text-2xl font-black mb-4">{detail.rule}</div>
                    <p className="text-sm opacity-90 leading-relaxed font-medium">{detail.details}</p>
                  </div>
                )}
              </div>
              <img src={detail.image} className="w-full h-80 object-cover rounded-[2rem] shadow-lg" alt="Иллюстрация" />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-700">
      <Header />
      <Hero />
      
      {/* Секция услуг */}
      <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-4">Наши направления</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Профессиональная помощь</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">Мы применяем надежные технологии и комплектующие ведущих производителей для создания качественных изделий.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left items-start">
            {SERVICES.map((service) => {
              const isExpanded = expandedServiceId === service.id;
              
              return (
                <div 
                  key={service.id} 
                  className={`group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full ${
                    isExpanded ? 'lg:col-span-2 lg:scale-105 z-20 shadow-2xl border-blue-200' : 'hover:-translate-y-2'
                  }`}
                >
                  <div className={`overflow-hidden relative transition-all duration-500 ${isExpanded ? 'h-40' : 'h-56'}`}>
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
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-medium">
                      {service.description}
                    </p>
                    
                    {/* Развертываемая часть со списком видов */}
                    {isExpanded && service.types && (
                      <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4 border-b border-blue-50 pb-2">Основные виды изделий:</div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {service.types.map((type, idx) => (
                            <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group/type">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-blue-500 shadow-sm group-hover/type:bg-blue-600 group-hover/type:text-white transition-colors">
                                  <i className={`fa-solid ${type.icon} text-xs`}></i>
                                </div>
                                <span className="font-bold text-slate-800 text-sm">{type.name}</span>
                              </div>
                              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                {type.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-5 border-t border-slate-50 flex flex-wrap gap-4 items-center justify-start">
                      {service.id === 'walking_school' ? (
                        <a href="#walking-school-details" className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                          Подробнее об обучении <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </a>
                      ) : (
                        <>
                          {service.types ? (
                            <button 
                              onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                              className={`text-sm font-black transition-all flex items-center gap-2 ${
                                isExpanded ? 'text-slate-400 hover:text-slate-600' : 'text-blue-600 hover:text-blue-800'
                              }`}
                            >
                              <i className={`fa-solid ${isExpanded ? 'fa-circle-chevron-up' : 'fa-list-ul'}`}></i>
                              {isExpanded ? 'Скрыть подробности' : 'Посмотреть виды'}
                            </button>
                          ) : (
                             <div className="text-xs font-bold text-slate-400 italic">Базовый пакет услуг</div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Школа ходьбы */}
      <section id="walking-school-details" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 w-full sticky top-32">
              <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">Программа реабилитации</div>
              <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Школа ходьбы: <br/>путь к уверенности</h2>
              
              <div className="space-y-3">
                {walkingSchoolSteps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveTab(idx);
                      setActiveDetailKey(null);
                    }}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${
                      activeTab === idx 
                        ? 'border-blue-600 bg-blue-50/50 shadow-md' 
                        : 'border-slate-100 hover:border-slate-200 text-slate-500'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      activeTab === idx ? 'bg-blue-600 text-white' : 'bg-slate-100'
                    }`}>
                      <span className="font-black text-sm">{idx + 1}</span>
                    </div>
                    <span className={`font-bold text-sm ${activeTab === idx ? 'text-blue-900' : ''}`}>
                      {step.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3 w-full bg-slate-50 rounded-[3rem] p-8 md:p-16 relative min-h-[600px] border border-slate-100">
              <div className="relative z-10">
                {!activeDetailKey ? (
                  <>
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-blue-600 mb-8 text-2xl">
                      <i className={`fa-solid ${walkingSchoolSteps[activeTab].icon}`}></i>
                    </div>
                    <div className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">
                      {walkingSchoolSteps[activeTab].subtitle}
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">
                      {walkingSchoolSteps[activeTab].title}
                    </h3>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                      {walkingSchoolSteps[activeTab].description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                      {walkingSchoolSteps[activeTab].features.map((feature, i) => (
                        <div 
                          key={i} 
                          onClick={() => feature.interactive && setActiveDetailKey(feature.id)}
                          className={`flex items-start gap-4 p-6 bg-white rounded-3xl border transition-all duration-300 shadow-sm ${
                            feature.interactive 
                            ? 'cursor-pointer border-blue-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 group' 
                            : 'border-slate-100'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                            feature.interactive ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'bg-slate-50 text-blue-400'
                          }`}>
                            <i className={`fa-solid ${feature.interactive ? 'fa-plus' : 'fa-check'} text-xs`}></i>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-blue-700 leading-snug mb-1">{feature.name}</span>
                            {feature.interactive && <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">ПОДРОБНЕЕ</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : renderDetail()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      
      {/* Футер */}
      <footer id="contacts" className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2 space-y-8">
               <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <i className="fa-solid fa-plus text-2xl"></i>
                  </div>
                  <span className="text-3xl font-black uppercase tracking-tighter">ЕЦПО</span>
               </div>
               <p className="text-slate-400 max-w-md text-lg leading-relaxed font-medium">
                 Ваш надежный партнер в возвращении к полноценной жизни. Современное производство и профессиональная реабилитация в Новокузнецке.
               </p>
            </div>
            
            <div>
              <h4 className="font-extrabold text-xl mb-8">Меню</h4>
              <ul className="space-y-4 text-slate-400 font-bold">
                <li><a href="#services" className="hover:text-blue-500 transition-colors">Услуги</a></li>
                <li><a href="#reviews" className="hover:text-blue-500 transition-colors">Отзывы</a></li>
                <li><a href="#contacts" className="hover:text-blue-500 transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-extrabold text-xl mb-8">Связь</h4>
              <ul className="space-y-6 text-slate-400 font-medium">
                <li className="flex items-start gap-4">
                  <i className="fa-solid fa-location-dot text-blue-500 mt-1"></i>
                  <div className="text-sm">
                    <div className="text-white font-bold mb-1">{CONTACTS.address}</div>
                    <span className="opacity-60">{CONTACTS.district}</span>
                  </div>
                </li>
                {CONTACTS.phones.map((phone, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <i className="fa-solid fa-phone text-blue-500"></i>
                    <a href={phone.link} className="hover:text-white font-bold transition-colors">
                      {phone.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <div>© 2025 ЕЦПО НОВОКУЗНЕЦК</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-500">Политика конфиденциальности</a>
              <span className="text-red-400/80">Имеются противопоказания</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
