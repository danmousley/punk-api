import React from 'react';
import Main from "./Main";
import { shallow } from 'enzyme';
import beers from '../../data/beers';

describe("Main tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<Main beers={beers} />)
    })

    it('should render', () => {
        expect(component).toBeTruthy();
    })
})