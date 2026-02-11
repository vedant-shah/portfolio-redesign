import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import Switcher from "./Switcher";
import { content } from "../config/content";

function Hero() {
  const { hero } = content;
  const emailSubject = encodeURIComponent("Hey, Vedant!");
  const emailHref = `mailto:${hero.navCta.email}?subject=${emailSubject}`;

  return (
    <div className="container relative mx-auto flex min-h-[100vh] flex-col bg-[#e9e9e9] p-6 text-black transition-colors duration-300 dark:bg-[#09090b] dark:text-white sm:p-6 md:p-12">
      <nav
        className="flex items-center justify-between w-full overflow-hidden"
        aria-label="Top Navigation">
        <div className="overflow-hidden">
          <Switcher />
        </div>
        <div className="flex items-center overflow-hidden group">
          <div className="overflow-hidden">
            <a
              className="geist-mono whitespace-nowrap text-lg underline underline-offset-4 transition-all duration-100 hover:text-[#fe7c7b] dark:hover:text-[#ffcaca] sm:text-xl md:text-3xl"
              href={emailHref}
              aria-label={`Email me at ${hero.navCta.email}`}
              style={{
                textDecorationThickness: "1px",
                textDecorationColor: "#767068",
              }}>
              {hero.navCta.label}
            </a>
          </div>
          <RxArrowTopRight
            className="ml-2 flex-shrink-0 text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:text-lg md:text-2xl"
            aria-hidden="true"
          />
        </div>
      </nav>
      <header className="flex flex-col items-start justify-center flex-grow py-8 overflow-hidden md:py-12">
        <h1 className="hero whitespace-nowrap font-['SuisseIntl'] text-5xl tracking-tight text-[#fe7c7b] transition-all duration-100 dark:text-[#ffcaca] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          {hero.headline}
        </h1>
        <h2 className="hero whitespace-nowrap font-['SuisseIntl'] text-5xl tracking-tight text-[#fe7c7b] transition-all duration-100 dark:text-[#ffcaca] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          {hero.subheadline}
        </h2>
      </header>
      <footer className="flex flex-col gap-6 overflow-hidden md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 overflow-hidden">
          <p className="text-lg transition-all duration-100 geist-mono whitespace-nowrap sm:text-xl md:text-2xl lg:text-3xl">
            {hero.locationLine}
          </p>
          <p className="text-base transition-all duration-100 geist-mono whitespace-nowrap sm:text-lg md:text-xl lg:text-2xl">
            {hero.lastUpdateLine}
          </p>
        </div>
        <div className="max-w-lg overflow-hidden">
          <p className="text-lg text-right transition-all duration-100 geist-mono sm:text-xl md:text-2xl lg:text-3xl">
            {hero.tagline}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Hero;
