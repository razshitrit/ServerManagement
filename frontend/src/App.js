import React, { useState, useEffect } from "react";
import ServerList from "./components/ServerList";
import './App.css';

const App = () => {
  const [servers, setServers] = useState([]);
  const [filterActive, setFilterActive] = useState(false);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await fetch("/api/servers");
        const data = await response.json();
        setServers(data);
      } catch (error) {
        console.error("Error fetching servers:", error);
      }
    };
    fetchServers();
  }, []);

  const filteredServers = filterActive
    ? servers.filter((server) => server.status === "active")
    : servers;

  return (
    <div>
      <h1>Server List</h1>
      <label>
        Show Active Servers Only:
        <input
          type="checkbox"
          checked={filterActive}
          onChange={(e) => setFilterActive(e.target.checked)}
        />
      </label>
      <ServerList servers={filteredServers} /> {}
    </div>
  );
};

export default App;