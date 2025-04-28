import React, { useEffect, useState } from "react";
import { LuMapPin, LuStar } from "react-icons/lu";
import { RiGitRepositoryLine } from "react-icons/ri";
import { TbLocationBroken } from "react-icons/tb";

const getTotalStars = async (username) => {
  let page = 1;
  let stars = 0;
  let hasMore = true;

  while (hasMore) {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`
    );
    const repos = await res.json();

    if (repos.length === 0 || res.status !== 200) {
      hasMore = false;
      break;
    }

    stars += repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
    page++;
  }

  return stars;
};

const UserStats = ({ userData, username }) => {
  const [stars, setStars] = useState(0);
  useEffect(() => {
    // Move your async function call inside useEffect
    const fetchStars = async () => {
      const totalStars = await getTotalStars(username);
      setStars(totalStars);
    };

    fetchStars();
  }, [username]);
  return (
    <div className="flex flex-col items-start font-mono justify-center p-2 md:p-6 pt-3 md:pt-8 text-xs md:text-sm">
      <p className="flex gap-1 md:gap-2 items-center text-zinc-500">
        <LuMapPin className="shrink-0" />
        <span className="text-amber-500">Location:</span>
        {userData.location && userData.location != "undefined" ? (
          <span className="truncate max-w-32 md:max-w-full">
            {userData.location}
          </span>
        ) : (
          <span className="text-red-500">
            <TbLocationBroken />
          </span>
        )}
      </p>
      <p className="flex gap-1 md:gap-2 items-center text-zinc-500">
        <LuStar className="shrink-0" />
        <span className="text-amber-500">Total Stars:</span>
        {stars}
      </p>
      <p className="flex gap-1 md:gap-2 items-center text-zinc-500">
        <RiGitRepositoryLine className="shrink-0" />
        <span className="text-amber-500">Total Repos:</span>
        {userData.public_repos}
      </p>
    </div>
  );
};

export default UserStats;
