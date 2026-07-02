import { motion } from 'motion/react'

export default function Stats() {
  const stats = [
    {
      value: '1.2K+',
      label: 'SPACES STYLED',
    },
    {
      value: '100%',
      label: 'SOLID HARDWOODS',
    },
    {
      value: '4-6 WKS',
      label: 'ARTISANAL CRAFT',
    },
    {
      value: '24/7',
      label: 'DESIGN SUPPORT',
    },
  ]

  return (
    <section className="w-full max-w-[1536px] py-12 md:py-16 px-6 md:px-12 bg-transparent">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center md:items-start text-center md:text-left relative"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-[#1E293B] tracking-tight">
              {stat.value}
            </span>
            <span className="text-[10px] md:text-[11px] font-medium text-[#64748B] uppercase tracking-[0.25em] mt-3">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
