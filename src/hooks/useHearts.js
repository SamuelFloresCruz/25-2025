// Hook personalizado para los corazones flotantes
'use client';

import { useMemo } from 'react';

// Función para generar valores pseudo-aleatorios basados en seed
function seededRandom(seed) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export function useHearts(count = 20) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: seededRandom(i + 1) * 100,
      delay: seededRandom(i + 100) * 3,
      duration: 3 + seededRandom(i + 200) * 4,
      size: seededRandom(i + 300) * 20 + 15,
    }));
  }, [count]);

  return hearts;
}
