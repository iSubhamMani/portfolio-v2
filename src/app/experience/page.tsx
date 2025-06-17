import { workExperience } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Experience = () => {
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
          work experience
        </span>
        <Link
          href={"/about"}
          className="flex items-center gap-2 text-secondary text-xs sm:text-sm group w-max"
        >
          about
          <FaChevronRight className="size-3 sm:size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="space-y-4 sm:space-y-6 mt-6 md:mt-8">
        {workExperience.map((exp) => {
          return (
            <div
              key={exp.company}
              className="border border-secondary dark:border-neutral-700 rounded-md p-4 sm:p-6 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div>
                  <p className="font-medium text-foreground text-base sm:text-lg md:text-xl">
                    {exp.company}
                  </p>
                  <p className="text-secondary font-medium text-xs sm:text-sm">
                    {exp.position}
                  </p>
                </div>
                <p className="text-xs text-secondary">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-foreground mt-2">
                {exp.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
