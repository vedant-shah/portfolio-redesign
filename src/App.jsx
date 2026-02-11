import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Connect from "./components/Connect";
import { gsap } from "gsap";
import { content } from "./config/content";

function App() {

  useEffect(() => {
    function startLoader() {
      let counter = document.querySelector('.counter');
      let current = 0;

      function updateCounter() {
        current += Math.floor(Math.random() * 14) + 1;
        if (current >= 100) {
          current = 100;
          return
        }
        counter.innerHTML = current + '%';
        let delay = 30;
        setTimeout(updateCounter, delay);
      }

      updateCounter();
    }

    startLoader();

    gsap.to('.counter', 0.2, {
      delay: 1.1,
      opacity: 0,
    });
    gsap.to('.counter-1', 0.2, {
      delay: 1.1,
      opacity: 0,
    });

    gsap.to('.bar', 0.6, {
      delay: 1.3,
      height: 0,
      stagger: {
        amount: 0.25
      },
      ease: 'power4.inOut',
      onComplete: () => {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.counter').style.display = 'none';
        document.querySelector('.counter-1').style.display = 'none';
        document.querySelector('.bar').style.display = 'none';
      }
    });
  }, []);
  return (
    <div className="w-[100vw] bg-[#e9e9e9] dark:bg-[#09090b]">
      <h1 className="counter dark:text-[#bcbcc4] text-[#1a1a1a]">0</h1>
      <h1 className="counter-1 dark:text-[#bcbcc4] text-[#1a1a1a]">
        {content.loader.tagline}
      </h1>
      <div className="overlay">
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
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
