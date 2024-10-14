import React, { useState, useEffect } from "react";
import ServerCard from "./ServerCard";
import './ServerList.css';

function ServerList({ servers }) {
  useEffect(() => {
    console.log("Fetching servers...");
  }, [servers]);

  console.log("Servers data:", servers);

  if (!servers || servers.length === 0) {
    return <p>אין שרתים כרגע</p>;
  }

  return (
    <div className="server-list">
      {servers.map((server) => (
        <ServerCard key={server.id} server={server} />
      ))}
    </div>
  );
}

export default ServerList;