// Componente ChristmasWishes - Deseos navideños finales
'use client';

import { useEffect, useState, useRef } from 'react';

const wishes = [
  '🌟 Que cada día juntos sea una nueva aventura',
  '💕 Que nuestro amor siga creciendo sin límites',
  '🎁 Que todos tus sueños se hagan realidad',
  '✨ Que la magia de esta Navidad nos acompañe siempre',
  '🏠 Que construyamos juntos el hogar de nuestros sueños',
];

export default function ChristmasWishes() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTree, setShowTree] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowTree(true), 500);
        }
      },
      { threshold: 0.2 }
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
            <span className="text-4xl md:text-5xl animate-swing">🎄</span>
            <span className="text-3xl md:text-4xl animate-sparkle">⭐</span>
            <span className="text-4xl md:text-5xl animate-swing delay-300">🎄</span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-dancing), cursive' }}
          >
            <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              Mis Deseos Para Esta Navidad
            </span>
          </h2>
        </div>

        {/* Contenedor principal */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          
          {/* Árbol de Navidad animado */}
          <div className={`relative transition-all duration-1000 ${showTree ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="text-center">
              {/* Estrella */}
              <div className="text-5xl md:text-6xl animate-sparkle mb-2">⭐</div>
              
              {/* Árbol */}
              <div className="relative">
                <div className="text-[120px] md:text-[180px] lg:text-[220px] leading-none animate-soft-bounce">
                  🎄
                </div>
                
                {/* Adornos flotantes alrededor del árbol */}
                <span className="absolute top-1/4 -left-4 text-2xl animate-float-heart">🎁</span>
                <span className="absolute top-1/3 -right-4 text-2xl animate-float-heart delay-300">🔔</span>
                <span className="absolute top-1/2 -left-6 text-xl animate-sparkle delay-200">✨</span>
                <span className="absolute top-2/3 -right-6 text-xl animate-sparkle delay-500">✨</span>
                <span className="absolute bottom-1/4 -left-4 text-2xl animate-float-heart delay-700">🎀</span>
              </div>
              
              {/* Regalos */}
              <div className="flex justify-center gap-2 -mt-4">
                <span className="text-3xl md:text-4xl animate-soft-bounce">🎁</span>
                <span className="text-4xl md:text-5xl animate-soft-bounce delay-200">🎁</span>
                <span className="text-3xl md:text-4xl animate-soft-bounce delay-400">🎁</span>
              </div>
            </div>
          </div>

          {/* Lista de deseos */}
          <div className="flex-1 max-w-xl">
            <div className="space-y-4">
              {wishes.map((wish, index) => (
                <div
                  key={index}
                  className={`glass rounded-xl p-4 md:p-5 transition-all duration-700 hover:bg-white/10 hover:scale-102 ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-20'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 500}ms` }}
                >
                  <p 
                    className="text-base md:text-lg lg:text-xl text-white/90"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    {wish}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mensaje final especial */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-dark rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <p 
              className="text-2xl md:text-3xl lg:text-4xl text-white mb-6"
              style={{ fontFamily: 'var(--font-dancing), cursive' }}
            >
              Pero mi deseo más grande...
            </p>
            
            <p 
              className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 bg-clip-text text-transparent font-bold"
              style={{ fontFamily: 'var(--font-dancing), cursive' }}
            >
              Es pasar cada Navidad de mi vida a tu lado
            </p>
            
            <div className="flex justify-center items-center gap-3 mt-6">
              <span className="text-3xl animate-heartbeat">💑</span>
              <span className="text-4xl animate-sparkle">💕</span>
              <span className="text-3xl animate-heartbeat delay-300">💑</span>
            </div>
          </div>
        </div>

        {/* Nieve decorativa inferior */}
        <div className="flex justify-center gap-4 mt-12 text-white/40">
          {[...Array(7)].map((_, i) => (
            <span key={i} className="text-2xl animate-soft-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
              ❄️
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
