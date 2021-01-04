import React from "react";
import classes from "./CardList.module.css";
import Card from "../Card/Card";

const cardList = (props)=>{
    return(
        <div className={classes.CardList}>
       { props.profiles.map( profile => {
           console.log(profile)
           return <Card key={profile.id} {...profile}/>
        })}
    </div>
    );
}
export default cardList;