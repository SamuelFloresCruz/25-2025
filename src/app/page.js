'use client';

import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import LoveMessage from "@/components/LoveMessage";
import ReasonsLove from "@/components/ReasonsLove";
import TikToksSection from "@/components/TikToksSection";
import Footer from "@/components/Footer";

// Cargar componentes con animaciones aleatorias solo en el cliente
const Snowfall = dynamic(() => import("@/components/Snowfall"), { ssr: false });
const HeartAnimation = dynamic(() => import("@/components/HeartAnimation"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden w-full">
      {/* Efectos de fondo */}
      <Snowfall />
      <HeartAnimation />
      
      {/* Fondo con estrellas */}
      <div className="fixed inset-0 stars-bg opacity-30 pointer-events-none" />
      
      {/* Contenido principal */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Header />
        <LoveMessage />
        <ReasonsLove />
        <TikToksSection />
        <Footer />
      </div>
      
      {/* Gradiente de overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none z-5" />
    </main>
  );
}
