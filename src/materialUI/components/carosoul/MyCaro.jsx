import { Component } from "react";

export default class MyCaro extends Component {

 state={
  city:"fbd"
 }
  // clkHandler = this.clkHandler.bind(this)
  myarr=()=>{
    console.log("helloooooooooooooooooooooooooo")
    console.log(this.props.name)
    console.log(this.state.city)
    console.log(this)
  }

  //  clkHandler=(e)=>{
  //   console.log(this)
  // }
  
  clkHandler(params) {
    console.log(this.props.name)
    console.log(this.state.city)
    console.log(this)
  }
  render() {
    return (<>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
          <h2 type="button" className="btn btn-info" onClick={this.myarr}>helloo</h2>
          </div>
        </div>
      </div>
    </>)
  }
}