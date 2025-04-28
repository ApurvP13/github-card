import React from "react";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 shadow-lg flex items-center w-screen py-3 md:py-4 px-3 md:px-6 justify-between">
        <a href="/" className="text-zinc-100 hover:text-zinc-300">
          <h1 className="text-xl md:text-2xl uppercase font-display bg-gradient-to-br from-zinc-300 font-black via-orange-100 to-orange-600 bg-clip-text text-transparent">
            Github Cards
          </h1>
        </a>

        <div className="flex gap-3 md:gap-4">
          <a
            href="https://x.com/astarcodes"
            target="_blank"
            className="text-orange-300 text-2xl md:text-3xl"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/ApurvP13/github-card"
            target="_blank"
            className="text-orange-300 text-2xl md:text-3xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
