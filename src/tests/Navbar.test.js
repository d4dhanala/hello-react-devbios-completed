import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';
import renderer from 'react-test-renderer';
import {
    BrowserRouter as Router
  } from 'react-router-dom';


test('renders Home link', () => {
    const { getByText } = render(<Router ><Navbar /></Router>)
    const linkElement = getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Developer Bios link', () => {
    const { getByText } = render(<Router ><Navbar /></Router>);
    const linkElement = getByText(/Developer Bios/);
    expect(linkElement).toBeInTheDocument();
});

test('renders Create Bios link', () => {
    const { getByText } = render(<Router ><Navbar /></Router>);
    const linkElement = getByText(/Create Bios/);
    expect(linkElement).toBeInTheDocument();
});

test('Home Navigates to proper url', () => {
    const { getByText } = render(<Router ><Navbar /></Router>);
    const linkElement = getByText(/Create Bios/);
    expect(linkElement).toBeInTheDocument();
});

test('Home navigates to correct route', ()=>{
    const component = renderer.create(<Router><Navbar /></Router>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    console.log(tree);
    let navlinks = tree.children[1].children[0]
    expect(navlinks.children[0].props.href).toBe("/");
    
})