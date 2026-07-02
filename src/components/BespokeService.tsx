import { motion } from 'motion/react'
import { Compass, Hammer, Truck, ClipboardList, CheckCircle2, Sliders } from 'lucide-react'
import { useState } from 'react'

interface BespokeServiceProps {
  id?: string;
}

export default function BespokeService({ id }: BespokeServiceProps) {
  const [submitted, setSubmitted] = useState(false)
  const [spaceType, setSpaceType] = useState('Living Room')
  const [selectedFabric, setSelectedFabric] = useState('Bouclé Cream')
  const [selectedShape, setSelectedShape] = useState('Curved Silhouette')
  const [fullName, setFullName] = useState('')
  const [notes, setNotes] = useState('')

  const fabrics = [
    { name: 'Bouclé Cream', color: '#FAF7F2', border: '#E3DFD5', desc: 'Soft textured wool blend' },
    { name: 'Cashmere Taupe', color: '#BFAFA0', border: '#A69788', desc: 'Premium luxury weave' },
    { name: 'Linen Beige', color: '#E5DED4', border: '#CFC5B8', desc: 'Calm organic linen' }
  ]

  const shapes = ['Curved Silhouette', 'Modular Sectional', 'Minimalist Lounge']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const steps = [
    {
      icon: <Compass className="w-4 h-4 text-[#1E293B]" />,
      title: '1. Spatial Consultation',
      desc: 'Connect with our design advisors to discuss layout dimensions, custom sizing, and architectural styling.'
    },
    {
      icon: <Hammer className="w-4 h-4 text-[#1E293B]" />,
      title: '2. Material & Shape Curation',
      desc: 'Select premium neutral fabrics in soft cream and beige tones, tailored to your custom configuration.'
    },
    {
      icon: <Truck className="w-4 h-4 text-[#1E293B]" />,
      title: '3. National Craft Delivery',
      desc: 'Handcrafted by skilled artisans and shipped nationwide with premium white-glove logistics.'
    }
  ]

  return (
    <section id={id} className="relative w-full max-w-[1536px] py-16 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch border-t border-slate-200/60 pt-12 bg-transparent">
      
      {/* Left Column: Information Steps & Stepper */}
      <div className="lg:col-span-6 flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 backdrop-blur-md border border-white/30 w-fit text-[#64748B] text-xs font-semibold tracking-wide">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>Tailoring Service</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-[#1E293B] tracking-tight leading-tight mt-3">
            Bespoke Curation
          </h2>
          <p className="text-sm md:text-base text-[#64748B] font-light leading-relaxed max-w-lg mt-1">
            We reject mass production. Each piece is modeled, cut, and tailored specifically to harmonize with your space's architectural layout.
          </p>
        </div>

        {/* Stepper Timeline */}
        <div className="flex flex-col gap-6 relative pl-6 border-l border-slate-300/40 ml-4 py-2 mt-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col gap-1.5"
            >
              {/* Stepper Node Bullet */}
              <div className="absolute -left-[37px] top-1 w-6 h-6 rounded-full bg-[#f0f0f0] border border-slate-300/60 flex items-center justify-center shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1E293B]" />
              </div>
              
              <h3 className="text-sm md:text-base font-bold text-[#1E293B]">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-[#64748B] font-light leading-relaxed max-w-md">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Curation Preview Box */}
        <div className="mt-4 p-5 rounded-[1.5rem] bg-white/30 backdrop-blur-xl border border-white/20 shadow-sm max-w-md flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#1E293B]/60 uppercase tracking-widest">
            <Sliders className="w-3 h-3 text-[#1E293B]/70" />
            <span>Active Curation Summary</span>
          </div>
          <div className="text-base font-bold text-[#1E293B] mt-0.5">
            {selectedShape} <span className="text-[#64748B] font-light">in</span> {selectedFabric}
          </div>
          <div className="text-xs text-[#64748B] font-semibold">
            Configured for the <span className="text-[#1E293B]">{spaceType}</span>
          </div>
        </div>
      </div>

      {/* Right Column: Custom Configuration Studio Panel */}
      <div className="lg:col-span-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl border border-white/45 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_32px_0_rgba(255,255,255,0.06)]"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-poppins text-[#1E293B] tracking-tight">
                  Design Studio Inquiry
                </h3>
                <p className="text-xs text-[#64748B] font-light mt-1">
                  Tune your preferences below and connect with a bespoke advisor.
                </p>
              </div>

              <div className="flex flex-col gap-5 my-2">
                
                {/* 1. Shape Configuration */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] font-bold tracking-widest">
                    1. Select Shape geometry
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {shapes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedShape(s)}
                        className={`text-xs py-2 px-3 rounded-full border transition-all cursor-pointer font-semibold ${selectedShape === s
                            ? 'bg-[#1E293B] text-white border-transparent shadow-sm'
                            : 'bg-white/40 backdrop-blur-sm border border-white/20 text-[#64748B] hover:bg-white/70'
                          }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Fabric & Material Swatches */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] font-bold tracking-widest">
                    2. Select Upholstery Material
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {fabrics.map((f) => (
                      <button
                        key={f.name}
                        type="button"
                        onClick={() => setSelectedFabric(f.name)}
                        className={`flex flex-col items-center gap-2 p-2.5 rounded-2xl border transition-all cursor-pointer text-left ${selectedFabric === f.name
                            ? 'bg-white border-[#1E293B] shadow-sm ring-1 ring-[#1E293B]'
                            : 'bg-white/40 border-white/20 hover:bg-white/60'
                          }`}
                      >
                        <div 
                          className="w-7 h-7 rounded-full shadow-inner border"
                          style={{ backgroundColor: f.color, borderColor: f.border }}
                        />
                        <div className="flex flex-col items-center text-center">
                          <span className="text-[10px] font-bold text-[#1E293B]">{f.name}</span>
                          <span className="text-[8px] text-[#64748B] font-light hidden sm:block leading-none mt-0.5">{f.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Space selection */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] font-bold tracking-widest">
                    3. Target Space
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {['Living Room', 'Bedroom', 'Office'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSpaceType(t)}
                        className={`text-xs py-2 px-1 rounded-full border transition-all cursor-pointer font-semibold ${spaceType === t
                            ? 'bg-[#1E293B] text-white border-transparent shadow-sm'
                            : 'bg-white/35 backdrop-blur-sm border border-white/20 text-[#64748B] hover:bg-white/50'
                          }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Full Name Text Input (Floating line style) */}
                <div className="flex flex-col gap-1.5 mt-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] font-bold tracking-widest">
                    Your Name
                  </span>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full text-xs md:text-sm py-2 px-1 bg-transparent border-b border-slate-300 focus:border-[#1E293B] outline-none text-[#1E293B] placeholder-slate-400/80 transition-colors font-light"
                  />
                </div>

                {/* 5. Requirements Textarea */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] font-bold tracking-widest">
                    Bespoke Notes
                  </span>
                  <textarea
                    required
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Curved custom size details, room measurements..."
                    className="w-full text-xs md:text-sm py-2 px-1 bg-transparent border-b border-slate-300 focus:border-[#1E293B] outline-none text-[#1E293B] placeholder-slate-400/80 transition-colors resize-none font-light"
                  />
                </div>
              </div>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center bg-[#1E293B] hover:bg-[#0F172A] text-white rounded-full py-3.5 transition-colors cursor-pointer text-xs font-semibold tracking-wider uppercase mt-4 shadow-sm"
              >
                Submit Consultation Request
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center gap-5 py-12"
            >
              <div className="bg-emerald-50 text-emerald-600 p-4 rounded-full border border-emerald-100 flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl md:text-2xl font-bold font-poppins text-[#1E293B]">
                  Curation Inquiry Saved
                </h4>
                <p className="text-sm text-[#64748B] font-light max-w-sm leading-relaxed">
                  We have received your custom request: <br />
                  <span className="text-[#1E293B] font-semibold">{selectedShape}</span> in <span className="text-[#1E293B] font-semibold">{selectedFabric}</span> for your <span className="text-[#1E293B] font-semibold">{spaceType}</span>. <br />
                  Our design atelier advisor will contact you within 24 hours.
                </p>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFullName('')
                  setNotes('')
                }}
                className="text-xs text-[#1E293B] hover:underline font-semibold cursor-pointer mt-4"
              >
                Start another configuration
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
