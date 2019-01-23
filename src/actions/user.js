
 export const changeUserName = ({userName}) => ( {

    type:"CHANGE_USER_NAME",
    userName,
    userStatus:"logged_in"
});

export const changeUserNameExtend = param => {
     const userName = param.userName;
     return {
        type:"CHANGE_USER_NAME",
        userName:userName,
        userStatus:"logged_in"
     };
};

export const logout = () => ({

    type: "LOGOUT",
    userStatus:"logged_out",
    userName:"Visitor"
});

// export const changeLoginStatus = ({userStatus}) = ({
//     type:"CHANGE_USER_STATUS",
//     userStatus
// });

// export const changeLoginStatusExtend = param => {
//     const loginStatus = param.userStatus;
//     return {
//         type:"CHANGE_USER_STATUS",
//         userStatus:loginStatus
//     }
// }