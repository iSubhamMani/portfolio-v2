import { techStack } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const About = () => {
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
        <Link
          href={"/projects"}
          className="flex items-center gap-2 text-secondary text-xs sm:text-sm group w-max"
        >
          projects
          <FaChevronRight className="size-3 sm:size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="overflow-hidden w-full max-w-sm border border-secondary h-auto rounded-md shadow-lg mx-auto">
        <Image
          src={"/assets/attention.png"}
          width={384}
          height={400}
          className="w-full h-full"
          alt="So..you've found my portfolio. Are you here to hire me?"
        />
      </div>
      <section className="flex flex-col items-center mt-8 md:mt-12">
        <ul className="space-y-2 text-xs sm:text-sm md:text-base">
          <li>
            🎓 pursuing Bachelor&apos;s in Computer Science at The Heritage
            Institute of Technology, Kolkata.
          </li>
          <li>🏆 2x Hackathon Winner</li>
          <li>
            🌍 off-duty, I explore Earth, burn recipes and conquer virtual
            worlds
          </li>
        </ul>
      </section>
      <section className="mt-6 md:mt-8 border-t border-neutral-400 dark:border-neutral-700 pt-4">
        <p className="text-center text-sm sm:text-base md:text-lg text-foreground">
          what i{" "}
          <span className="text-green-600 dark:text-green-400">dabble</span> in
          (mostly..)
        </p>
        <div className="flex justify-center mt-4 gap-4 flex-wrap max-w-2xl mx-auto">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex items-center space-x-2 mt-2 text-sm sm:text-base"
              >
                <Icon className="size-5" color={tech.color} />
                <span className="text-foreground text-xs sm:text-sm">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
