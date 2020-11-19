import { Redirect } from "react-router";

const LOGIN_ACTION = "LOGIN_ACTION";

export function loginAction(data){
   let { u_name, pw } =  data;
    return function(dispatch, getState){
        if(u_name === "admin" && pw === "admin@123"){
            window.location = "/dashboard"
            dispatch({ type:"LOGIN_ACTION", status: true })
        }else{
            dispatch({ type:"LOGIN_ACTION", status: false })
        }
       
    }
}