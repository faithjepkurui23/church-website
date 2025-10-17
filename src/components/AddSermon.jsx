import React, { useState } from "react";

const API = "http://localhost:5000/api/sermons";

export default function AddSermon({ onCreated }) {
  const [title, setTitle] = useState("");
  const [preacher, setPreacher] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setTitle("");
    setPreacher("");
    setDate("");
    setDescription("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, preacher, date, description }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Server error: ${res.status}`);
      }
      await res.json();
      reset();
      if (onCreated) onCreated(); // ask parent to refresh list
    } catch (err) {
      alert("Error adding sermon: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h3>Add Sermon</h3>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Preacher"
        value={preacher}
        onChange={(e) => setPreacher(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        style={{ width: "100%" }}
      />
      <br />
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Sermon"}
      </button>
    </form>
  );
}
