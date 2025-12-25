// Componente LoveMessage - Mensaje de amor para Amalia
'use client';

import { useEffect, useState, useRef } from 'react';

export default function LoveMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      className="relative py-20 md:py-32 px-4 section-gradient-1 w-full flex justify-center"
    >
      {/* Decoración lateral izquierda */}
      <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 text-2xl opacity-30">
        <span className="animate-float-heart">💕</span>
        <span className="animate-float-heart delay-200">✨</span>
        <span className="animate-float-heart delay-400">💕</span>
      </div>

      {/* Decoración lateral derecha */}
      <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 text-2xl opacity-30">
        <span className="animate-float-heart delay-300">💕</span>
        <span className="animate-float-heart delay-500">✨</span>
        <span className="animate-float-heart delay-700">💕</span>
      </div>

      <div className="max-w-4xl w-full mx-auto">
        {/* Título de la sección */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-4xl md:text-5xl animate-heartbeat inline-block mb-4">💌</span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-glow-pink"
            style={{ fontFamily: 'var(--font-dancing), cursive' }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Mi Mensaje Para Ti
            </span>
          </h2>
        </div>

        {/* Carta de amor */}
        <div 
          className={`glass-dark rounded-3xl p-8 md:p-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
        >
          {/* Encabezado de la carta */}
          <div className="text-center mb-8">
            <p 
              className="text-xl md:text-2xl text-pink-300 italic"
              style={{ fontFamily: 'var(--font-dancing), cursive' }}
            >
              Querida Amalia,
            </p>
          </div>

          {/* Contenido de la carta */}
          <div className="space-y-6 text-center">
            <p 
              className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              En esta Navidad tan especial, quiero que sepas lo mucho que significas para mí. 
              Cada momento a tu lado es un regalo que atesoro en mi corazón.
            </p>

            <div className="flex justify-center gap-2 text-2xl my-6">
              <span className="animate-sparkle">✨</span>
              <span className="animate-pulse-heart text-red-400">❤️</span>
              <span className="animate-sparkle delay-200">✨</span>
            </div>

            <p 
              className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Tu sonrisa ilumina mis días más oscuros, tu amor me hace ser mejor persona, 
              y tu presencia convierte cada instante en algo mágico.
            </p>

            <p 
              className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Gracias por ser mi compañera, mi confidente y mi mejor amiga. 
              Gracias por elegirme cada día y por hacer de mi vida una aventura maravillosa.
            </p>
          </div>

          {/* Firma */}
          <div className="text-center mt-10">
            <p 
              className="text-2xl md:text-3xl text-pink-300"
              style={{ fontFamily: 'var(--font-dancing), cursive' }}
            >
              Con todo mi amor,
            </p>
            <div className="flex justify-center items-center gap-3 mt-4">
              <span className="text-3xl animate-heartbeat">💝</span>
              <span 
                className="text-xl md:text-2xl text-gold-light"
                style={{ fontFamily: 'var(--font-dancing), cursive' }}
              >
                Tu amor eterno
              </span>
              <span className="text-3xl animate-heartbeat delay-200">💝</span>
            </div>
          </div>
        </div>

        {/* Decoración inferior */}
        <div className={`flex justify-center gap-4 mt-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-2xl animate-soft-bounce">🌹</span>
          <span className="text-2xl animate-soft-bounce delay-200">💐</span>
          <span className="text-2xl animate-soft-bounce delay-400">🌹</span>
        </div>
      </div>
    </section>
  );
}
