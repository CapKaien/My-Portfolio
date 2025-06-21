import { useRef, useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
];

export default function About({ scrollRef }) {
  const [activeSection, setActiveSection] = useState("about");
  const rightColRef = useRef(null);
  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
  };

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

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = rightColRef.current.scrollTop;
      let current = "about";
      for (const sec of sections) {
        const ref = sectionRefs[sec.id].current;
        if (ref && ref.offsetTop - 40 <= scrollY) {
          current = sec.id;
        }
      }
      setActiveSection(current);
    };
    const node = rightColRef.current;
    if (node) node.addEventListener("scroll", handleScroll);
    return () => node && node.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section on nav click
  const scrollToSection = (id) => {
    const ref = sectionRefs[id].current;
    if (ref && rightColRef.current) {
      rightColRef.current.scrollTo({
        top: ref.offsetTop - 24,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="w-full min-h-screen flex bg-[#0E0E0E] text-white">
      {/* Left column */}
      <aside className="w-full max-w-lg flex flex-col justify-start px-12 pt-24 pb-10 h-screen z-10 bg-transparent">
        <div>
          <h1 className="text-5xl font-extrabold mb-2 text-white">Brittany Chiang</h1>
          <h2 className="text-2xl font-semibold text-neutral-300 mb-3">Front End Engineer</h2>
          <p className="text-base text-neutral-400 mb-10">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
        {/* Section Nav */}
        <nav className="flex flex-col gap-2 mt-8 mb-10">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`flex items-center gap-2 text-left px-2 py-1 border-l-2 transition-all
                ${
                  activeSection === sec.id
                    ? "border-[#38BDF8] text-white font-bold"
                    : "border-transparent text-neutral-400 font-normal"
                }`}
              style={{ letterSpacing: "2px" }}
            >
              {sec.label}
            </button>
          ))}
        </nav>
        {/* Socials */}
        <div className="flex gap-4 mt-auto mb-2 text-[#c7c7c7]">
          <a href="https://github.com/CapKaien" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/ranniel-abueg-a082a636a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://www.instagram.com/ran_abueg/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl" />
          </a>
        </div>
      </aside>
      {/* Right column (scrollable, fixed to viewport) */}
      <section
        ref={scrollRef}
        data-scroll-container
        className="flex-1 overflow-y-auto px-10 py-24 h-screen"
        style={{
          minWidth: 0,
          background: "transparent",
        }}
      >
        {/* About Section */}
        <div ref={sectionRefs.about} id="about" className="mb-16">
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
            I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
            <br /><br />
            Currently, I'm a Senior Front-End Engineer at <span className="font-semibold text-[#38BDF8]">Klaviyo</span>, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
            <br /><br />
            In the past, I've had the opportunity to develop software across a variety of settings — from <span className="font-bold text-white">advertising agencies and large corporations to start-ups</span> and small digital product studios. Additionally, I also released a <span className="font-bold text-white">comprehensive video course</span> a few years ago, guiding learners through building a web app with the Spotify API.
            <br /><br />
            In my spare time, I’m usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for <span className="font-bold text-white">Korok seeds</span>.
          </p>
        </div>
        {/* Experience Section */}
        <div ref={sectionRefs.experience} id="experience" className="mb-16">
          <div className="text-sm text-neutral-400 mb-2">2024 — PRESENT</div>
          <div className="font-semibold text-lg text-white mb-1">
            Senior Frontend Engineer, Accessibility · Klaviyo <span className="inline-block align-middle">↗</span>
          </div>
          <div className="text-base text-neutral-300 mb-2">
            Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.
          </div>
          <div className="flex gap-2 flex-wrap mt-2">
            <span className="bg-[#1e293b] text-[#38BDF8] px-3 py-1 rounded-full text-xs font-semibold">JavaScript</span>
            <span className="bg-[#1e293b] text-[#38BDF8] px-3 py-1 rounded-full text-xs font-semibold">TypeScript</span>
            <span className="bg-[#1e293b] text-[#38BDF8] px-3 py-1 rounded-full text-xs font-semibold">React</span>
            <span className="bg-[#1e293b] text-[#38BDF8] px-3 py-1 rounded-full text-xs font-semibold">Storybook</span>
          </div>
        </div>
        {/* Projects Section */}
        <div ref={sectionRefs.projects} id="projects" className="mb-16">
          <div className="font-semibold text-lg text-white mb-2">Projects</div>
          <ul className="list-disc ml-6 text-neutral-300">
            <li>Spotify API Video Course</li>
            <li>Accessible UI Component Library</li>
            <li>Personal Portfolio Website</li>
          </ul>
        </div>
      </section>
    </main>
  );
}