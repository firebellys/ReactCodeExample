import * as types from '../constants/ActionTypes'

export const userLogin = (username, password) => ({ type: types.USER_LOGIN, username, password })
export const userLogout = () => ({ type: types.USER_LOGOUT })
export const changeChart = () => ({ type: types.CHANGE_CHART })