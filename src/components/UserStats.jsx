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
    <div className="flex flex-col items-start font-mono justify-center p-6 pt-8">
      <p className="flex gap-2 items-center text-sm text-zinc-500">
        <LuMapPin />
        <span className="text-amber-500">Location:</span>
        {userData.location && userData.location != "undefined" ? (
          userData.location
        ) : (
          <span className="text-red-500">
            <TbLocationBroken />
          </span>
        )}
      </p>
      <p className="flex gap-2 items-center text-sm text-zinc-500">
        <LuStar />
        <span className="text-amber-500">Total Stars:</span>
        {stars}
      </p>
      <p className="flex gap-2 items-center text-sm text-zinc-500">
        <RiGitRepositoryLine />
        <span className="text-amber-500">Total Repos:</span>
        {userData.public_repos}
      </p>
    </div>
  );
};

export default UserStats;

// avatar_url
// :
// "https://avatars.githubusercontent.com/u/107312993?v=4"
// bio
// :
// null
// blog
// :
// "zzzzshawn.cloud"
// company
// :
// null
// created_at
// :
// "2022-06-11T14:32:49Z"
// email
// :
// null
// events_url
// :
// "https://api.github.com/users/zzzzshawn/events{/privacy}"
// followers
// :
// 83
// followers_url
// :
// "https://api.github.com/users/zzzzshawn/followers"
// following
// :
// 66
// following_url
// :
// "https://api.github.com/users/zzzzshawn/following{/other_user}"
// gists_url
// :
// "https://api.github.com/users/zzzzshawn/gists{/gist_id}"
// gravatar_id
// :
// ""
// hireable
// :
// true
// html_url
// :
// "https://github.com/zzzzshawn"
// id
// :
// 107312993
// location
// :
// "Goa"
// login
// :
// "zzzzshawn"
// name
// :
// "Shawn."
// node_id
// :
// "U_kgDOBmV3YQ"
// organizations_url
// :
// "https://api.github.com/users/zzzzshawn/orgs"
// public_gists
// :
// 1
// public_repos
// :
// 41
// received_events_url
// :
// "https://api.github.com/users/zzzzshawn/received_events"
// repos_url
// :
// "https://api.github.com/users/zzzzshawn/repos"
// site_admin
// :
// false
// starred_url
// :
// "https://api.github.com/users/zzzzshawn/starred{/owner}{/repo}"
// subscriptions_url
// :
// "https://api.github.com/users/zzzzshawn/subscriptions"
// twitter_username
// :
// null
// type
// :
// "User"
// updated_at
// :
// "2025-04-20T14:46:36Z"
// url
// :
// "https://api.github.com/users/zzzzshawn"
// user_view_type
// :
// "public"
