import React, { useState, useEffect } from "react";
import ServerList from "./components/ServerList";
import './App.css';

const App = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/servers");
        const data = await response.json();
        console.log("Data from server:", data);
        setServers(data);
      } catch (error) {
        console.error("Error fetching servers:", error);
      }
    };

    fetchServers();
  }, []);

  return (
    <div>
      <h1>Server List</h1>
      <ServerList servers={servers} />
    </div>
  );
};

export default App;