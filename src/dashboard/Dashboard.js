import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                Dashboard
                <div style={{float:"right"}}><Link to="/">Back</Link></div>
            </div>
        )
    }
}

export default Dashboard;