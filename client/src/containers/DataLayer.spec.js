import React from 'react';
import { mount } from 'enzyme';
import { DataLayer } from './DataLayer';
import { Graph } from '../components/Graph';

describe('Datalayer', () => {
    const wrapper = mount(<DataLayer/>);

    it('should render component without failure', () => {
        expect(wrapper).toBeTruthy();
    })

    it('should render Graph component', () => {
        expect(wrapper.find(Graph)).toHaveLength(1);
    })
});
