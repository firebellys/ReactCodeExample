
import { configure } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';

import { reducer } from './Reducer'
import * as types from '../constants/ActionTypes'

configure({ adapter: new Adapter() });

describe('Reducer tests', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                userIsLoggedIn: false,
                username: '',
                password: '',
                chartType: '1',
                error: null,
                data: [
                    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
                    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
                    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
                    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
                    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
                    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
                    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
                ]
            }
        )
    })

    it('should handle USER_LOGIN', () => {
        expect(
            reducer([], {
                type: types.USER_LOGIN,
                username: 'test',
                password: '1234'
            })
        ).toEqual(
            {
                error: null,
                password: '1234',
                userIsLoggedIn: true,
                username: 'test'
            }
            )
    })
});