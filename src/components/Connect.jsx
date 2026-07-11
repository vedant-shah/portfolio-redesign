import React from "react";
import { content } from "../config/content";
import { trackEvent } from "../utils/analytics";

function SocialLink({ name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("social_click", { platform: name })}
      className="geist-mono inline-block whitespace-nowrap text-base underline transition hover:text-[#fe7c7b] active:scale-95 dark:hover:text-[#ffcaca] sm:text-lg md:text-xl">
      {name}
    </a>
  );
}

function Connect() {
  const { connect } = content;
  const emailHref = `mailto:${connect.email}`;

  return (
    <section className="container relative mx-auto flex min-h-screen flex-col overflow-hidden bg-[#e9e9e9] px-4 text-black dark:bg-[#09090b] dark:text-white sm:px-6 md:px-12">
      <div className="flex flex-1 items-center justify-center overflow-x-hidden px-4">
        <div className="max-w-4xl overflow-hidden">
          <h1
            style={{ lineHeight: "normal" }}
            className="text-center font-['Generator_Bold'] text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {connect.headline}
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center overflow-hidden px-4">
        <div className="max-w-4xl overflow-hidden">
          <h2
            style={{ lineHeight: "normal" }}
            className="geist-mono text-center text-xl italic tracking-tight text-[#fe7c7b] dark:text-[#ffcaca] sm:text-2xl md:text-3xl lg:text-4xl">
            {connect.quote.beforeCodes}
            <span className="underline">{connect.quote.codesWord}</span>
            {connect.quote.between}
            <span className="underline">{connect.quote.jokesWord}</span>
            {connect.quote.after}
          </h2>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between overflow-hidden py-12">
        <div className="overflow-hidden">
          <a
            href={emailHref}
            onClick={() => trackEvent("email_click", { location: "connect" })}
            className="geist-mono float-right whitespace-nowrap text-base tracking-tight underline transition hover:text-[#fe7c7b] active:scale-95 dark:hover:text-[#ffcaca] sm:text-2xl md:text-3xl lg:text-4xl">
            {connect.email}
          </a>
        </div>
        <div className="grid w-full grid-cols-2 gap-y-6 overflow-hidden sm:gap-y-8">
          <div className="flex justify-around overflow-hidden">
            <SocialLink {...connect.socials[0]} />
            <SocialLink {...connect.socials[1]} />
          </div>
          <div className="flex justify-around overflow-hidden">
            <SocialLink {...connect.socials[2]} />
            <SocialLink {...connect.socials[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
