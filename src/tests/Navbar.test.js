import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';
import {
    BrowserRouter as Router
  } from 'react-router-dom';



test('renders Home link', () => {
    const { getByText } = render(<Router ><Navbar /></Router>)
    const linkElement = getByText(/Home/);
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