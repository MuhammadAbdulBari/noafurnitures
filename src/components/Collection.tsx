import { motion } from 'motion/react'
import { ArrowUpRight, Layers, Maximize2 } from 'lucide-react'

interface Product {
  id: number;
  name: string;
  category: string;
  material: string;
  dimensions: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'The Muse Sofa',
    category: 'Sculptural Sofa',
    material: 'Cream Bouclé & Solid Oak',
    dimensions: 'Custom Made-to-Order',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'The Aura Lounge',
    category: 'Minimalist Lounge Chair',
    material: 'Soft Beige Linen',
    dimensions: 'Custom Tailored',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'The Eclipse Sectional',
    category: 'Sculptural Sectional',
    material: 'Warm Taupe Cashmere',
    dimensions: 'Custom Segmented',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80'
  }
]

interface CollectionProps {
  id?: string;
}

export default function Collection({ id }: CollectionProps) {
  return (
    <section id={id} className="relative w-full max-w-[1536px] py-12 px-6 md:px-12 flex flex-col gap-8 border-t border-slate-200/60 pt-10">
      {/* Header Block */}
      <div className="flex flex-col gap-2 max-w-2xl">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 backdrop-blur-md border border-white/30 w-fit text-[#64748B] text-xs font-semibold tracking-wide">
          <Layers className="w-3.5 h-3.5" />
          <span>The Portfolio</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#1E293B] tracking-tight leading-tight mt-2">
          Bespoke Collection
        </h2>
        <p className="text-sm md:text-base text-[#64748B] font-light leading-relaxed">
          Designed with clean, sculptural silhouettes and calm neutral colors. Each luxury piece is customized to integrate seamlessly into your living space.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="flex flex-col justify-between bg-white/60 backdrop-blur-lg border border-white/40 rounded-[2rem] p-5 h-[500px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] group/card hover:border-[#CBD5E1] transition-all"
          >
            {/* Image Wrap */}
            <div className="relative w-full h-[240px] rounded-[1.2rem] overflow-hidden bg-slate-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] text-[#64748B] font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-slate-100 shadow-sm">
                Bespoke Design
              </div>
            </div>

            {/* Info and CTA */}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] font-semibold tracking-widest">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold font-poppins text-[#1E293B] mt-0.5 tracking-tight">
                    {product.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/40 backdrop-blur-sm border border-white/20 rounded-lg text-[10px] text-[#64748B] font-semibold">
                  <Maximize2 className="w-3 h-3 text-[#64748B]" />
                  <span>Custom Size</span>
                </div>
              </div>

              <div className="flex flex-col gap-0.5 text-xs text-[#64748B] font-light">
                <span>Material: {product.material}</span>
                <span className="text-[11px] text-[#94A3B8]">{product.dimensions}</span>
              </div>

              {/* Inquiry Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById('bespoke')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full flex items-center justify-between bg-[#1E293B] text-white rounded-full pl-5 pr-2.5 py-2.5 hover:bg-[#0F172A] transition-colors group cursor-pointer text-xs font-semibold tracking-wide"
              >
                <span>Request Custom Inquiry</span>
                <div className="bg-white/10 p-1.5 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
