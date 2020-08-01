import React from 'react';
import { mount } from 'enzyme';
import { Bar } from './Bar';

describe('Bar', () => {
    const wrapper = mount(<Bar/>);

    it('should render component without failure', () => {
        expect(wrapper).toBeTruthy();
    })

    it('should contain bar class to gain the styling', () => {
        expect(wrapper.exists('.bar')).toEqual(true);
    })
});
