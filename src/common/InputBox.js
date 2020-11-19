import React from "react";

class InputBox extends React.Component{
    
    onChange = (e) =>{
        this.props.onChange(e);
    }

    render(){
        return(
            <div className={this.props.inputParant}>
                <input 
                    type={this.props.type}
                    id={this.props.id}
                    name={this.props.name}
                    className={this.props.className}
                    placeholder={this.props.placeholder}
                    onChange={this.onChange}>
                </input>
            </div>
           
        )
    }
}

export default InputBox;