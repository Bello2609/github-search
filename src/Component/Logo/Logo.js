import React from "react";
import githublogo from "../../assets/Octocat.jpg";
import classes from "./Logo.module.css";
const logo = () =>(
    <div className={classes.Logo}>
        <img src={githublogo} alt={githublogo} />
    </div>
);
export default logo;