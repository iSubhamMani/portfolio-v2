"use client";

import { FiSun } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import Link from "next/link";

const Footer = () => {
  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="border-t border-neutral-400 dark:border-neutral-700 p-2 text-secondary flex justify-between">
      <div className="flex items-center gap-4">
        <FiSun
          onClick={changeTheme}
          className="size-4 sm:size-5 hover:text-green-600 dark:hover:text-green-400 text-secondary cursor-pointer"
        />
      </div>
      <div>
        <p className="mb-2 text-secondary text-xs sm:text-sm">
          psst! you can find me on
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href={"https://x.com/manisubham09"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 dark:hover:text-green-400 text-secondary"
          >
            <FaXTwitter className="size-4 sm:size-5" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/subham-mani-048731288"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 dark:hover:text-green-400 text-secondary"
          >
            <FaLinkedinIn className="size-4 sm:size-5" />
          </Link>
          <Link
            href={"https://www.instagram.com/subhamxmani"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 dark:hover:text-green-400 text-secondary"
          >
            <FaInstagram className="size-4 sm:size-5" />
          </Link>
          <Link
            href={
              "https://mail.google.com/mail/?view=cm&fs=1&to=manisubham09@gmail.com"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 dark:hover:text-green-400 text-secondary"
          >
            <LuMail className="size-4 sm:size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
