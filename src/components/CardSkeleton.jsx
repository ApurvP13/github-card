import React from "react";

const CardSkeleton = () => {
  return (
    <div className="flex justify-center items-center p-8 bg-zinc-700 animate-pulse rounded-2xl shadow-2xl border border-zinc-700/40 backdrop-blur-sm ">
      <div
        className="inline-grid grid-flow-col auto-rows-auto gap-1 "
        style={{ gridTemplateRows: "repeat(7, 1fr)" }}
      >
        {[...Array(364)].map((_, idx) => (
          <div
            key={idx}
            className={`size-2.5 rounded-md  shadow-[0_1px_2px_rgba(0,0,0,0.5)]  flex items-center justify-center bg-zinc-900  transition-transform duration-300 hover:scale-115`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CardSkeleton;
