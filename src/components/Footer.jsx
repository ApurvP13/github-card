import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-zinc-900 via-zinc-800 to-zinc-700 shadow-lg flex flex-col md:flex-row items-center w-full py-3 md:py-4 px-3 md:px-6 justify-center md:justify-between gap-2 md:gap-0">
      <a href="/" className="text-zinc-100 hover:text-zinc-300">
        <h1 className="text-xl md:text-2xl uppercase font-display bg-gradient-to-br from-zinc-300 font-black via-orange-100 to-orange-600 bg-clip-text text-transparent">
          Github Cards
        </h1>
      </a>
      <p className="opacity-50 font-display text-sm md:text-base bg-gradient-to-br from-zinc-300 via-stone-400 to-orange-600 bg-clip-text text-transparent">
        © Apurv, {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
