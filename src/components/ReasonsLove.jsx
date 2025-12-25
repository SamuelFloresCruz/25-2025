// Componente ReasonsLove - Razones por las que te amo
'use client';

import { useEffect, useState, useRef } from 'react';

const reasons = [
  'Tu sonrisa que ilumina todo a tu alrededor',
  'Tu fuerza y valentía ante los desafíos',
  'Tu forma de abrazarme que me hace sentir en casa',
  'Tu risa contagiosa que alegra mis días',
  'Tu inteligencia y la forma en que ves el mundo',
  'Tu corazón bondadoso y lleno de amor',
  'Tu belleza interior y exterior',
  'Tu capacidad de hacerme mejor persona',
  'Tu determinación y tus sueños',
  'Simplemente por ser tú, mi Amalia',
];

export default function ReasonsLove() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animar las tarjetas una por una
          reasons.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          });
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
      className="relative py-20 md:py-32 px-6 sm:px-4 section-gradient-2 w-full flex justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Título de la sección */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="text-3xl md:text-4xl animate-sparkle">💫</span>
            <span className="text-4xl md:text-5xl animate-heartbeat">❤️</span>
            <span className="text-3xl md:text-4xl animate-sparkle delay-300">💫</span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-dancing), cursive' }}
          >
            <span className="bg-gradient-to-r from-red-400 via-pink-500 to-red-400 bg-clip-text text-transparent text-glow-red">
              10 Razones Por Las Que Te Amo
            </span>
          </h2>
          
          <p 
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Aunque hay infinitas razones, aquí están algunas de las más especiales
          </p>
        </div>

        {/* Grid de razones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-90'
              }`}
            >
              <div className="glass rounded-xl p-3 sm:p-4 h-full hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 cursor-default flex items-center gap-4">
                {/* Número de razón */}
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 mr-1 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                  {index + 1}
                </div>
                
                {/* Texto */}
                <p 
                  className="text-white/90 text-sm md:text-base leading-relaxed"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  {reason}
                </p>
                
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje final */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-dark inline-block rounded-full px-8 py-4">
            <p 
              className="text-xl md:text-2xl text-pink-300"
              style={{ fontFamily: 'var(--font-dancing), cursive' }}
            >
              Y la lista continúa infinitamente...
              <span className="ml-2 animate-heartbeat inline-block">💖</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
