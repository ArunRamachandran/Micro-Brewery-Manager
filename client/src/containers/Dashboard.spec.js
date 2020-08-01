import React from 'react';
import { mount } from 'enzyme';
import Dashboard from './Dashboard.jsx';


describe('Dashboard', () => {

    const wrapper = mount()

    it('should render the component', () => {
        expect(wrapper).toBeTruthy();
    })
})