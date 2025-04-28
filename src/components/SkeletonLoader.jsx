import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 w-full md:w-11/12 lg:w-3/4 h-auto min-h-[22rem] rounded-xl md:rounded-3xl flex flex-col md:flex-row shadow-lg p-2 md:p-0 animate-pulse">
      {/* Main Card Area */}
      <div className="w-full md:flex-1 rounded-xl md:rounded-3xl flex flex-col justify-center items-center p-2 md:p-4 mb-4 md:mb-0">
        {/* Placeholder for main Card content */}
        <div className="w-36 md:w-48 h-4 md:h-6 bg-zinc-700 rounded-md" />
        <div className="w-24 md:w-32 h-3 md:h-4 bg-zinc-700 rounded-md mt-2" />

        {/* "Less" to "More" indicators */}
        <div className="flex gap-2 md:gap-4 items-center mt-4 md:mt-6 bg-gradient-to-br from-zinc-500/40 to-zinc-700/40 rounded-xl md:rounded-3xl p-2 md:p-4">
          <span className="text-xs text-zinc-500 font-mono">Less</span>
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="size-2 md:size-2.5 rounded-md bg-zinc-600 shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            />
          ))}
          <span className="text-xs text-zinc-500 font-mono">More</span>
        </div>
      </div>

      {/* Sidebar */}
      <section className="flex flex-row md:flex-col w-full md:w-1/4 gap-2 p-2">
        {/* User Info Placeholder */}
        <div className="flex-1 md:h-1/2 bg-zinc-750 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-zinc-700/40 flex flex-col justify-center items-center p-2 md:p-4 gap-1 md:gap-2">
          <div className="w-16 md:w-20 h-3 md:h-4 bg-zinc-600 rounded" />
          <div className="w-12 md:w-16 h-2 md:h-3 bg-zinc-600 rounded" />
        </div>

        {/* User Stats Placeholder */}
        <div className="flex-1 md:h-1/2 bg-zinc-750 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-zinc-700/40 flex flex-col justify-center items-center p-2 md:p-4 gap-1 md:gap-2">
          <div className="w-20 md:w-24 h-3 md:h-4 bg-zinc-600 rounded" />
          <div className="w-16 md:w-20 h-2 md:h-3 bg-zinc-600 rounded" />
        </div>
      </section>
    </div>
  );
};

export default SkeletonLoader;
