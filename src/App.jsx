import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Connect from "./components/Connect";
import ScrollProgress from "./components/ScrollProgress";
import { gsap } from "gsap";
import { content } from "./config/content";

function App() {
  useEffect(() => {
    const overlay = document.querySelector(".overlay");
    const tagline = document.querySelector(".counter-1");
    const bars = gsap.utils.toArray(".bar");

    const reveal = () => {
      overlay.style.display = "none";
      tagline.style.display = "none";
    };

    // Reduced motion: skip the intro entirely, show content immediately.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      reveal();
      return;
    }

    const tl = gsap.timeline({ onComplete: reveal });
    tl.to(tagline, { opacity: 0, duration: 0.2, delay: 0.35 });
    tl.to(
      bars,
      {
        height: 0,
        duration: 0.5,
        stagger: { amount: 0.15 },
        ease: "power4.inOut",
      },
      "-=0.05",
    );

    // Let the visitor skip the intro the moment they show intent.
    const skip = () => tl.progress(1);
    const opts = { once: true, passive: true };
    window.addEventListener("pointerdown", skip, opts);
    window.addEventListener("keydown", skip, opts);
    window.addEventListener("wheel", skip, opts);
    window.addEventListener("touchmove", skip, opts);

    return () => {
      tl.kill();
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
    };
  }, []);
  return (
    <div className="w-[100vw] bg-[#e9e9e9] dark:bg-[#09090b]">
      <ScrollProgress />
      <h1 className="counter-1 text-[#1a1a1a] dark:text-[#bcbcc4]">
        {content.loader.tagline}
      </h1>
      <div className="overlay">
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
        <div className="bar bg-[#f6f6ee] dark:bg-[#161617]"></div>
      </div>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Connect />
    </div>
  );
}

export default App;
