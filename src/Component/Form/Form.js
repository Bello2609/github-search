import React from 'react';
import classes from "./Form.module.css";
import axios from "axios";
import withErrorHandler from "../Hoc/withErrorHandler/withErrorHandler"

class Form extends React.Component{
    state = {
        username: "",
        error: "false",
        data: "",
        loading: false,
        notFound: ""
    }
    handleRequest = async (e) =>{
        e.preventDefault();
      await axios.get(`https://api.github.com/users/${this.state.username}`).then(response=>{
           let info = response.data;
        //    if( this.state.username !== info.name ){
        //         this.setState({
        //             notFound: "The username you emtered cannot be found"
        //         })
        //    }
           this.setState({
               username: "",
               error: false,
               data: this.props.addProfile(info)
           })
           console.log(this.state.data);
       }).catch(err=>{
           this.setState({error: true})
           console.log(this.state.error)
       });
    }
    render(){
        let show;
        if(this.state.error){
            show=(
                <p>Username not found</p>
            );
            
        }
       

        return(
            <div>
                <form className={classes.Form} method="GET" onSubmit={this.handleRequest}>
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={event => this.setState({username: event.target.value})}
                            required
                        />
                        <label>
                                Enter Your Username
                        </label>
                    <button>SEARCH</button>
                </form>
               {show}

            </div>
        );
    }
}


export default withErrorHandler(Form, axios);