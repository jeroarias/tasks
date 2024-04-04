import { createContext, useEffect, useState } from "react";
import { Tasklist } from "../components/Layouts/TaskList/TaskList";

export const TasksContext = createContext({});
export const TasksProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([
    { title: "Mi tarea 1", description: "Es una tarea 1", status: "pending" },
    { title: "Mi tarea 2", description: "Es una tarea 2", status: "completed" },
    { title: "Mi tarea 3", description: "Es una tarea 3", status: "pending" },
    { title: "Mi tarea 4", description: "Es una tarea 4", status: "completed" },
  ]);
  const [filter, setFilter] = useState("all");
  const [pendingTasks, setPendingTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    setPendingTasks(taskList.filter((t) => t.status == "pending").length);
    setCompletedTasks(taskList.filter((t) => t.status == "completed").length);
  }, [taskList]);

  const createTask = (title, description) => {
    const newTask = {
      title,
      description,
      status: "pending",
    };
    setTaskList((prev) => [...prev, newTask]);
  };
  const updateTaskStatus = (task, newStatus) => {
    const { title, description, status } = task;
    const taskIndex = taskList.findIndex(
      (t) =>
        t.title == title && t.description == description && t.status == status
    );
    if (!taskIndex == -1) return;
    const tasks = [...taskList];

    const taskFound = tasks[taskIndex];
    if (!taskFound) return;

    taskFound.status = newStatus;
    tasks.splice(taskIndex, 1, taskFound);
    setTaskList(tasks);
  };

  const setFilterOption = (option) => {
    setFilter(option);
  };

  const data = {
    createTask,
    updateTaskStatus,
    setFilterOption,
    pendingTaskCount: pendingTasks,
    completedTaskCount: completedTasks,
    tasks: taskList,
    filterOption: filter,
  };

  return <TasksContext.Provider value={data}>{children}</TasksContext.Provider>;
};
