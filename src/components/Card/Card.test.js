import React from "react";
import Card from "./Card";
import { shallow } from 'enzyme';
import beers from '../../data/beers';
import CardFront from "../CardFront";
import CardBack from "../CardBack";

describe("Card tests", () => {
    let component;
    let testBeer;

    beforeEach(() => {
        testBeer = beers[0]
        component = shallow(<Card beer={testBeer} />)
    })

    it('should render', () => {
        expect(component).toBeTruthy();
    })
})