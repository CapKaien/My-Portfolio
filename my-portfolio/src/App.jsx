import './index.css';  
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Details from './components/Details';
import Works from './components/Works';
import AllWorks from "./components/AllWorks";

export default function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <Router>
      <motion.div
        ref={scrollRef}
        data-scroll-container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-[#0E0E0E] min-h-screen px-2 sm:px-6 lg:px-16"
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Details />
                <Works />
              </>
            }
          />
          <Route path="/all-works" element={<AllWorks />} />
        </Routes>
      </motion.div>
    </Router>
  );
}