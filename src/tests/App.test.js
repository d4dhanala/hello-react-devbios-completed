import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import App from '../components/App';

const initialState = {};
const mockStore = configureStore();
let store;

beforeEach(()=>{
  store = mockStore(initialState);
})

test('renders learn react link', () => {
  const { getByText } = render(<App store={store} />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


