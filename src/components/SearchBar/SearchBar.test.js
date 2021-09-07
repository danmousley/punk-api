import React from "react";
import SearchBar from "./SearchBar";
import { shallow } from 'enzyme';

describe("SearchBat tests", () => {
    let component;
    let mockFn;

    beforeEach(() => {
        mockFn = jest.fn();
        component = shallow(<SearchBar placeholder="Search beers..." searchBeers={mockFn} />);
    })

    it('should render', () => {
        expect(component).toBeTruthy();
    })

    it('should call the parent function on input', () => {
        component.find('input').simulate('change', { target: { value: 'User input'}})
        expect(mockFn).toHaveBeenCalled();
    })

    it('should call the parent function with user input', () => {
        component.find('input').simulate('change', { target: { value: 'User input'}})
        expect(mockFn).toHaveBeenCalledWith('User input');
    })
})