import React from "react";
import { render } from "react-dom";

class Label extends React.Component{
    render(){
        return(
            <div className={this.props.labelParant}>
                <label name={this.props.name}>{this.props.label}</label>
            </div>
        )
    }
}
export default Label;