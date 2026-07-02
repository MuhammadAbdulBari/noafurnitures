import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

export default function CtaBanner() {
  const bgImage = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop'

  return (
    <section className="w-full max-w-[1536px] py-10 px-3 md:px-5">
      <div 
        className="relative w-full h-[320px] md:h-[400px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col justify-end p-8 md:p-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

        {/* Content wrapper */}
        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold font-poppins tracking-tight leading-[1.1] text-white"
            >
              Melt rigid lines into fluid luxury.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base text-white/80 font-light"
            >
              Join the modern design movement transforming living spaces across the nation.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                document.getElementById('bespoke')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex items-center gap-2 bg-white text-[#1E293B] font-semibold text-xs md:text-sm px-6 py-3 rounded-full hover:bg-white/95 transition-colors cursor-pointer"
            >
              <div className="p-0.5 rounded-full bg-slate-100 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1E293B]" />
              </div>
              <span>Consult Design</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-xs md:text-sm rounded-full hover:bg-white/20 transition-colors cursor-pointer"
            >
              Explore Pieces
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
