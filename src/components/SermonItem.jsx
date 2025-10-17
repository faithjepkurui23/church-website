import React, { useState } from "react";

const API = "http://localhost:5000/api/sermons";

export default function SermonItem({ sermon, onChanged }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(sermon.title);
  const [preacher, setPreacher] = useState(sermon.preacher);
  const [date, setDate] = useState(sermon.date);
  const [description, setDescription] = useState(sermon.description);
  const [loading, setLoading] = useState(false);

  // DELETE
  const handleDelete = async () => {
    if (!window.confirm("Delete this sermon?")) return;
    setLoading(true);
    try {
      const res = await fetch(`${API}/${sermon.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
      await res.json();
      if (onChanged) onChanged();
    } catch (err) {
      alert("Error deleting sermon: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // UPDATE
  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/${sermon.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, preacher, date, description }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Update failed: ${res.status}`);
      }
      await res.json();
      setIsEditing(false);
      if (onChanged) onChanged();
    } catch (err) {
      alert("Error updating sermon: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 10, borderRadius: 6 }}>
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={preacher} onChange={(e) => setPreacher(e.target.value)} />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
          <div style={{ marginTop: 8 }}>
            <button onClick={handleSave} disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
            <button onClick={() => setIsEditing(false)} style={{ marginLeft: 8 }}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h4>{sermon.title}</h4>
          <p><strong>Preacher:</strong> {sermon.preacher} | <strong>Date:</strong> {sermon.date}</p>
          <p>{sermon.description}</p>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete} disabled={loading} style={{ marginLeft: 8 }}>
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
