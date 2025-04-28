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
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold flex gap-4 text-red-500">
          Error 404{" "}
          <span className="text-yellow-300 text-3xl">
            <LuTriangleAlert />
          </span>
        </h1>
        <p className="text-zinc-400 mt-4">{error}</p>
        <p className="text-zinc-400">User not found or invalid username.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 w-3/4 h-72 rounded-3xl flex shadow-lg ">
      {/* Main Card Area - removed padding, added flex-1 for proper growth */}
      <div
        id="activity-card"
        className="flex-1 rounded-3xl flex flex-col justify-center items-center p-4" // Reasonable padding
      >
        <Card username={username} />
        <div className="flex gap-4 items-center mt-6 bg-gradient-to-br from-zinc-500/40 to-zinc-700/40 rounded-3xl p-4">
          <span className="text-xs text-zinc-500 font-mono">Less</span>
          <div
            className={`size-2.5 rounded-md  shadow-[0_1px_2px_rgba(0,0,0,0.5)] animate-pulse-slow
           flex items-center justify-center bg-black  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-115 hover:brightness-110 hover:shadow-[0_2px_6px_rgba(255,200,0,0.4)]`}
          ></div>
          <div
            className={`size-2.5 rounded-md  shadow-[0_1px_2px_rgba(0,0,0,0.5)] animate-pulse-slow
           flex items-center justify-center bg-amber-300  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-115 hover:brightness-110 hover:shadow-[0_2px_6px_rgba(255,200,0,0.4)]`}
          ></div>
          <div
            className={`size-2.5 rounded-md  shadow-[0_1px_2px_rgba(0,0,0,0.5)] animate-pulse-slow
           flex items-center justify-center bg-amber-600  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-115 hover:brightness-110 hover:shadow-[0_2px_6px_rgba(255,200,0,0.4)]`}
          ></div>
          <div
            className={`size-2.5 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.5)] animate-pulse-slow
              flex items-center justify-center bg-amber-900 
              transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-115 hover:brightness-110 hover:shadow-[0_2px_6px_rgba(255,200,0,0.4)]`}
          ></div>
          <span className="text-xs text-zinc-500 font-mono">More</span>
        </div>
      </div>

      {/* Sidebar - now with proper spacing */}
      <section className="flex flex-col w-1/4 gap-2 p-2">
        <div className="h-1/2  bg-zinc-750 rounded-2xl shadow-2xl border border-zinc-700/40">
          <UserInfo username={username} userData={userData} />
        </div>
        <div className="h-1/2   bg-zinc-750 rounded-2xl shadow-2xl border border-zinc-700/40">
          <UserStats username={username} userData={userData} />
        </div>
      </section>
    </div>
  );
};

export default CardHolder;
