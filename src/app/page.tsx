import Image from "next/image";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden w-full max-w-md border border-secondary h-auto rounded-md shadow-lg mx-auto">
        <Image
          src={"/assets/intro.png"}
          width={800}
          height={600}
          className="w-full h-full"
          alt="So..you've found my portfolio. Are you here to hire me?"
        />
      </div>
      <p className="text-foreground w-full max-w-xl mx-auto text-center mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-balance">
        btw I&apos;m{" "}
        <span className="text-green-600 dark:text-green-400">Subham Mani</span>,
        a full stack developer from India, exploring tech and trying to get off
        localhost
      </p>
      <div className="flex flex-col sm:flex-row gap-6 items-center mt-6 md:mt-8 justify-center text-foreground text-sm sm:text-base md:text-lg">
        <Link
          href={"/about"}
          className="group hover:text-green-600 dark:text-green-400"
        >
          about
          <GoChevronRight className="inline ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href={"/projects"}
          className="group hover:text-green-600 dark:text-green-400"
        >
          projects
          <GoChevronRight className="inline ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href={"/experience"}
          className="group hover:text-green-600 dark:text-green-400"
        >
          work experience
          <GoChevronRight className="inline ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
