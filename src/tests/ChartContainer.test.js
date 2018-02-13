import React from 'react'
import expect from 'expect'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ChartContainer } from '../Containers/Charts/ChartsContainer'

configure({ adapter: new Adapter() });

describe('ChartContainer tests', () => {
    it('should have a chart displayed', () => {
        const wrapper = shallow(<ChartContainer />);
        expect(wrapper.find('div').hasClass('ChartArea')).toBe(true);
    });
});