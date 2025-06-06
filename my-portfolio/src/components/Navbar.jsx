import { Mail, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from "react-router-dom"; // Add this import if using react-router-dom

function Hamburger({ open }) {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center relative">
      <span
        className={`block h-0.5 w-6 bg-[#c7c7c7] rounded transition-all duration-300 ${
          open ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-[#c7c7c7] rounded my-1 transition-all duration-300 ${
          open ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-[#c7c7c7] rounded transition-all duration-300 ${
          open ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-neutral-800 text-white">
      {/* Change this div to a Link */}
      <Link to="/" className="text-lg font-semibold hover:underline">
        RannCreations
      </Link>
      {/* Desktop nav */}
      <div className="hidden sm:flex items-center gap-6 ml-auto">
        <nav className="flex gap-6 text-sm">
          <a href="#work" className="text-[#c7c7c7] hover:underline hover:text-[#c7c7c7]">Work</a>
          <a href="#about" className="text-[#c7c7c7] hover:underline hover:text-[#c7c7c7]">About</a>
          <a href="#contact" className="text-[#c7c7c7] hover:underline hover:text-[#c7c7c7]">Contact</a>
          <a
            href="/assets/CV_Abueg_2025.pdf"
            download="CV_Abueg_2025.pdf"
            className="text-[#c7c7c7] hover:underline hover:text-[#c7c7c7]"
          >
            Resume
          </a>
        </nav>
        <a
          href="#contact"
          className="border px-4 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-white hover:text-black transition text-[#c7c7c7] border-[#c7c7c7]"
        >
          Contact Me <ArrowUpRight size={14} />
        </a>
      </div>
      {/* Mobile nav */}
      <div className="flex sm:hidden ml-auto">
        <button
          onClick={() => setOpen(!open)}
          className="border px-4 py-2 rounded-full text-sm flex items-center gap-2 text-[#c7c7c7] border-[#c7c7c7] bg-transparent"
          aria-label="Open menu"
        >
          <Hamburger open={open} />
        </button>
        {open && (
          <div className="absolute top-16 right-6 bg-[#181818] border border-[#2c2b2b] rounded-xl shadow-lg flex flex-col w-40 z-50">
            <a href="#work" className="px-4 py-2 text-[#c7c7c7] hover:bg-neutral-800">Work</a>
            <a href="#about" className="px-4 py-2 text-[#c7c7c7] hover:bg-neutral-800">About</a>
            <a href="#contact" className="px-4 py-2 text-[#c7c7c7] hover:bg-neutral-800">Contact</a>
            <a
              href="/assets/CV_Abueg_2025.pdf"
              download="CV_Abueg_2025.pdf"
              className="px-4 py-2 text-[#c7c7c7] hover:bg-neutral-800"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
