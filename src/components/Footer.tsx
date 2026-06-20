"use client";

import { MapPin, Phone, Clock, Globe } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [lang, setLang] = useState<"EN" | "BN">("EN");

  return (
    <footer className="relative z-10 w-full bg-[#030303] pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Language */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-2xl font-bold text-white tracking-widest uppercase">
              Conveyor<br/><span className="text-gold">The Lounge</span>
            </h3>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              {lang === "EN" 
                ? "Elevate Your Night. Asansol's premier destination for fine dining, crafted cocktails, and electrifying nightlife."
                : "আপনার রাতকে রঙিন করুন। আসানসোলের সেরা গন্তব্য চমৎকার খাবার, ককটেল এবং উদ্দাম নাইটলাইফের জন্য।"}
            </p>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-3 mt-2">
              <Globe size={16} className="text-gray-400" />
              <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
                <button 
                  onClick={() => setLang("EN")}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${lang === "EN" ? "bg-gold text-black" : "text-gray-400 hover:text-white"}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang("BN")}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${lang === "BN" ? "bg-gold text-black" : "text-gray-400 hover:text-white"}`}
                >
                  বাংলা
                </button>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-lg text-white font-bold tracking-wider">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:09064442466" className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors group">
                <Phone size={18} className="mt-1 group-hover:text-gold text-white/50" />
                <span className="font-sans">090644 42466<br/><span className="text-xs opacity-60">Reservations & Info</span></span>
              </a>
            </div>
          </div>

          {/* Location Details */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-lg text-white font-bold tracking-wider">Location</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="mt-1 text-white/50" />
                <span className="font-sans">
                  Floor 6, The Fern Residency<br/>
                  MWMR+WH4, Girls College Rd<br/>
                  IISCO Steel Plant, Asansol<br/>
                  West Bengal 713304
                </span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 mt-2">
                <Clock size={18} className="mt-1 text-white/50" />
                <span className="font-sans">
                  Open Daily<br/>
                  2:00 PM – Late
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-48 w-full rounded-xl overflow-hidden border border-white/10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.880795493202!2d86.9458925!3d23.6841772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f11e3b5e4c3%3A0x7d6f5828ed785fc5!2sConveyor%20The%20Lounge!5e0!3m2!1sen!2sin!4v1718817350000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-gray-500">
          <p>© {new Date().getFullYear()} Conveyor The Lounge. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
