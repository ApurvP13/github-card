import React, { useState, useEffect } from "react";
import { LuExternalLink } from "react-icons/lu";

const UserInfo = ({ userData, username }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
      <img
        className="size-16 rounded-full shadow-md hover:brightness-110 animate-pulse-slow"
        src={userData.avatar_url}
        alt="User's Profile picture"
      />
      <div className="flex items-center gap-4 ">
        <p className="text-lg font-medium font-mono text-zinc-500 ">
          @{username}
        </p>
        <a
          className="text-zinc-500 animate-hover"
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
