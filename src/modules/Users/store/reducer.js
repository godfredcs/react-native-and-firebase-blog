import * as types from './types';

export default (state, action) => {
    switch (action.type) {
        case types.EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload,
            };

        case types.PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload,
            };

        case types.AUTHENTICATE_USER_START:
            return {
                ...state,
                authenticating_user: true,
                authenticating_user_error: '',
            };

        case types.AUTHENTICATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                is_authenticated: true,
                authenticating_user: false,
            };

        case types.AUTHENTICATE_USER_FAIL:
            return {
                ...state,
                user: null,
                is_authenticated: false,
                authenticating_user: false,
                authenticating_user_error: action.payload,
            };

        default:
            throw new Error(`Users Reducer Unhandled Action Type: ${action.type}`);
    }
};
