import { Mail, Phone, MapPin, ArrowRight, Instagram } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

interface FooterProps {
  id?: string;
}

export default function Footer({ id }: FooterProps) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const Logo = () => (
    <div className="flex flex-col items-start select-none leading-none">
      <span className="font-bold tracking-tighter text-2xl text-[#1E293B] font-poppins">
        NOA
      </span>
      <span className="text-[9px] font-bold tracking-[0.3em] text-[#1E293B]/70 uppercase mt-1 mr-[-0.3em] font-poppins">
        HOME
      </span>
    </div>
  )

  return (
    <footer 
      id={id} 
      className="w-full bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl border border-white/45 rounded-[2.5rem] p-8 md:p-12 flex flex-col gap-12 shadow-[0_8px_32px_0_rgba(255,255,255,0.06)] mt-8"
    >
      {/* Upper Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        
        {/* Col 1: Branding & Atelier Subscribe Widget */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-xs md:text-sm text-[#64748B] leading-relaxed max-w-sm font-light">
              Bespoke design studio specializing in modern luxury, minimalist furniture, and custom-made sculptural layout integrations.
            </p>
          </div>

          {/* Subscribe to Curation List */}
          <div className="flex flex-col gap-3 max-w-sm">
            <span className="text-[10px] font-bold text-[#1E293B] tracking-[0.18em] uppercase">
              Join the Atelier
            </span>
            <p className="text-[11px] text-[#64748B] font-light leading-relaxed">
              Subscribe to receive lookbooks, fabric drops, and priority private viewings.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="relative flex items-center mt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full text-xs px-4 py-3 rounded-full bg-white/35 backdrop-blur-sm border border-white/40 outline-none text-[#1E293B] placeholder-slate-400/80 focus:border-[#1E293B]/70 pr-12 transition-all font-light"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 bg-[#1E293B] hover:bg-[#0F172A] text-white p-2 rounded-full transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Subscription received. Welcome to NOA.</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Col 2: Directory STUDIO */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#1E293B] font-bold">
            STUDIO
          </h4>
          <ul className="flex flex-col gap-3 text-xs text-[#64748B] font-light">
            <li className="hover:text-[#1E293B] hover:translate-x-1 transition-all cursor-pointer w-fit">The Atelier</li>
            <li className="hover:text-[#1E293B] hover:translate-x-1 transition-all cursor-pointer w-fit">Bespoke Curation</li>
            <li className="hover:text-[#1E293B] hover:translate-x-1 transition-all cursor-pointer w-fit">Premium Materials</li>
            <li className="hover:text-[#1E293B] hover:translate-x-1 transition-all cursor-pointer w-fit">Design Consultations</li>
          </ul>
        </div>

        {/* Col 3: Directory PIECES */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#1E293B] font-bold">
            PIECES
          </h4>
          <ul className="flex flex-col gap-3 text-xs text-[#64748B] font-light">
            <li className="hover:text-[#1E293B] hover:translate-x-1 transition-all cursor-pointer w-fit">The Muse Sofa</li>
            <li className="hover:text-[#1E293B] hover:translate-x-1 transition-all cursor-pointer w-fit">The Aura Lounge</li>
            <li className="hover:text-[#1E293B] hover:translate-x-1 transition-all cursor-pointer w-fit">The Eclipse Sectional</li>
            <li className="hover:text-[#1E293B] hover:translate-x-1 transition-all cursor-pointer w-fit">Custom Orders</li>
          </ul>
        </div>

        {/* Col 4: Atelier Hours & Status */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#1E293B] font-bold">
              LOGISTICS & HOURS
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed font-light">
              Nationwide transport in protective wooden crates with white-glove delivery. 
            </p>
            <span className="text-[11px] text-[#64748B] font-light">
              Mon - Fri / 9:00 AM - 6:00 PM PKT
            </span>
          </div>

          {/* Live Advisor Status Indicator */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/40 border border-white/30 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] text-[#1E293B] font-semibold tracking-wider uppercase">
              Atelier Advisor Online
            </span>
          </div>
        </div>

      </div>

      <div className="w-full h-[1px] bg-white/20" />

      {/* Bottom Layout Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] text-[#94A3B8] font-light">
        
        {/* Left copyright */}
        <span>&copy; {new Date().getFullYear()} NOA HOME Studio. All rights reserved.</span>
        
        {/* Center links */}
        <div className="flex items-center gap-6">
          <span className="hover:text-[#1E293B] transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-[#1E293B] transition-colors cursor-pointer">Terms of Service</span>
        </div>

        {/* Right Socials & Contact Actions */}
        <div className="flex items-center gap-3">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:inquire@noahome.studio"
            className="w-8 h-8 rounded-full bg-white/40 border border-white/30 flex items-center justify-center text-[#64748B] hover:text-[#1E293B] hover:bg-white/70 transition-all cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="tel:+923000000000"
            className="w-8 h-8 rounded-full bg-white/40 border border-white/30 flex items-center justify-center text-[#64748B] hover:text-[#1E293B] hover:bg-white/70 transition-all cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-white/40 border border-white/30 flex items-center justify-center text-[#64748B] hover:text-[#1E293B] hover:bg-white/70 transition-all cursor-pointer"
          >
            <Instagram className="w-3.5 h-3.5" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#"
            className="w-8 h-8 rounded-full bg-white/40 border border-white/30 flex items-center justify-center text-[#64748B] hover:text-[#1E293B] hover:bg-white/70 transition-all cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
