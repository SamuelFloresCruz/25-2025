// Componente Snowfall - Efecto de nieve cayendo realista
'use client';

// Función para generar valores pseudo-aleatorios basados en seed
function seededRandom(seed) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

// Generar copos de nieve de forma determinista
const snowflakes = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  left: seededRandom(i + 1) * 100,
  delay: seededRandom(i + 100) * 10,
  duration: 8 + seededRandom(i + 200) * 12,
  size: seededRandom(i + 300) * 15 + 8,
  opacity: seededRandom(i + 400) * 0.6 + 0.4,
  type: Math.floor(seededRandom(i + 500) * 3),
}));

// Generar partículas brillantes
const sparkles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: seededRandom(i + 600) * 100,
  size: seededRandom(i + 700) * 8 + 4,
  duration: 12 + seededRandom(i + 800) * 8,
  delay: seededRandom(i + 900) * 15,
  opacity: seededRandom(i + 1000) * 0.5 + 0.3,
}));

export default function Snowfall() {

  const snowTypes = ['❄️', '❅', '❆'];

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <span
          key={flake.id}
          className="absolute animate-snowfall text-white"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            opacity: flake.opacity,
            filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))',
          }}
        >
          {snowTypes[flake.type]}
        </span>
      ))}
      
      {/* Capa adicional de partículas brillantes */}
      {sparkles.map((sparkle) => (
        <span
          key={`sparkle-${sparkle.id}`}
          className="absolute animate-snowfall text-yellow-200"
          style={{
            left: `${sparkle.left}%`,
            fontSize: `${sparkle.size}px`,
            animationDuration: `${sparkle.duration}s`,
            animationDelay: `${sparkle.delay}s`,
            opacity: sparkle.opacity,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
