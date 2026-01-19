
import React, { useState } from 'react';
import { YANDEX_REVIEWS, GLOBAL_RATING } from '../constants';

const Reviews: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? YANDEX_REVIEWS : YANDEX_REVIEWS.slice(0, 3);

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Отзывы на Яндекс Картах</h2>
            <p className="text-lg text-slate-600">Честные мнения наших пациентов о работе Центра Протезирования.</p>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <div className="text-center px-4 border-r border-slate-200">
              <div className="text-4xl font-black text-slate-900 leading-none mb-2">{GLOBAL_RATING}</div>
              <div className="flex text-lime-400 text-sm">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>
            <div className="text-sm font-bold text-slate-500">
              Рейтинг ЕЦПО <br/>
              <span className="text-slate-900 font-extrabold uppercase tracking-tighter text-xs">10+ отзывов</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 transition-all duration-500">
          {displayedReviews.map((review) => (
            <div key={review.id} className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:shadow-xl transition-all duration-500 group flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <i className="fa-brands fa-yandex text-red-500 text-xs"></i>
                    </div>
                    <span className="font-bold text-slate-900 text-lg leading-tight">{review.name}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider pl-10">{review.badge}</div>
                  <div className="text-[11px] text-slate-400 font-medium pl-10">{review.date}</div>
                </div>
              </div>
              
              <div className="flex text-lime-400 text-xs mb-5 space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`${i < review.rating ? 'fa-solid' : 'fa-regular'} fa-star`}></i>
                ))}
              </div>
              
              <div className="relative flex-grow">
                <p className="text-slate-600 leading-relaxed text-sm">
                  {review.content}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-green-600/70 text-[10px] font-black uppercase tracking-widest">
                  <i className="fa-solid fa-circle-check"></i>
                  Подтверждено
                </div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-blue-600 transition-colors">
                  <i className="fa-regular fa-thumbs-up mr-1"></i> Полезно
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 px-10 py-4 bg-white border-2 border-slate-100 rounded-2xl font-bold text-slate-900 hover:border-lime-400 hover:bg-lime-50/30 transition-all shadow-sm active:scale-95"
          >
            {showAll ? 'Свернуть отзывы' : 'Показать все отзывы'}
            <i className={`fa-solid ${showAll ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs text-lime-500`}></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
