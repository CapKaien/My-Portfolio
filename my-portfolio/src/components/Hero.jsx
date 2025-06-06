import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function BlinkingDot() {
  return (
    <span
      className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2"
      style={{
        background: "#2FCA55",
        animation: "blink 1s infinite"
      }}
    />
  );
}

function AnimatedCursor({ color = "#fff", style = {} }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    let raf;
    function animate() {
      if (cursorRef.current) {
        // Use different animation for pink cursor
        const now = Date.now();
        const x =
          color === "#FF5EC5"
            ? 70 + Math.sin(now / 400) * 18
            : 40 + Math.sin(now / 600) * 18;
        const y =
          color === "#FF5EC5"
            ? 10 + Math.cos(now / 500) * 10
            : 10 + Math.cos(now / 800) * 10;
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      raf = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, [color]);

  return (
    <svg
      ref={cursorRef}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className="sm:w-6 sm:h-6"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 10,
        pointerEvents: "none",
        ...style,
      }}
    >
      <polygon points="0,0 24,12 13,15 10,24" fill={color} />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-2 sm:px-4 py-10 sm:py-20 relative">
      {/* Animated Cursor (white, global) */}
      <div className="absolute left-1/2 top-16 sm:top-24" style={{ pointerEvents: "none" }}>
        <AnimatedCursor color="#fff" />
      </div>
      <h1
        className="
          mt-4
          text-center
          uppercase
          font-bold
          font-hanken
          leading-[1.03]
          w-full
          max-w-xs
          sm:max-w-lg
          md:max-w-2xl
          lg:max-w-3xl
          mx-auto
          select-none
        "
      >
        <div className="flex flex-row items-start justify-center w-full relative">
          {/* Left side label */}
          <div className="absolute font-normal left-0 top-6 sm:top-10 flex flex-col items-start gap-1 text-left text-[0.7rem] sm:text-xs md:text-sm hidden sm:flex">
            <span className="text-[#c7c7c7]">// UI/UX Designer</span>
            <span className="text-[#c7c7c7]">Frontend Developer</span>
            <span className="bg-[#17a2fa] text-white px-2 py-0.5 rounded-full text-[0.7rem] sm:text-xs mt-1">Dev</span>
          </div>
          <div className="main-hero flex flex-col items-center">
            <div className="font-bold text-[2rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style={{ color: '#A374FF' }}>
              UI/UX
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-4">
              <div className="font-bold text-[2rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style={{ color: '#F1C069' }}>
                DESIGNER
              </div>
              <span className="ml-2 font-normal sm:ml-4 text-[0.7rem] sm:text-xs text-[#c7c7c7] hidden md:inline">// Based in The Philippines</span>
            </div>
            {/* FRONTEND with pink cursor */}
            <div className="text-[2rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl relative flex items-center justify-center">
              <span style={{ color: '#fff' }}>&amp;</span>
              <span
                style={{
                  color: '#2FCA55',
                  position: "relative",
                  display: "inline-block",
                  marginLeft: "0.3em" // Add space here
                }}
              >
                FRONTEND
                {/* Pink animated cursor */}
                <span
                  className="absolute"
                  style={{
                    left: "-9.5rem",
                    bottom: "1.5rem"
                  }}
                >
                  <AnimatedCursor color="#FF5EC5" />
                </span>
              </span>
            </div>
            <div className="flex flex-row items-center justify-center w-full flex-wrap">
              <span className="text-[2rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 md:mt-4 flex items-center">
                <span style={{ color: '#17F1D1' }}>DEVELOPER.</span>
              </span>
              {/* Let's Connect badge */}
              <span className="ml-2 sm:ml-4 flex items-center mt-2 md:mt-4">
                <span className="relative flex items-center">
                  <span className="bg-[#181818] border border-[#2c2b2b] rounded-full px-2 sm:px-3 py-0.5 text-[0.7rem] sm:text-xs text-[#c7c7c7] font-semibold flex items-center gap-2 shadow">
                    <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-1" style={{
                      background: "#2FCA55",
                      animation: "blink 1s infinite"
                    }} />
                    Let's Connect
                  </span>
                </span>
              </span>
              {/* Username badge */}
              <span className="ml-2 mt-2 md:mt-4">
                <span className="bg-[#7b61ff] text-white px-2 py-0.5 rounded-full text-[0.7rem] sm:text-xs">thegr8ranniel</span>
              </span>
            </div>
          </div>
        </div>
      </h1>
      <motion.p
        className="mt-6 text-sm xs:text-base sm:text-lg md:text-xl font-medium text-center text-[#c7c7c7] max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        I create designs that borders on{' '}
        <span style={{ color: '#A374FF' }}>efficiency</span>,{' '}
        <span style={{ color: '#17F1D1' }}>aesthetics</span>, and{' '}
        <span style={{ color: '#F1C069' }}>functionality</span>.
      </motion.p>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
        `}
      </style>
    </section>
  );
}
