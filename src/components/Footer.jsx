// Componente Footer - Pie de página con dedicatoria especial
'use client';

import { useMemo } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const hearts = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: 10 + (i * 9),
      delay: i * 0.3,
    }));
  }, []);

  return (
    <footer className="relative py-16 md:py-24 px-4 overflow-hidden w-full flex justify-center">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      
      {/* Corazones flotantes decorativos */}
      <div className="absolute inset-x-0 top-0 h-20 pointer-events-none">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="absolute text-pink-500/30 animate-float-heart"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              fontSize: '16px',
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        {/* Dedicatoria principal */}
        <div className="mb-8">
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="text-2xl animate-sparkle">✨</span>
            <span className="text-4xl md:text-5xl animate-heartbeat">💝</span>
            <span className="text-2xl animate-sparkle delay-300">✨</span>
          </div>
          
          <p 
            className="text-2xl md:text-3xl lg:text-4xl text-white mb-4"
            style={{ fontFamily: 'var(--font-dancing), cursive' }}
          >
            Hecho con todo mi amor para ti
          </p>
          
          <p 
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-dancing), cursive' }}
          >
            Amalia
          </p>
        </div>

        {/* Emojis decorativos */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className="text-2xl animate-soft-bounce">🎄</span>
          <span className="text-xl animate-soft-bounce delay-100">❄️</span>
          <span className="text-2xl animate-soft-bounce delay-200">🎁</span>
          <span className="text-3xl animate-heartbeat delay-300">❤️</span>
          <span className="text-2xl animate-soft-bounce delay-400">🎁</span>
          <span className="text-xl animate-soft-bounce delay-500">❄️</span>
          <span className="text-2xl animate-soft-bounce delay-600">🎄</span>
        </div>

        {/* Mensaje navideño */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-8 max-w-2xl mx-auto">
          <p 
            className="text-lg md:text-xl text-white/80 italic"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            "El mejor regalo de Navidad es tenerte en mi vida. 
            Te amo hoy, mañana y siempre."
          </p>
        </div>

        {/* Fecha y créditos */}
        <div className="space-y-3 text-white/60">
          <p 
            className="text-lg md:text-xl"
            style={{ fontFamily: 'var(--font-dancing), cursive' }}
          >
            🎄 Navidad {currentYear} 🎄
          </p>
          
          <div className="flex justify-center items-center gap-2 text-sm">
            <span>Con amor infinito</span>
            <span className="animate-pulse-heart">💕</span>
          </div>
        </div>

        {/* Decoración final */}
        <div className="mt-10 flex justify-center gap-2">
          {['❄️', '✨', '🌟', '💫', '⭐', '💫', '🌟', '✨', '❄️'].map((emoji, i) => (
            <span 
              key={i} 
              className="text-lg animate-sparkle opacity-50"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
