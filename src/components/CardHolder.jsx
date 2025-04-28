import React, { useState, useEffect } from "react";
import Card from "./Card";
import UserInfo from "./UserInfo";
import UserStats from "./UserStats";
import SkeletonLoader from "./SkeletonLoader";
import { LuTriangleAlert } from "react-icons/lu";

const CardHolder = ({ username }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setUserData(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching GitHub data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500); // you can tweak 500ms to whatever feels good (e.g., 800ms)
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-4 md:p-8">
        <h1 className="text-xl md:text-3xl font-bold flex gap-2 md:gap-4 text-red-500">
          Error 404{" "}
          <span className="text-yellow-300 text-xl md:text-3xl">
            <LuTriangleAlert />
          </span>
        </h1>
        <p className="text-zinc-400 mt-2 md:mt-4 text-sm md:text-base">
          {error}
        </p>
        <p className="text-zinc-400 text-sm md:text-base">
          User not found or invalid username.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 w-full md:w-11/12 lg:w-3/4 h-auto min-h-[22rem] rounded-xl md:rounded-3xl flex flex-col md:flex-row shadow-lg p-2 md:p-0">
      {/* Main Card Area */}
      <div
        id="activity-card"
        className="w-full md:flex-1 rounded-xl md:rounded-3xl flex flex-col justify-center items-center p-2 md:p-4 mb-4 md:mb-0"
      >
        <Card username={username} />
        <div className="flex gap-2 md:gap-4 items-center mt-4 md:mt-6 bg-gradient-to-br from-zinc-500/40 to-zinc-700/40 rounded-xl md:rounded-3xl p-2 md:p-4 overflow-x-auto">
          <span className="text-xs text-zinc-500 font-mono shrink-0">Less</span>
          <div
            className={`size-2 md:size-2.5 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.5)] animate-pulse-slow
           flex items-center justify-center bg-black transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-115 hover:brightness-110 hover:shadow-[0_2px_6px_rgba(255,200,0,0.4)]`}
          ></div>
          <div
            className={`size-2 md:size-2.5 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.5)] animate-pulse-slow
           flex items-center justify-center bg-amber-300 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-115 hover:brightness-110 hover:shadow-[0_2px_6px_rgba(255,200,0,0.4)]`}
          ></div>
          <div
            className={`size-2 md:size-2.5 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.5)] animate-pulse-slow
           flex items-center justify-center bg-amber-600 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-115 hover:brightness-110 hover:shadow-[0_2px_6px_rgba(255,200,0,0.4)]`}
          ></div>
          <div
            className={`size-2 md:size-2.5 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.5)] animate-pulse-slow
              flex items-center justify-center bg-amber-900 
              transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-115 hover:brightness-110 hover:shadow-[0_2px_6px_rgba(255,200,0,0.4)]`}
          ></div>
          <span className="text-xs text-zinc-500 font-mono shrink-0">More</span>
        </div>
      </div>

      {/* Sidebar */}
      <section className="flex flex-row md:flex-col w-full md:w-1/4 gap-2 p-2">
        <div className="flex-1 md:h-1/2 bg-zinc-750 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-zinc-700/40">
          <UserInfo username={username} userData={userData} />
        </div>
        <div className="flex-1 md:h-1/2 bg-zinc-750 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-zinc-700/40">
          <UserStats username={username} userData={userData} />
        </div>
      </section>
    </div>
  );
};

export default CardHolder;
