export default function Reducer(state=[], action){

    switch(action.type){
        case "LOGIN_ACTION":
        return {
            loginStatus: action.status
        }
        default:
            return state; 
    }
}