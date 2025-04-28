import React from "react";
import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";

async function fetchContributionsCalendar(username) {
  try {
    // There are several third-party APIs that provide this data
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=2025`
    );
    const data = await response.json();
    return data.contributions;
  } catch (error) {
    console.error("Error fetching contribution data:", error);
    return null;
  }
}

const Card = ({ username }) => {
  const [commitData, setCommitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await fetchContributionsCalendar(username);
        setCommitData(userData);
        console.log(userData);
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }
    fetchData();
  }, [username]);

  const getColorClass = (num) => {
    if (num < 1) return "bg-black";
    if (num < 5) return "bg-amber-300";
    if (num < 8) return "bg-amber-600";
    return "bg-amber-900";
  };

  return isLoading ? (
    <CardSkeleton />
  ) : (
    <div className="flex justify-center items-center p-8 bg-zinc-750 rounded-2xl shadow-2xl border border-zinc-700/40 backdrop-blur-sm">
      <div
        className="inline-grid grid-flow-col auto-rows-auto gap-1 "
        style={{ gridTemplateRows: "repeat(7, 1fr)" }}
      >
        {commitData.map((data, index) => (
          <div
            key={index}
            className={`size-2.5 rounded-md  shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${
              data.count ? "animate-pulse-slow" : ""
            } flex items-center justify-center ${getColorClass(
              data.count
            )} transition-transform duration-300 hover:scale-115`}
          >
            {}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
