const currentYear = new Date().getFullYear();

// Age from date of birth (10 Sep 2001), recomputed on each page load.
const BIRTH_DATE = new Date(2001, 8, 10);
const age = (() => {
  const today = new Date();
  let years = today.getFullYear() - BIRTH_DATE.getFullYear();
  const monthDiff = today.getMonth() - BIRTH_DATE.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < BIRTH_DATE.getDate())
  ) {
    years -= 1;
  }
  return years;
})();

export const content = {
  loader: {
    // The counter value itself is driven by JS.
    tagline: "SIT BACK. RELAX.",
  },
  hero: {
    navCta: {
      label: "Say, hey!",
      email: "vedantshah2001@gmail.com",
    },
    headline: "I'm Vedant",
    subheadline: `Portfolio/${String(currentYear).slice(-2)}`,
    locationLine: "Based out of Blr, India",
    lastUpdateLine: `Last Update ◆ ${currentYear}`,
    tagline: "— Indie Developer, helping brands create something EPIC!",
  },
  about: {
    image: {
      src: "/images/pfp.webp",
      alt: "Vedant's profile picture",
    },
    intro: `Hey, I'm Vedant. I'm ${age}, based in Bangalore, working as an AI Engineer at MontyCloud, and I've been freelancing and shipping products for the last 3–4 years. My philosophy is simple — tech is just a means to an end.`,
    outroMuted:
      "I don't claim to know every algorithm or tool out there, but that never stops me. Syntax can be Googled and logic figured out; what can't be taught is the obsession to get things done.",
    outroHighlight: "What I promise is High Agency.",
  },
  work: {
    title: "Selected Work",
    viewLabel: "View",
    projects: [
      {
        title: "Saarthi",
        year: "2026",
        imageSrc: "/images/saarthi.webp",
        link: "https://github.com/vedant-shah/saarthi",
        alt: "Saarthi — one person hosts it, the whole family talks to it",
      },
      {
        title: "Hunch",
        year: "2025",
        imageSrc: "/images/hunch.webp",
        link: "https://medium.com/@vedantshah2001/the-hunch-story-building-a-serverless-ai-powered-prediction-app-for-friends-c256f751aeeb",
        alt: "Hunch project mockup",
      },
      {
        title: "CRUMS",
        year: "2024",
        imageSrc: "/images/crums-mockup.webp",
        link: "http://github.com/vedant-shah/crums",
        alt: "CRUMS project mockup",
      },
      {
        title: "SettleUp",
        year: "2023",
        imageSrc: "/images/settleup.webp",
        link: "http://github.com/vedant-shah/settleup",
        alt: "SettleUp project mockup",
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        title: "AI Engineer",
        company: "MontyCloud",
        duration: "2026",
        logoSrc: "/images/montycloud-logo.svg",
      },
      {
        title: "AI Developer",
        company: "Oracle",
        duration: "2024/26",
        logoSrc: "/images/oracle-logo.png",
      },
      {
        title: "SDE",
        company: "Nivetti",
        duration: "2024",
        logoSrc: "/images/nivetti-logo.webp",
      },
      {
        title: "SDE Intern",
        company: "Neelitech",
        duration: "2022/23",
        logoSrc: "/images/neeli-logo.webp",
      },
      {
        title: "Head of IT",
        company: "BMUN",
        duration: "2019",
        logoSrc: "/images/bmun-logo.png",
      },
      // {
      //   title: "Summer Intern",
      //   company: "MSRUAS",
      //   duration: "2018",
      //   logoSrc: "/images/msruas-logo.webp",
      // },
    ],
  },
  connect: {
    headline: "Let's build something special.",
    quote: {
      beforeCodes:
        "There are two things in this world that don't need explaining - my ",
      codesWord: "codes",
      between: " and my ",
      jokesWord: "jokes",
      after: ".",
    },
    email: "vedantshah2001@gmail.com",
    socials: [
      { name: "X", url: "http://twitter.com/vedantshah2001" },
      { name: "github", url: "http://github.com/vedant-shah" },
      { name: "linkedin", url: "http://linkedin.com/in/vedant-shah2001" },
      {
        name: "cv",
        url: "https://drive.google.com/file/d/1jWmhFIqBRPGEkEZKoSaUBUYwJ5bW_l-1/view?usp=drive_link",
      },
    ],
  },
};
