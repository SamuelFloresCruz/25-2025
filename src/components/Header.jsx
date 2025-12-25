// Componente Header - Hero romántico navideño
'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Decoración de luces navideñas superior */}
      <div className="absolute top-0 left-0 right-0 flex justify-center gap-2 py-4">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="text-2xl md:text-3xl animate-christmas-lights"
            style={{ 
              animationDelay: `${i * 0.2}s`,
              color: ['#dc2626', '#fbbf24', '#15803d', '#ec4899', '#3b82f6'][i % 5]
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* Contenido principal */}
      <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Decoración superior */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <span className="text-4xl md:text-5xl animate-swing">🎄</span>
          <span className="text-3xl md:text-4xl animate-sparkle delay-200">✨</span>
          <span className="text-4xl md:text-5xl animate-heartbeat">❤️</span>
          <span className="text-3xl md:text-4xl animate-sparkle delay-400">✨</span>
          <span className="text-4xl md:text-5xl animate-swing" style={{ animationDelay: '0.5s' }}>🎄</span>
        </div>

        {/* Título principal */}
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-glow-red"
          style={{ fontFamily: 'var(--font-dancing), cursive' }}
        >
          <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-aurora bg-[length:200%_200%]">
            Feliz Navidad
          </span>
        </h1>

        {/* Nombre de Amalia con efecto especial */}
        <div className="relative inline-block my-6">
          <h2 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-glow-gold"
            style={{ fontFamily: 'var(--font-dancing), cursive' }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Amalia
            </span>
          </h2>
          
          {/* Corazones decorativos alrededor del nombre */}
          <span className="absolute -top-4 -left-8 text-3xl md:text-4xl animate-float-heart text-pink-500">💕</span>
          <span className="absolute -top-2 -right-8 text-2xl md:text-3xl animate-float-heart delay-300 text-red-500">💖</span>
          <span className="absolute -bottom-4 -left-6 text-2xl md:text-3xl animate-float-heart delay-500 text-red-400">💗</span>
          <span className="absolute -bottom-2 -right-6 text-3xl md:text-4xl animate-float-heart delay-700 text-pink-400">💓</span>
        </div>

        {/* Subtítulo romántico */}
        <p 
          className={`text-xl sm:text-2xl md:text-3xl text-white/90 mt-6 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Una página hecha con todo mi{' '}
          <span className="text-red-400 animate-pulse-heart inline-block">❤️</span>
          {' '}para la persona más especial de mi vida
        </p>

        {/* Decoración de copos de nieve */}
        <div className="flex justify-center items-center gap-3 mt-8 text-white/60">
          <span className="text-2xl animate-soft-bounce">❄️</span>
          <span className="text-xl animate-soft-bounce delay-200">❅</span>
          <span className="text-3xl animate-soft-bounce delay-300">❆</span>
          <span className="text-xl animate-soft-bounce delay-400">❅</span>
          <span className="text-2xl animate-soft-bounce delay-500">❄️</span>
        </div>

        {/* Flecha indicadora de scroll */}
        <div className="mt-12 animate-soft-bounce">
          <div className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors cursor-pointer">
            <span className="text-sm mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Descubre más
            </span>
            <span className="text-3xl">↓</span>
          </div>
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </header>
  );
}
