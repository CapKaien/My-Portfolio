import { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaRegIdBadge } from "react-icons/fa";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function About({ scrollRef }) {
  // Locomotive Scroll for About page
  useEffect(() => {
    let scroll;
    if (scrollRef && scrollRef.current) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08,
      });
    }
    return () => {
      if (scroll) scroll.destroy();
    };
  }, [scrollRef]);

  return (
    <main className="w-full min-h-screen flex bg-[#0E0E0E] text-white px-6 md:px-20 py-12 box-border">
      {/* Left column */}
      <aside className="w-full max-w-lg flex flex-col justify-start px-12 pt-24 pb-10 z-10 bg-transparent">
        <div>
          <h1 className="text-5xl font-extrabold mb-2 text-white">
            Ranniel Abueg
          </h1>
          <h2 className="text-2xl font-semibold text-neutral-300 mb-3">
            Front End Designer/Developer
          </h2>
          <p className="text-base text-neutral-400 mb-10">
            I build responsive, accessible, and user-friendly web applications
            using modern technologies like React and Tailwind CSS.
          </p>
        </div>
        {/* Socials */}
        <div className="flex gap-4 mt-8 mb-2 text-[#c7c7c7] px-2">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://github.com/CapKaien"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ranniel-abueg-a082a636a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/ran_abueg/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </aside>
      {/* Right column (Locomotive Scroll container) */}
      <section
        ref={scrollRef}
        data-scroll-container
        className="flex-1 px-12 py-24"
        style={{
          minWidth: 0,
          background: "transparent",
        }}
      >
        {/* About Section */}
        <div
          id="about"
          className="mb-16"
          data-scroll-section
        >
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
            I'm a front-end developer passionate about crafting clean,
            responsive, and accessible user interfaces using modern tools like
            React, Vite, and Tailwind CSS. I love building digital experiences
            that are both visually appealing and user-friendly.
            <br />
            <br />
            Recently, I completed my internship at{" "}
            <span className="font-semibold text-[#38BDF8]">
              Leentech Network Solutions
            </span>
            , where I worked on designing and developing interfaces for a job
            portal using Tailwind CSS and React. I focused on building
            components that adapt well across different devices and screen
            sizes.
            <br />
            <br />I also led the development of{" "}
            <span className="font-bold text-white">ReadSpeak</span>, a
            speech-based learning platform designed to help elementary students
            improve their reading and comprehension. Through this project, I
            deepened my experience in API integration, UI/UX design, and
            accessibility.
            <br />
            <br />
            In my spare time, I enjoy exploring web animations, refining
            layouts, and learning new tech to level up my skills.
          </p>
        </div>

        {/* Experience Section */}
        <div
          id="experience"
          className="mb-16 mt-16 py-8"
          data-scroll-section
        >
          {/* Experience Label with icon and horizontal line */}
          <div className="relative w-full max-w-2xl mx-auto mb-8">
            <hr className="border-t border-[#2c2b2b]" />
            <span className="absolute right-8 -top-7 bg-[#F8F6ED] rounded-full w-14 h-14 flex items-center justify-center shadow-md border border-[#FFB545]">
              <FaRegIdBadge size={28} className="text-[#1e1e1e]" />
            </span>
          </div>
          <div className="text-sm text-neutral-400 mb-2">June 2024 — August 2024</div>
          <div className="font-semibold text-lg text-white mb-1">
            Frontend Developer Intern · Leentech Network Solutions
          </div>
          <div className="text-base text-neutral-300 mb-2">
            Designed and developed responsive UI components for a job portal
            using React and Tailwind CSS. Collaborated with designers and
            developers to implement clean, accessible layouts, and contributed
            to improving the overall user experience of the platform.
          </div>
          <div className="flex gap-2 flex-wrap mt-2">
            <span className="bg-[#1e293b] text-[#38BDF8] px-3 py-1 rounded-full text-xs font-semibold">
              JavaScript
            </span>
            <span className="bg-[#1e293b] text-[#38BDF8] px-3 py-1 rounded-full text-xs font-semibold">
              React
            </span>
            <span className="bg-[#1e293b] text-[#38BDF8] px-3 py-1 rounded-full text-xs font-semibold">
              Tailwind CSS
            </span>
            <span className="bg-[#1e293b] text-[#38BDF8] px-3 py-1 rounded-full text-xs font-semibold">
              Figma
            </span>
          </div>
        </div>

        {/* Projects Section */}
        <div
          id="projects"
          className="mb-16"
          data-scroll-section
        >
          <p className="text-base text-neutral-400 leading-relaxed max-w-2xl">
            Loosely designed in{" "}
            <span className="font-semibold text-white">Figma</span> and coded in{" "}
            <span className="font-semibold text-white">Visual Studio Code</span> by
            yours truly. Built with{" "}
            <span className="font-semibold text-white">ReactJS+Vite</span> and{" "}
            <span className="font-semibold text-white">Tailwind CSS</span>, deployed
            with <span className="font-semibold text-white">Vercel</span>. All text
            is set in the{" "}
            <span className="font-semibold text-white">Inter</span> typeface.
          </p>
        </div>
      </section>
    </main>
  );
}
