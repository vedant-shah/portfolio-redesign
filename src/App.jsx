import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Connect from "./components/Connect";
import { gsap } from "gsap";

function App() {

  useEffect(() => {
    function startLoader() {
      let counter = document.querySelector('.counter');
      let current = 0;

      function updateCounter() {
        current += Math.floor(Math.random() * 10) + 1;
        if (current >= 100) {
          current = 100;
          return
        }
        counter.innerHTML = current + '%';
        let delay = 55;
        setTimeout(updateCounter, delay);
      }

      updateCounter();
    }

    startLoader();

    gsap.to('.counter', 0.25, {
      delay: 2,
      opacity: 0,
    });
    gsap.to('.counter-1', 0.25, {
      delay: 2,
      opacity: 0,
    });

    gsap.to('.bar', 1, {
      delay: 2.5,
      height: 0,
      stagger: {
        amount: 0.4
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
    <div className="w-[100vw] bg-[#09090b]">
      <h1 className="counter">0</h1>
      <h1 className="counter-1">SIT BACK. RELAX.</h1>
      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
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
