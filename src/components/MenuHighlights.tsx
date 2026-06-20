"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const menuItems = [
  {
    title: "Midnight Margarita",
    category: "Signature Cocktails",
    image: "https://images.unsplash.com/photo-1575037614876-c38db5ea80db?auto=format&fit=crop&q=80&w=400&h=500",
    color: "#8A2BE2",
    description: "Tequila, blackberry liqueur, fresh lime, activated charcoal rim.",
  },
  {
    title: "Conveyor Gold",
    category: "Signature Cocktails",
    image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=400&h=500",
    color: "#D4AF37",
    description: "Premium bourbon, honey syrup, aromatic bitters, gold leaf garnish.",
  },
  {
    title: "Spicy Honey Wings",
    category: "Gourmet Bites",
    image: "https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?auto=format&fit=crop&q=80&w=400&h=500",
    color: "#ff4500",
    description: "Crispy chicken wings tossed in our signature hot honey glaze.",
  },
  {
    title: "Truffle Fries",
    category: "Gourmet Bites",
    image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&q=80&w=400&h=500",
    color: "#e6c200",
    description: "Shoestring fries, parmesan dust, white truffle oil.",
  },
  {
    title: "Neon Nights",
    category: "Mocktails",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400&h=500",
    color: "#00FFFF",
    description: "Blue curacao syrup, lemonade, butterfly pea tea float.",
  }
];

export default function MenuHighlights() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const wrapper = scrollWrapperRef.current;
        if (!wrapper) return;

        // Calculate how far to scroll to left based on total width minus viewport width
        const walkDistance = wrapper.scrollWidth - window.innerWidth;

        gsap.to(wrapper, {
          x: -walkDistance,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${walkDistance}`,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef} 
      id="menu-section" 
      className="relative z-10 w-full min-h-screen bg-midnight flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute top-12 md:top-24 left-6 md:left-24 z-20">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-2">
          Menu <span className="text-gold">Highlights</span>
        </h2>
        <p className="font-sans text-gray-400">Discover our culinary conveyor of flavors.</p>
      </div>

      {/* 
        This wrapper is extra wide and gets translated horizontally by GSAP 
        On mobile, it just scrolls natively horizontally using overflow-x-auto
      */}
      <div 
        className="mt-32 md:mt-0 flex gap-8 px-6 md:px-24 md:w-[max-content] pb-12 overflow-x-auto md:overflow-visible hide-scrollbar"
        ref={scrollWrapperRef}
      >
        {menuItems.map((item, i) => (
          <div 
            key={i}
            className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] h-[450px] md:h-[550px] rounded-2xl glass-card overflow-hidden transition-all duration-500 cursor-grab active:cursor-grabbing"
            style={{ 
              "--glow-color": item.color 
            } as React.CSSProperties}
          >
            {/* Background glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700" 
                 style={{ background: `radial-gradient(circle at center, var(--glow-color) 0%, transparent 70%)` }}>
            </div>
            
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: item.color }}>
                {item.category}
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
