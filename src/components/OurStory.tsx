import { motion } from 'motion/react'
import { Sparkles, HardHat, Award, Globe } from 'lucide-react'

interface OurStoryProps {
  id?: string;
}

export default function OurStory({ id }: OurStoryProps) {
  const stats = [
    {
      icon: <HardHat className="w-5 h-5 text-[rgba(30,50,90,0.8)]" />,
      label: 'Solid Hardwoods',
      value: '100%',
      desc: 'Teak, ash, and solid white oak internal frames built to last generations.'
    },
    {
      icon: <Award className="w-5 h-5 text-[rgba(30,50,90,0.8)]" />,
      label: 'Artisanal Craft',
      value: '4-6 Wks',
      desc: 'Carefully modeled, hand-carved, and upholstered by master craftsmen.'
    },
    {
      icon: <Globe className="w-5 h-5 text-[rgba(30,50,90,0.8)]" />,
      label: 'Nationwide Delivery',
      value: 'Pakistan',
      desc: 'Fully crated premium shipping to protect sculptural contours nationwide.'
    }
  ]

  return (
    <section id={id} className="relative w-full max-w-[1536px] bg-white/20 backdrop-blur-xl border border-white/20 rounded-[1.5rem] md:rounded-[3rem] p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Left Column: Narrative */}
      <div className="lg:col-span-6 flex flex-col gap-5">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(30,50,90,0.05)] border border-[rgba(30,50,90,0.1)] w-fit text-[rgba(30,50,90,0.9)] text-xs font-normal">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Atelier</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-normal text-[#5E6470] tracking-tight leading-[1.1]">
          Modern Luxury, Custom Made
        </h2>
        <div className="flex flex-col gap-4 text-sm md:text-base text-[#5E6470]/90 leading-relaxed font-normal">
          <p>
            NOA Home is a bespoke furniture and design studio that creates modern luxury pieces custom-made for individual spaces rather than mass-produced stock furniture.
          </p>
          <p>
            Our work leans into clean, minimalist silhouettes — think sculptural sofas, sectionals, and lounge chairs in soft neutral tones like cream and beige, paired with a calm, editorial style of interior staging.
          </p>
          <p>
            Each piece appears designed to feel tailored to the room it's placed in, blending comfort with a refined, contemporary aesthetic rather than conventional, traditional furniture design.
          </p>
          <p className="font-semibold text-[rgba(30,50,90,0.9)]">
            Based in Pakistan, shipping nationwide. A modern alternative to mass-produced furniture.
          </p>
        </div>
      </div>

      {/* Right Column: Specifications Card Grid */}
      <div className="lg:col-span-6 flex flex-col gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex items-center justify-between bg-white/30 backdrop-blur-md border border-white/25 rounded-[1.2rem] p-4 gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/70 p-2.5 rounded-full flex items-center justify-center border border-white/25 shadow-sm">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-[rgba(30,50,90,0.6)] font-normal">
                  {stat.label}
                </span>
                <p className="text-xs text-[#5E6470] mt-0.5 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>

            <div className="text-right min-w-[70px]">
              <span className="text-xl md:text-2xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight">
                {stat.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
