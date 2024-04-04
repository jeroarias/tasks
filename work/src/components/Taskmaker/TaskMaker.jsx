import React, { useContext, useMemo, useState } from "react";
import "./TaskMaker.css";
import { TasksContext } from "../../contexts/Tasks";

export const TaskMaker = () => {
  const { pendingTaskCount, completedTaskCount, createTask, setFilterOption } = useContext(TasksContext);

  const [isError, setError] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createNewTask = () => {
    if (!title || !description) {
      setError(true);
      return;
    }
    createTask(title, description);
  };

  const onTitleInput = (e) => {
    setError(false);
    const { value } = e.target;
    setTitle(value);
  };

  const onDescriptionInput = (e) => {
    setError(false);
    const { value } = e.target;
    setDescription(value);
  };

  const onFilterChange = (e) => {
    const select = e.target;
    const idx = select.selectedIndex;
    const option = select[idx].value;

    setFilterOption(option);
  };

  return (
    <>
      {isError && <p>You have invalid data</p>}
      <div className="makework">
        <input
          onInput={onTitleInput}
          className="smbhomework"
          placeholder="Set a task"
          type="text"
        />
        <input
          onInput={onDescriptionInput}
          className="smbhomework"
          placeholder="Describe u task"
          type="text"
        />
        <input
          onClick={createNewTask}
          className="butthomework"
          type="button"
          value="Make Homework"
        />

        <div className="reportmsj">
          <h2>You have ({pendingTaskCount}) tasks pending and ({completedTaskCount}) completed.</h2>
        </div>

        <hr className="linespace" />
      </div>

      <div className="filter">
        <select onChange={onFilterChange} id="state">
          <option label="All" value="all"></option>
          <option label="Completed" value="completed"></option>
          <option label="Pending" value="pending"></option>
        </select>
      </div>
    </>
  );
};
