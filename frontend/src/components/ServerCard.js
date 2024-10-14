import React, { useState } from "react";
import axios from "axios";
import './ServerCard.css';

function ServerCard({ server }) {
  const [status, setStatus] = useState(server.status);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleStatus = async () => {
    const newStatus = status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
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

  return (
    <div className="server-card">
      <h3>{server.name}</h3>
      <p>IP: {server.ip}</p>
      <p>Hosting Company: {server.hostingCompany.name}</p>
      <p>Status: {status}</p>
      {error && <p className="error-message">{error}</p>}
      <button onClick={toggleStatus} disabled={loading}>
        {loading ? "Updating..." : status === "ACTIVE" ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
}

export default ServerCard;