import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { content } from "../config/content";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const { about } = content;

  useEffect(() => {
    try {
      const splitTypes = document.querySelectorAll(".animate-text").forEach((word) => {
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
        <div className="flex items-center justify-center w-full md:w-1/2">
          <div className="relative w-full max-w-md">
            <img
              src={about.image.src}
              alt={about.image.alt}
              className="object-cover w-full h-auto profile rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex items-center w-full md:w-1/2">
          <h1 className="text-lg animate-text geist-mono sm:text-xl md:text-xl lg:text-xl xl:text-2xl">
            {about.intro}
            <br />
            <span className="block mt-4 text-zinc-400">
              {about.outroMuted}{" "}
              <span className="text-[#fe7c7b] dark:text-[#93ffcc]">
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
