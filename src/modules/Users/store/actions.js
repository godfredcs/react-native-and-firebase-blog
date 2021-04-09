import * as types from './types';

/**
 * Action creator for handling email
 *
 * @param {Function} dispatch
 * @param {String} payload
 */
export const emailChanged = (dispatch, payload) => {
    dispatch({type: types.EMAIL_CHANGED, payload});
};

/**
 * Action creator for handling password
 *
 * @param {Function} dispatch
 * @param {String} payload
 */
export const passwordChanged = (dispatch, payload) => {
    dispatch({type: types.PASSWORD_CHANGED, payload});
};

/**
 * Action creator for authenticating user
 *
 * @param {Function} dispatch
 * @param {Object} data
 */
export const authenticateUser = async (dispatch, data) => {
    try {
        dispatch({type: types.AUTHENTICATE_USER_START});

        dispatch({type: types.AUTHENTICATE_USER_SUCCESS, payload: null});
    } catch (error) {
        dispatch({type: types.AUTHENTICATE_USER_FAIL, payload: error});
        console.log('User Action Creator, Error authenticating user: ', error);
    }
};
