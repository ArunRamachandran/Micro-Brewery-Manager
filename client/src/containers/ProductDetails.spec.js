import React from 'react';
import { mount } from 'enzyme';
import { ProductDetails } from './ProductDetails';

describe('ProductDetails', () => {
    const wrapper = mount(<ProductDetails/>);

    it('should render ProductDetails component', () => {
        expect(true).toBe(false);
    })
});
