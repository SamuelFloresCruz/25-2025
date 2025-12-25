// Hook personalizado para el efecto de nieve
'use client';

import { useMemo } from 'react';

// Función para generar valores pseudo-aleatorios basados en seed
function seededRandom(seed) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export function useSnowfall(count = 50) {
  const snowflakes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: seededRandom(i + 1) * 100,
      delay: seededRandom(i + 100) * 5,
      duration: 5 + seededRandom(i + 200) * 10,
      size: seededRandom(i + 300) * 10 + 5,
    }));
  }, [count]);

  return snowflakes;
}
