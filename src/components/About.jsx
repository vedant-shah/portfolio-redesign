import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import { content } from "../config/content";

function About() {
  const sectionRef = useRef(null);
  const { about } = content;

  useEffect(() => {
    // Reduced motion: leave text and image at their resting state, no scroll effects.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    try {
      const section = sectionRef.current;
      if (!section) return;

      // Split the paragraph into words and stagger each word's CSS
      // transition. The reveal itself is driven by IntersectionObserver +
      // the `about-inview` class (see App.css) — unlike scroll events,
      // intersection callbacks fire reliably during 1-finger touch drags.
      section.querySelectorAll(".animate-text").forEach((el) => {
        const text = new SplitType(el, { types: "words" });
        text.words?.forEach((word, i) => {
          word.style.transitionDelay = `${i * 18}ms`;
        });
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          section.classList.toggle("about-inview", entry.isIntersecting);
        },
        { threshold: 0.35 },
      );
      observer.observe(section);

      return () => {
        observer.disconnect();
      };
    } catch (err) {
      console.error("Animation setup failed:", err);
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container relative mx-auto flex min-h-screen items-center justify-center bg-[#e9e9e9] px-4 py-12 text-black dark:bg-[#09090b] dark:text-white sm:px-6 md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="relative w-full max-w-md">
            <img
              src={about.image.src}
              alt={about.image.alt}
              className="profile aspect-square w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex w-full items-center md:w-1/2">
          <h1 className="animate-text geist-mono text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl">
            {about.intro}
            <br />
            <span className="mt-4 block">
              {about.outroMuted}{" "}
              <span className="text-[#fe7c7b] dark:text-[#ffcaca]">
                {about.outroHighlight}
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
