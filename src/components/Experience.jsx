import React from "react";
import { content } from "../config/content";

function Experience() {
  const { experience } = content;
  return (
    <div className="container relative mx-auto flex min-h-[100vh] w-[100vw] flex-col justify-center bg-[#e9e9e9] px-12 text-black  dark:bg-[#09090b] dark:text-white">
      <div className="flex items-center justify-center w-full" style={{}}>
        <div className="flex flex-col w-full">
          <h1
            className="my-12 title"
            style={{
              fontFamily: "SuisseIntl",
              fontSize: "6vw",
              letterSpacing: "-3px",
            }}>
            {experience.title}
          </h1>
          {experience.items.map((work, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between w-full my-8">
                <div className="flex items-center ">
                  <img
                    src={work.logoSrc}
                    className="inline rounded me-6 experience-logo"
                    style={{ height: "64px", width: "64px" }}
                    alt={work.company}
                  />
                  <h1
                    className="experience-text geist-mono text-xl"
                    style={{ textAlign: "start" }}>
                    {work.company} - {work.title}
                  </h1>
                </div>
                <div>
                  <h1
                    className="experience-text geist-mono text-xl"
                    style={{
                      color: "gray",
                      textAlign: "end",
                    }}>
                    {work.duration}
                  </h1>
                </div>
              </div>
              {index < experience.items.length - 1 && (
                <hr style={{ borderTop: "1px solid rgb(35, 38, 39)" }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
