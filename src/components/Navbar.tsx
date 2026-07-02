import { motion } from 'motion/react'
import { ArrowUpRight, ChevronRight } from 'lucide-react'

interface MenuItem {
  name: string;
  hasDropdown?: boolean;
}

const menuItems: MenuItem[] = [
  { name: 'Collection', hasDropdown: true },
  { name: 'Bespoke' },
  { name: 'Our Story' },
  { name: 'Spaces', hasDropdown: true }
]

export default function Navbar() {
  const Logo = () => (
    <div className="flex flex-col items-center select-none text-center leading-none">
      <span className="font-regular tracking-tighter text-xl text-[rgba(30,50,90,0.9)]">
        NOA
      </span>
      <span className="text-[8px] font-normal tracking-[0.25em] text-[rgba(30,50,90,0.6)] uppercase mt-0.5 mr-[-0.25em]">
        HOME
      </span>
    </div>
  )

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      {/* Left Side: Desktop Logo */}
      <div className="flex-1 hidden md:flex items-center">
        <Logo />
      </div>

      {/* Center Menu in a Glassy Pill */}
      <div className="hidden md:flex items-center bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-6 py-2.5 shadow-sm">
        <ul className="flex items-center gap-8 text-[#1E293B] font-bold text-sm">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer hover:text-[#1E293B]/70 transition-colors flex items-center gap-1 group text-[#1E293B]"
            >
              {item.name}
              {item.hasDropdown && (
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#1E293B]/70" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Logo */}
      <div className="md:hidden">
        <Logo />
      </div>

      {/* Right Button */}
      <div className="flex-1 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group cursor-pointer"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">Book Consult</span>
        </motion.button>
      </div>
    </nav>
  )
}
