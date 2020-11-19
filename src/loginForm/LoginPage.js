import React from 'react';
import InputBox from "../common/InputBox";
import Label from "../common/Label";
import Button from "../common/Button";

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            u_name: "",
            pw: ""
        }
    }
    
    handleSubmit = () =>{
        let key = {
            u_name: this.state.u_name,
            pw: this.state.pw,
        }
        this.props.handleSubmit(key);

    }

    onChange=(e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render(){
        const { u_name, pw } = this.state;
        return(
            <div className="LoginPage">
                <h3>Login</h3>
                <div className="Login">
                    <Label label="Name"/>
                    <InputBox type="text" value={u_name} placeholder="Enter the username..." 
                        id="u_name" onChange={this.onChange}/>
                    <Label label="Password"/>
                    <InputBox type="password" value={pw} placeholder="Enter the password..." 
                        id="pw" onChange={this.onChange}/>
                        <br></br><br></br>
                    <Button button="Submit" onSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

export default LoginPage;