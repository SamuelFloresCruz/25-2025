// Componente TikToksSection - Videos de TikTok especiales
'use client';

import { useEffect, useState, useRef } from 'react';

const tiktoks = [
  {
    id: 1,
    url: 'https://www.tiktok.com/@_josee_mv/video/7452542915533950214',
    author: '@_josee_mv',
    description: 'Feliz navidad 🎉🎄🎄',
    emoji: '🎄',
  },
  {
    id: 2,
    url: 'https://www.tiktok.com/@tolaba_luis/video/7235662377847377158',
    author: '@tolaba_luis',
    description: 'Prohibida mujer 🍃',
    emoji: '🎵',
  },
  {
    id: 3,
    url: 'https://www.tiktok.com/@solomusicapati/video/7332858075658865926',
    author: '@solomusicapati',
    description: 'Rolitas para dedicar',
    emoji: '💕',
  },
];

export default function TikToksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 section-gradient-3 overflow-hidden w-full flex justify-center"
    >
      {/* Luces navideñas superiores */}
      <div className="absolute top-0 left-0 right-0 flex justify-around py-6">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="text-xl md:text-2xl animate-christmas-lights"
            style={{ 
              animationDelay: `${i * 0.15}s`,
              color: ['#dc2626', '#15803d', '#fbbf24', '#3b82f6', '#ec4899'][i % 5]
            }}
          >
            ●
          </span>
        ))}
      </div>

      <div className="max-w-5xl w-full mx-auto">
        {/* Título */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="text-4xl md:text-5xl animate-soft-bounce">🎵</span>
            <span className="text-3xl md:text-4xl animate-heartbeat">❤️</span>
            <span className="text-4xl md:text-5xl animate-soft-bounce delay-300">🎵</span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-dancing), cursive' }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TikToks
            </span>
          </h2>
          
          <p 
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Videos que me hacen pensar en ti 💕
          </p>
        </div>

        {/* Grid de TikToks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tiktoks.map((tiktok, index) => (
            <a
              key={tiktok.id}
              href={tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="glass-dark rounded-3xl p-6 md:p-8 h-full hover:scale-105 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20">
                {/* Emoji grande */}
                <div className="text-6xl md:text-7xl text-center mb-6 group-hover:scale-125 transition-transform duration-300">
                  {tiktok.emoji}
                </div>
                
                {/* Icono de TikTok */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Autor */}
                <p className="text-pink-400 text-center font-semibold mb-2 text-lg">
                  {tiktok.author}
                </p>
                
                {/* Descripción */}
                <p 
                  className="text-white/80 text-center text-sm md:text-base mb-6"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  {tiktok.description}
                </p>
                
                {/* Botón */}
                <div className="flex justify-center">
                  <span className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-semibold group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                    <span>Ver Video</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">▶</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mensaje decorativo inferior */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <span className="text-2xl animate-float-heart">💕</span>
            <p 
              className="text-xl md:text-2xl text-pink-300"
              style={{ fontFamily: 'var(--font-dancing), cursive' }}
            >
              Cada video me recuerda lo mucho que te quiero
            </p>
            <span className="text-2xl animate-float-heart delay-300">💕</span>
          </div>
        </div>

        {/* Decoración inferior */}
        <div className="flex justify-center gap-4 mt-12 text-white/40">
          {[...Array(7)].map((_, i) => (
            <span key={i} className="text-2xl animate-soft-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
              ✨
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
