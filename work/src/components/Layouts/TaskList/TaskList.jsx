import React, { useContext } from "react";
import { Task } from "../../tasklist/Task";
import "./TaskList.css";
import { TasksContext } from "../../../contexts/Tasks";

export const Tasklist = () => {
  const { tasks, filterOption, updateTaskStatus } = useContext(TasksContext);

  const onTaskStatusChange = (task, newStatus) => {
    updateTaskStatus(task, newStatus);
    console.table(tasks);
  };
  return (
    <>
      <div className="containerlist">
        <ul className="tasklist">
          {tasks.length == 0 ? (
            <>There are no tasks</>
          ) : (
            tasks
              .filter((t) => filterOption == "all" || t.status == filterOption)
              .map((t) => (
                <Task
                  key={`${t.title}_${t.description}_${t.status}`}
                  title={t.title}
                  description={t.description}
                  status={t.status}
                  onStatusChange={(newStatus) =>
                    onTaskStatusChange(t, newStatus)
                  }
                />
              ))
          )}
        </ul>
      </div>
    </>
  );
};
