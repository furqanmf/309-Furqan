import React from 'react';
import HelloWorld from './HelloWorld';
import {configure, mount,shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

test('HelloWorld renders the text inside it', () => {
    const wrapper = mount(
        <HelloWorld />
    );   
    const value = wrapper.find("p").text();
    console.log(" val " + value);
    expect(value).toBe('Hello World');
});

test('HelloWorld snapshot testing', () => {
    const tree = shallow(<HelloWorld />);
    expect(toJson(tree)).toMatchSnapshot();
});