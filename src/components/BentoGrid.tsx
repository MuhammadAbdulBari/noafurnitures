import { motion } from 'motion/react'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'

export default function BentoGrid() {
  return (
    <section className="w-full max-w-[1536px] py-12 px-6 md:px-12 bg-transparent flex flex-col gap-8">
      {/* Header section matching the image layout */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-slate-200/60 pt-10">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#1E293B] tracking-tight leading-tight">
            Architected for sculptural comfort
          </h2>
          <p className="text-sm md:text-base text-[#64748B] font-light">
            Bespoke layout solutions. Access the future of interior styling.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            document.getElementById('bespoke')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="px-6 py-2.5 bg-[#1E293B] hover:bg-[#0F172A] text-white rounded-full text-xs font-semibold tracking-wide transition-colors cursor-pointer self-start md:self-auto shadow-sm"
        >
          Consult Design
        </motion.button>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
        
        {/* Card 1: Tall Left Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl border border-white/45 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[480px] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
        >
          <div className="flex justify-between items-center text-[10px] md:text-[11px] font-medium text-[#94A3B8] tracking-widest uppercase">
            <span>NOA</span>
            <span>BESPOKE CONFIGURATION</span>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins text-[#1E293B] tracking-tight leading-tight">
              Unlock the beauty of your architectural spaces
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed font-light">
              Tailor, sculpt, and configure your layout without compromising on comfort. Experience zero-friction interior staging with personalized design consultations.
            </p>
          </div>
        </motion.div>

        {/* Right Columns Container (Card 2, 3, 4) */}
        <div className="md:col-span-7 flex flex-col gap-6">
          
          {/* Card 2: Wide Top Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl border border-white/45 rounded-[2rem] p-8 flex flex-col justify-between min-h-[220px] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
          >
            <div className="flex justify-between items-center text-[10px] md:text-[11px] font-medium text-[#94A3B8] tracking-widest uppercase mb-4">
              <span>DESIGN PANEL</span>
              <span>02</span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-bold font-poppins text-[#1E293B] tracking-tight">
                Real-time Curation
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed font-light">
                Track your upholstery selection, fabric grain, and exact dimensions step-by-step with our master artisans. Keep your finger on the pulse of your home's aesthetics.
              </p>
            </div>
            {/* Divider representation */}
            <div className="w-full h-[1px] bg-slate-100/50 mt-6"></div>
          </motion.div>

          {/* Bottom Row inside Right Side: Card 3 & Card 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 3: Bottom Left of Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl border border-white/45 rounded-[2rem] p-8 flex flex-col justify-between min-h-[220px] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] group"
            >
              <div className="flex justify-between items-center text-[10px] md:text-[11px] font-medium text-[#94A3B8] tracking-widest uppercase">
                <span>PREMIUM-GRADE</span>
                <span>03</span>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed font-light my-4">
                Solid hardwoods hand-built with premium teak and solid oak, protected by lifetime structural warranty.
              </p>

              <div className="flex justify-between items-center border-t border-slate-100/50 pt-4 mt-auto">
                <span className="text-xs font-semibold text-[#1E293B]/80 hover:text-[#0F172A] transition-colors cursor-pointer flex items-center gap-1">
                  View Materials
                </span>
                <div className="p-2 rounded-full bg-slate-50 border border-slate-100/50 group-hover:bg-slate-100 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#64748B]" />
                </div>
              </div>
            </motion.div>

            {/* Card 4: Bottom Right of Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl border border-white/45 rounded-[2rem] p-8 flex flex-col justify-between min-h-[220px] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] group"
            >
              <div className="flex justify-between items-center text-[10px] md:text-[11px] font-medium text-[#94A3B8] tracking-widest uppercase">
                <span>MODULAR FLEX</span>
                <span>04</span>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed font-light my-4">
                Arrange your modular pieces across your layout seamlessly. Comfort flows where conversation arises.
              </p>

              <div className="flex justify-between items-center border-t border-slate-100/50 pt-4 mt-auto">
                <span></span>
                <div className="p-2.5 rounded-full bg-slate-50 border border-slate-100/50 group-hover:bg-[#1E293B] group-hover:border-transparent group-hover:text-white transition-colors cursor-pointer">
                  <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}
