import React from 'react';
import reducer from './reducer';

export const UserContext = React.createContext();

const UserProvider = ({children}) => {
    let initialState = {
        email: 'godfred@gmail.com',
        password: '',
        users: [],
    };

    const [userState, dispatch] = React.useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{userState, dispatch}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
