import React from 'react'
import { configure, shallow, expect } from 'enzyme';
import Adaptor from 'enzyme-adaptor-react-16';
import ChartContainer from '../Charts/ChartContainer'
import { LineChart } from 'recharts';

configure({ adaptor: new Adaptor() });

describe('<ChartContainer />', () => {
    it('should have a chart displayed', () => {
        const wrapper = shallow(<ChartContainer />);
        expect(wrapper.find(LineChart));
    });
});