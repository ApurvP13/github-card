import React from "react";

// GithubCardSkeleton.jsx
const SkeletonLoader = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 w-3/4 h-72 rounded-3xl flex shadow-lg animate-pulse">
      {/* Main Card Area */}
      <div className="flex-1 rounded-3xl flex flex-col justify-center items-center p-4 gap-4">
        {/* Placeholder for main Card content */}
        <div className="w-48 h-6 bg-zinc-700 rounded-md" />
        <div className="w-32 h-4 bg-zinc-700 rounded-md" />

        {/* "Less" to "More" indicators */}
        <div className="flex gap-4 items-center mt-6 bg-gradient-to-br from-zinc-500/40 to-zinc-700/40 rounded-3xl p-4">
          <span className="text-xs text-zinc-500 font-mono">Less</span>
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="size-2.5 rounded-md bg-zinc-600 shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            />
          ))}
          <span className="text-xs text-zinc-500 font-mono">More</span>
        </div>
      </div>

      {/* Sidebar */}
      <section className="flex flex-col w-1/4 gap-2 p-2">
        {/* User Info Placeholder */}
        <div className="h-1/2 bg-zinc-750 rounded-2xl shadow-2xl border border-zinc-700/40 flex flex-col justify-center items-center p-4 gap-2">
          <div className="w-20 h-4 bg-zinc-600 rounded" />
          <div className="w-16 h-3 bg-zinc-600 rounded" />
        </div>

        {/* User Stats Placeholder */}
        <div className="h-1/2 bg-zinc-750 rounded-2xl shadow-2xl border border-zinc-700/40 flex flex-col justify-center items-center p-4 gap-2">
          <div className="w-24 h-4 bg-zinc-600 rounded" />
          <div className="w-20 h-3 bg-zinc-600 rounded" />
        </div>
      </section>
    </div>
  );
};

export default SkeletonLoader;
