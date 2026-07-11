import React from "react";
import { content } from "../config/content";

function Experience() {
  const { experience } = content;
  return (
    <div className="container relative mx-auto flex min-h-[100vh] w-[100vw] flex-col justify-center bg-[#e9e9e9] px-12 text-black  dark:bg-[#09090b] dark:text-white">
      <div className="flex w-full items-center justify-center" style={{}}>
        <div className="flex w-full flex-col">
          <h1
            className="title my-12"
            style={{
              fontFamily: "SuisseIntl",
              fontSize: "6vw",
              letterSpacing: "-0.03em",
            }}>
            {experience.title}
          </h1>
          {experience.items.map((work, index) => (
            <React.Fragment key={index}>
              <div className="my-8 flex w-full items-center justify-between">
                <div className="flex items-center ">
                  <img
                    src={work.logoSrc}
                    className="experience-logo me-6 inline rounded"
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
