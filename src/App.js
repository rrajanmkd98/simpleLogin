import React from "react";
import LoginPage from "./loginForm/LoginPage";
import * as Action from "./Action";
import 'bootstrap/dist/css/bootstrap.min.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: "",
    }
  }

  onChange = (event) =>{
    this.setState({
      data: event.target.value
    })
  }
  
  handleSubmit = (key) =>{
    this.props.loginAction(key)
  }

  render(){
    return(
      <div>
        <LoginPage handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
  
}

const mapStateToProps = () =>{
  return {
    
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators(Object.assign({}, Action), dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
