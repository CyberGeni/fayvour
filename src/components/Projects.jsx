import React, { useState } from "react";
import projects from "../projects";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="px-[5%] sm:px-[7.5%] md:px-[10%]">
      {projects.map((project, index) => (
        <div
          key={project.id}
          id={project.id}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className="border-[#475467] h-fit border-t py-6 md:py-10 lg:py-12"
        >
          <a href="" className="grid grid-cols-1 sm:grid-cols-3 gap-y-4">
            <div className={`col-span-2 ${activeIndex === index ? "col-span-2" : "col-span-3"}`}>
              <h1 className="text-[#EBEAED] font-medium font-circular text-4xl md:text-5xl">
                {project.name}
              </h1>
              <div
                className={`space-y-4 ${
                  activeIndex === index ? "sm:h-max" : "sm:h-0"
                }
                `}
              >
                <p className="text-[#D0D5DD]/80 text-lg sm:text-xl md:text-2xl font-athletics">
                  {project.description}
                </p>
                <div className="flex space-x-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[#475467] font-athletics flex items-center px-2 py-1 border border-[#475467] rounded-full bg-transparent h-fit whitespace-nowrap text-sm md:text-base"
                    >
                        {tag === "Live" && (
                            <div className="w-3 h-3 bg-current rounded-full mr-1"></div>

                        )}
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[#D0D5DD] text-lg sm:text-xl md:text-2xl font-athletics">
                  {project.year}
                </p>
              </div>
            </div>
            <div className="col-span-1 transition-all order-first sm:order-none">
              <img
                className={`${
                  activeIndex === index ? "sm:w-full transition-all" : "sm:w-0"
                }`}
                src={project.image}
                alt=""
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
