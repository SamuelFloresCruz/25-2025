// Componente HeartAnimation - Corazones flotantes románticos
'use client';

// Función para generar valores pseudo-aleatorios basados en seed
function seededRandom(seed) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

const heartTypes = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '♥️'];

// Generar corazones de forma determinista
const hearts = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: seededRandom(i + 1) * 100,
  delay: seededRandom(i + 100) * 20,
  duration: 15 + seededRandom(i + 200) * 20,
  size: seededRandom(i + 300) * 20 + 12,
  opacity: seededRandom(i + 400) * 0.4 + 0.2,
  type: heartTypes[Math.floor(seededRandom(i + 500) * heartTypes.length)],
}));

export default function HeartAnimation() {

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-heart-rise"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
            filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))',
          }}
        >
          {heart.type}
        </span>
      ))}
    </div>
  );
}
