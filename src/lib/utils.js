// Funciones utilitarias

/**
 * Genera un número aleatorio entre min y max
 */
export function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Genera un ID único
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Combina clases de Tailwind
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
