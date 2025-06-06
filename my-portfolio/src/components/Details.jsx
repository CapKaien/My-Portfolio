import { FaTwitter, FaInstagram, FaGithub, FaFacebook, FaLinkedin, FaRegIdBadge } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Details() {
  return (
    <div className="px-6 py-12">
      {/* Divider with id badge icon above the heading */}
      <div className="relative w-full max-w-[1600px] mx-auto mb-10">
        <hr className="border-t border-[#2c2b2b]" />
        <span className="absolute right-8 -top-7 bg-[#F8F6ED] rounded-full w-14 h-14 flex items-center justify-center shadow-md border border-[#FFB545]">
          <FaRegIdBadge size={28} className="text-[#1e1e1e]" />
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 text-xl">
        {/* First column: plain text */}
        <div className="text-xs sm:text-sm text-neutral-400 text-left font-normal normal-case min-w-[120px]">
          // Design, Code,&nbsp;Engage
        </div>
        {/* Second column: socials */}
        <div className="socials flex gap-6">
          <a
            href="https://x.com/ranlovesbears"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/ran_abueg/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/CapKaien"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/rannnn17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/ranniel-abueg-a082a636a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        {/* Third column: email oval */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=rannielabueg17@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 rounded-full border border-[#2c2b2b] bg-[#181818] text-sm gap-2 hover:bg-[#232323] transition min-w-[220px] mt-4 md:mt-0"
        >
          <MdEmail size={20} />
          <span className="truncate">rannielabueg17@gmail.com</span>
        </a>
      </div>
      {/* Main content row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mt-10 w-full">
        {/* Left: Large text */}
        <div className="flex-1 text-left">
          <motion.p
            className="text-[22px] sm:text-2xl md:text-3xl lg:text-[32px] leading-snug font-normal"
            style={{ color: "#c7c7c7" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            Powering success in the digital age.<br />
            Together, we create a future vision through<br className="hidden md:block" />
            commitment and relentless pursuit of innovation.
          </motion.p>
          <motion.p
            className="text-[22px] sm:text-2xl md:text-3xl lg:text-[32px] font-bold mt-12"
            style={{ color: "#2FCA55" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            Shaping the future innovating with purpose
          </motion.p>
        </div>
        {/* Right: Small text */}
        <motion.div
          className="flex-1 text-left md:max-w-xs mt-6 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <p className="text-[14px] text-neutral-400">
            My combination of design, coding, and interaction<br className="hidden md:block" />
            skills sets me apart in the tech industry.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
