import React, { useState, useEffect } from "react";
import axios from "axios";
import './ServerCard.css';

function ServerCard({ server }) {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (server) {
      setStatus(server.status);
    }
  }, [server]);

  const toggleStatus = async () => {
    if (!server) return;

    const newStatus = status === "ONLINE" ? "OFFLINE" : "ONLINE";
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/api/servers/status", {
        id: server.id,
        status: newStatus,
      });
      setStatus(newStatus);
    } catch (error) {
      setError("Failed to update status. Please try again.");
      console.error("Error updating status:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!server) {
    return <p>Server data is not available.</p>;
  }

  return (
    <div className="server-card">
      <h3>{server.name || "Name not available"}</h3>
      <p>IP: {server.ip || "IP not available"}</p>
      <p>Hosting Company: {server.hostingCompany?.name || "Hosting company not available"}</p>
      <p>Status: {status || "Status not available"}</p>
      {error && <p className="error-message">{error}</p>}

      {/* Toggle Button */}
      <div className="toggle-button">
        <button onClick={toggleStatus} disabled={loading} className={`toggle-btn ${status === "ONLINE" ? "online" : "offline"}`}>
          {loading ? "Updating..." : status === "ONLINE" ? "Switch to OFFLINE" : "Switch to ONLINE"}
        </button>
      </div>
    </div>
  );
}

export default ServerCard;