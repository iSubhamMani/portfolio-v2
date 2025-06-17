import { projects } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa6";
import { GoLink } from "react-icons/go";

const Projects = () => {
  return (
    <div>
      <div className="mb-4 sm:mb-0 flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-2 text-secondary text-xs sm:text-sm group w-max"
        >
          <FaChevronLeft className="size-3 sm:size-4 transition-transform group-hover:-translate-x-1" />
          home
        </Link>
        <span className="flex items-center gap-2 text-secondary text-xs sm:text-sm w-max">
          projects
        </span>
        <Link
          href={"/experience"}
          className="flex items-center gap-2 text-secondary text-xs sm:text-sm group w-max"
        >
          experience
          <FaChevronRight className="size-3 sm:size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="space-y-4 sm:space-y-6 mt-6 md:mt-8">
        {projects.map((project, idx) => {
          return (
            <div
              className={`w-full max-w-2xl pb-4 ${
                projects.length - 1 === idx
                  ? ""
                  : "border-b border-neutral-400 dark:border-neutral-700"
              }`}
              key={project.title}
            >
              <Link
                href={project.liveLink}
                target="_blank"
                className="flex text-foreground items-center gap-2 hover:text-green-600 dark:hover:text-green-400"
              >
                <p className="text-base sm:text-lg md:text-xl font-medium">
                  {project.title}
                </p>
                <GoLink />
              </Link>
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm">
                {project.description}
              </p>
              <p className="mt-4 text-xs sm:text-sm text-secondary">
                <Link
                  href={project.githubLink}
                  className="flex items-center gap-2 text-secondary text-xs sm:text-sm group w-max hover:text-green-600 dark:hover:text-green-400"
                >
                  github
                  <FaGithub className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {project.techUsed.map((tech, idx) => (
                  <span
                    className={`text-xs sm:text-sm text-secondary`}
                    key={tech}
                  >
                    {tech}
                    {idx < project.techUsed.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
