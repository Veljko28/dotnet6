import { USER_INFO_UPDATE } from "../actions/userActions";

const initState = {
    user: {}
};


const userReducer = (state = initState , action) => {
    switch (action.type){
        case USER_INFO_UPDATE:
            return {...state, user: action.payload};
        default: 
            return state;
    }
}


export default userReducer;