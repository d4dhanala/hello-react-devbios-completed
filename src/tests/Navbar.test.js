import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

test('renders Search Developers link', () => {
    const { getByText } = render(<Router ><Navbar /></Router>);
    const linkElement = getByText(/Search/i);
    expect(linkElement).toBeInTheDocument();
});

test('Home navigates to correct route', ()=>{
    const component = render(<Router><Navbar /></Router>);
    let navlinks = component.getByText(/Home/i);
    expect(navlinks.getAttribute("href")).toBe("/");
    
})