import { techStack } from "@/utils/data";
import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-balance">
        <p className="text-center font-bold text-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl">
          looks like I&apos;ve your attention
        </p>
        <p className="text-center text-foreground text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          here&apos;s a little more about me
        </p>
      </section>
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
          what i <span className="text-green-400">dabble</span> in (mostly..)
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
