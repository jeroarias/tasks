import React from "react";
import "./home.css";
import { SetWork } from "../../Layouts/Header/Headert";
import { Tasklist } from "../../Layouts/TaskList/TaskList";
import { Footer } from "../../Layouts/Footer/Footert";
import { TasksProvider } from "../../../contexts/Tasks";

export const Home = () => {
    
    return (
    <>
      <h1 className="title">TO DO</h1>
      <TasksProvider>
        <SetWork />
        <Tasklist />
        <Footer />
      </TasksProvider>
    </>
  );
};
