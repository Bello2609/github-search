import React from "react";
import Header from "./Component/Header/Header";
import Form from "../src/Component/Form/Form";
import CardList from "./Component/Cardlist/CardList"
class App extends React.Component{
  state={
    profiles: []
  }
  addProfile = (newData)=>{
   
    this.setState(prevState=>({
      profiles: [...prevState.profiles, newData]
    }))
      
    console.log(newData);
  }
  render(){
    return(
      <div>
        <Header />
        <Form addProfile={this.addProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
      
    );
  }
}

export default App;
