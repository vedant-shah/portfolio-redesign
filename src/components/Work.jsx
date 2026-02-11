import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { content } from "../config/content";

function ProjectCard({ project }) {
  const { work } = content;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group">
      <div className="overflow-hidden rounded-2xl relative">
        <div className="absolute inset-0 z-10 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/10" />
        <img
          className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
          src={project.imageSrc}
          alt={project.alt}
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-between w-full my-4">
        <h2 className="text-sm tracking-tight geist-mono sm:text-lg md:text-xl">
          {project.title}, {project.year}
        </h2>
        <div className="flex items-center group/view">
          <span className="geist-mono text-base tracking-tight transition-colors group-hover/view:text-[#fe7c7b] dark:group-hover/view:text-[#ffcaca] sm:text-lg md:text-xl">
            {work.viewLabel}
          </span>
          <RxArrowTopRight className="ml-2 transition-all duration-300 group-hover/view:-translate-y-0.5 group-hover/view:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
}

function Work() {
  const { work } = content;

  return (
    <section className="container relative mx-auto flex min-h-screen flex-col items-center bg-[#e9e9e9] px-4 py-12 text-black transition-colors duration-300 dark:bg-[#09090b] dark:text-white sm:px-6 md:px-12">
      <h1 className="mb-12 font-['SuisseIntl'] text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        {work.title}
      </h1>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 md:gap-16">
        {work.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <style jsx="true" global="true">{`
        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}

export default Work;
