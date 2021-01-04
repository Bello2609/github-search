import React from "react";
import Logo from "../Logo/Logo";
import classes from "./Header.module.css";
const header = () =>(
    <div className={classes.Header}>
        <Logo />
        <p>Find your username</p>
    </div>
);
export default header;