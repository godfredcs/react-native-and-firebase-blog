import React from 'react';
import userReducer from './reducer';

let initialState = {
    users: [],
    email: '',
    user: null,
    password: '',
    is_authenticated: false,
    authenticating_user: false,
    authenticating_user_error: '',
};

export const UserContext = React.createContext();

const UserProvider = ({children}) => {
    const [userState, dispatch] = React.useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{userState, dispatch}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
