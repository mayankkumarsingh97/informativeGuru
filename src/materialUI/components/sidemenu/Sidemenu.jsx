import React, { Component } from 'react'
import "./sidemenu.css"
import  Button  from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid"

export default class Sidemenu extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"raja",
      city:"Ambala",
      roll:0,
    }
   
  }
  clkHand=()=>{
    this.setState({name:"hero i o p",roll:this.state.roll + 1 })
    
  }

  render() {
    return (
      <>
    <Grid >
    <div className={this.props.isLogged ? "ye" : "nhitohye"} style={{height:"100vh"}}>
        <h2>Your [props] name is {this.props.name}</h2>
        <h2>Your [props] city is {this.props.city}</h2>
        <h2>Your [state] name is {this.state.name}</h2>
        <h2>Your [state] roll is {this.state.roll}</h2>
        <h2>Your [state] city is {this.state.city}</h2>

        <Button variant="contained"
        color="primary"
        onClick={this.clkHand}

        >click</Button>
       </div>
    </Grid>
      </>
    )
  }
}
