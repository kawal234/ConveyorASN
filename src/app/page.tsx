"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroScene from "@/components/HeroScene";
import VibeSection from "@/components/VibeSection";
import MenuHighlights from "@/components/MenuHighlights";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Fade out the hero content text as we scroll down
      gsap.to(heroContentRef.current, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroContentRef.current,
          start: "top 20%",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade out the Three.js canvas as we move out of the hero section
      gsap.to(canvasWrapperRef.current, {
        opacity: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: "#vibe-section",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="relative w-full overflow-x-hidden bg-midnight">
      
      {/* 3D Hero Canvas Background (Fixed initially, fades later) */}
      <div ref={canvasWrapperRef} className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <HeroScene />
      </div>

      {/* Hero Content Overlay */}
      <section className="relative z-10 w-full h-screen flex flex-col items-center justify-center pointer-events-none px-6 text-center">
        <div ref={heroContentRef} className="flex flex-col items-center gap-6 mt-24">
          <div className="glass-card px-4 py-1 rounded-full border-gold/30 pointer-events-auto">
            <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase font-sans">
              Now Open • Floor 6
            </span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white uppercase tracking-tighter mix-blend-difference drop-shadow-2xl">
            Elevate<br/>
            <span className="text-gold opacity-90 block mt-2">Your Night.</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-gray-300 max-w-lg mt-4 drop-shadow-lg font-light">
            Asansol&apos;s Premier Lounge & Nightclub. Where exquisite dining meets electrifying nightlife.
          </p>
          
          <a 
            href="#" 
            className="pointer-events-auto mt-8 group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-black uppercase tracking-widest bg-gold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            <span className="relative z-10">Reserve Your Table</span>
          </a>
        </div>
      </section>

      {/* Subsequent Sections layered over the faded canvas */}
      <VibeSection />
      <MenuHighlights />
      <SocialProof />
      <Footer />
      
    </main>
  );
}
