import expect from 'expect'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as actions from '../actions/AppActions'
import * as types from '../constants/ActionTypes'

configure({ adapter: new Adapter() });

describe('Action tests', () => {
    it('should create an action to login a user', () => {
        const username = 'test'
        const password = '1234'
        const expectedAction = {
            type: types.USER_LOGIN,
            username,
            password
        }
        expect(actions.userLogin(username, password)).toEqual(expectedAction)
    })
    it('should create an action to logout a user', () => {
        const expectedAction = {
            type: types.USER_LOGOUT
        }
        expect(actions.userLogout()).toEqual(expectedAction)
    })
    it('should create an action to change a chart', () => {
        const expectedAction = {
            type: types.CHANGE_CHART
        }
        expect(actions.changeChart()).toEqual(expectedAction)
    })
});