import React from "react";
import CardFront from "./CardFront";
import { mount } from "enzyme";
import beers from '../../data/beers';

describe("CardFront tests", () => {
    let component;
    let testBeer;

    beforeEach(() => {
        testBeer = beers[0];
        component = mount(<CardFront beer={testBeer} />)
    });

    it("should render", () => {
        expect(component).toBeTruthy();
      });

    it("should render the correct name based on the beer passed in as props", () => {
        const beerName = testBeer.name;
        expect(component.text()).toContain(beerName);
    })

    it("should render the beer image on the card", () => {
        const beerImg = testBeer.image_url;
        expect(component.find('img').prop('src')).toBe(beerImg);
    })
})