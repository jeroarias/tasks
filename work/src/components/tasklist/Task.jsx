import React from "react";
import "./Task.css";

export const Task = ({ title, description, status, onStatusChange }) => {
  const handleStatusChange = (e) => {
    if (!onStatusChange) return;
    const { checked } = e.target;
    onStatusChange(checked ? "completed" : "pending");
  };
  return (
    <li className="task">
      <section>
        <div className={`point ${status}`}></div>
      </section>
      <main>
        <p className="title">/{title}/</p>
        <p className="description">{description}</p>
      </main>
      <footer>
        <input
          className="check"
          type="checkbox"
          checked={status == "completed"}
          name="check"
          id="complet"
          onChange={handleStatusChange}
        />
      </footer>
    </li>
  );
};
