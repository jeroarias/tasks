import React from "react";
import './home.css'
import { SetWork } from "../../Layouts/Header/Headert"
import { Tasklist } from "../../Layouts/Body/Bodyt";
import { Footer } from "../../Layouts/Footer/Footert";





export const Home = () => {
    return(
        <>
        <h1 className="title" >TO DO</h1>
        <SetWork/>
        <Tasklist/>
        <Footer/>
        </>
    )
}