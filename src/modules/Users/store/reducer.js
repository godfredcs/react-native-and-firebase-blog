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

        default:
            throw new Error(`Users Reducer Unhandled Action Type: ${action.type}`);
    }
};
