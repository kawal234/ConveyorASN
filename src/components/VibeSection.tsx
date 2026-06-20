"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const images = [
  "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=600&h=800", // Lounge dark
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600&h=400", // Cocktail
  "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=600&h=600", // Bar
  "https://images.unsplash.com/photo-1574096079513-d8259312b78a?auto=format&fit=crop&q=80&w=600&h=800", // DJ
];

export default function VibeSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Text Reveal Animation
      gsap.from(".reveal-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Images Parallax
      gsap.from(".vibe-image", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".image-grid",
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef} 
      id="vibe-section" 
      className="relative z-10 w-full min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-midnight"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="block reveal-text">Superb</span>
            <span className="block reveal-text text-gold">Environment.</span>
            <span className="block reveal-text mt-4">Top-Notch</span>
            <span className="block reveal-text">Service.</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-400 reveal-text max-w-lg leading-relaxed">
            Experience the dual nature of Asansol&apos;s premier destination. A relaxing, sophisticated lounge by afternoon seamlessly transitions into a high-energy nightclub after dark.
          </p>
        </div>

        {/* Masonry Image Grid */}
        <div className="lg:w-1/2 image-grid grid grid-cols-2 gap-4 w-full h-[600px]">
          <div className="flex flex-col gap-4 mt-12">
            <div className="vibe-image relative overflow-hidden rounded-xl h-[350px] group">
              <img 
                src={images[0]} 
                alt="Lounge Atmosphere" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="vibe-image relative overflow-hidden rounded-xl h-[200px] group">
              <img 
                src={images[1]} 
                alt="Signature Cocktails" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="vibe-image relative overflow-hidden rounded-xl h-[250px] group">
              <img 
                src={images[2]} 
                alt="Bar Setup" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="vibe-image relative overflow-hidden rounded-xl h-[300px] group">
              <img 
                src={images[3]} 
                alt="Nightclub Energy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
