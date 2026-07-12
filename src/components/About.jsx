import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { content } from "../config/content";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const { about } = content;

  useEffect(() => {
    // Reduced motion: leave text and image at their resting state, no scroll effects.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    try {
      const splitTypes = document
        .querySelectorAll(".animate-text")
        .forEach((word) => {
          const text = new SplitType(word, { types: "words" });
          return gsap.from(text.words, {
            scrollTrigger: {
              trigger: word,
              start: "top 70%",
              end: "top 20%",
              scrub: true,
            },
            opacity: 0.4,
            stagger: 0.2,
          });
        });

      const profile = document.querySelector(".profile");
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".profile",
          start: "top 70%",
          end: "top 20%",
          scrub: true,
          ease: "power1.out",
        },
      });

      growTl.to(".profile", {
        scale: 0.9,
      });

      // The mono font swaps in after this setup runs and shifts the text,
      // leaving ScrollTrigger measuring stale offsets — on mobile the reveal
      // then never fires. Recompute once fonts have settled.
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }

      return () => {
        splitTypes?.forEach((anim) => anim?.kill());
        growTl.kill();
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
              className="profile h-auto w-full rounded-xl object-cover"
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
