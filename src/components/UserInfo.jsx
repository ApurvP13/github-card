import React from "react";
import { LuExternalLink } from "react-icons/lu";

const UserInfo = ({ userData, username }) => {
  return (
    <div className="flex flex-row md:flex-col items-center justify-center gap-2 p-2 md:p-4">
      <img
        className="size-12 md:size-16 rounded-full shadow-md hover:brightness-110 animate-pulse-slow"
        src={userData.avatar_url}
        alt="User's Profile picture"
      />
      <div className="flex items-center gap-2 md:gap-4">
        <p className="text-sm md:text-lg font-medium font-mono text-zinc-500">
          @{username}
        </p>
        <a
          className="text-zinc-500 animate-hover text-sm md:text-base"
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LuExternalLink />
        </a>
      </div>
    </div>
  );
};

export default UserInfo;
