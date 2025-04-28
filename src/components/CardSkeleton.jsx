import React from "react";

const CardSkeleton = () => {
  return (
    <div className="flex justify-center items-center p-3 md:p-6 lg:p-8 bg-zinc-700 animate-pulse rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-zinc-700/40 backdrop-blur-sm w-full overflow-auto">
      <div
        className="inline-grid grid-flow-col auto-rows-auto gap-0.5 md:gap-1"
        style={{ gridTemplateRows: "repeat(7, 1fr)", fontSize: "0" }}
      >
        {[...Array(364)].map((_, idx) => (
          <div
            key={idx}
            className={`size-1.5 sm:size-2 md:size-2.5 rounded-sm md:rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center bg-zinc-900 transition-transform duration-300 hover:scale-115`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CardSkeleton;
