import * as types from './types';

/**
 * Action creator for handling email
 *
 * @param {Object} dispatch
 * @param {String} payload
 */
export const emailChanged = (dispatch, payload) => {
    dispatch({type: types.EMAIL_CHANGED, payload});
};

/**
 * Action creator for handling password
 *
 * @param {Object} dispatch
 * @param {String} payload
 */
export const passwordChanged = (dispatch, payload) => {
    dispatch({type: types.PASSWORD_CHANGED, payload});
};
