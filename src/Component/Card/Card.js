import React from "react";
import classes from "./Card.module.css";
const Card = (props) =>{
    let profile = props;
    return(
        <div className={classes.Card}>
        <img src={profile.avatar_url} alt="sunset in the sky"/>
        <div classes={classes.Container}>
            <h4><b>{profile.name}</b></h4>
            <p>{profile.company}</p>
            <p>{profile.location}</p>
            <p>{profile.bio}</p>
            <p>{profile.twitter_username}</p>
        </div>
    </div>

    );
}

export default Card;