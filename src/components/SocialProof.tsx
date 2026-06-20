"use client";

import { Star, StarHalf } from "lucide-react";

const reviews = [
  {
    name: "Ravi Kumar",
    text: "Best lounge bar in Asansol, good food, good music. The vibe is unmatched especially on weekends.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "Fantastic place to unwind and enjoy a lively yet classy atmosphere. The cocktails are phenomenal.",
    rating: 4.5,
  },
  {
    name: "Amit Patel",
    text: "Premium quality food and great ambiance. The DJ knows exactly how to set the mood.",
    rating: 5,
  },
  {
    name: "Sneha Roy",
    text: "Love the interior and the moving lights. Asansol really needed a place like this!",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    text: "Affordable luxury! The Chicken Wings were crispy and perfect. Highly recommended.",
    rating: 5,
  },
  {
    name: "Anjali Das",
    text: "Great experience overall. The staff is polite and service is quick even when crowded.",
    rating: 4.5,
  }
];

export default function SocialProof() {
  return (
    <section className="relative z-10 w-full py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* Trust Badge */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-2">
            The <span className="text-gold">Word</span>
          </h2>
          <p className="font-sans text-gray-400 max-w-md">
            Don&apos;t just take our word for it. See what our guests have to say about their nights at Conveyor.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-2xl flex items-center gap-6 min-w-[280px]">
          <div className="text-5xl font-bold text-white font-heading">
            4.4
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex text-gold">
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <StarHalf fill="currentColor" size={18} />
            </div>
            <span className="text-sm text-gray-400 font-sans">
              Based on 66+ Google Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative flex w-full overflow-hidden group">
        {/* Left/Right Fades */}
        <div className="absolute left-0 top-0 w-24 md:w-64 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 md:w-64 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
        
        {/* Track 1 */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-[max-content]">
          {reviews.map((review, idx) => (
            <ReviewCard key={`r1-${idx}`} review={review} />
          ))}
        </div>
        
        {/* Track 2 (Duplicate for infinite loop) */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-[max-content]" aria-hidden="true">
          {reviews.map((review, idx) => (
            <ReviewCard key={`r2-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="mx-4 w-[300px] md:w-[400px] glass-card p-8 rounded-2xl flex-shrink-0">
      <div className="flex text-gold mb-4">
        {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
          <Star key={i} fill="currentColor" size={14} className="mr-1" />
        ))}
        {review.rating % 1 !== 0 && <StarHalf fill="currentColor" size={14} />}
      </div>
      <p className="text-gray-300 font-sans text-sm leading-relaxed mb-6 italic">
        "{review.text}"
      </p>
      <div className="text-white font-bold font-heading text-sm">
        {review.name}
      </div>
    </div>
  );
}
