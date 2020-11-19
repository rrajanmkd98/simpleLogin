import React from "react";

class Button extends React.Component{

    onSubmit = () =>{
        this.props.onSubmit();
    }
    render(){
        return(
            <input type={this.props.button} onClick={this.onSubmit}></input>
        )
    }
}

export default Button;