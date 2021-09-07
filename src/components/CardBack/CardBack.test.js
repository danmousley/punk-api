import React from "react";
import CardBack from "./CardBack";
import { mount } from "enzyme";
import beers from '../../data/beers';

describe("CardBack tests", () => {
    let component;
    let testBeer;

    beforeEach(() => {
        testBeer = beers[0];
        component = mount(<CardBack beer={testBeer} />)
    });

    it("should render", () => {
        expect(component).toBeTruthy();
    });
})