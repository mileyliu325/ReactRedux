const user = ( state ={userName:"Visitor",userStatus:"not_logged_in"},action ) =>{
    switch(action.type){
        case "CHANGE_USER_NAME":
        // return Object.assign({}, state, { userName: action.userName });
        return {
            ...state,
            userName:action.userName,
            userStatus:"loggin_in"
        };

        case "LOGOUT":
        return{
            ...state,
            userName:null,
            userStatus:"logged_out"
        }

       default:
       return state;
    }

};

export default user;