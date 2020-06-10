import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import configureStore from 'redux-mock-store';
import App from '../components/App';
import Developer from '../models/developer';
import devActions from '../reducers/devBios';

const initialState = {developer:[]};
const mockStore = configureStore();
let store, fetchSpy;
let container = null;
const fakeDevs = [
  new Developer("Jason","Monroe","JavaScript",2008),
  new Developer("Bob","Monroe","C",1970),
];

beforeEach(()=>{
  store = mockStore(initialState);
  container = document.createElement("div");
  document.body.appendChild(container);
  fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => JSON.stringify(fakeDevs)
    })
  );
});

afterEach(()=>{
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})


it('calls fetch to get devs',async() => {
    await act(async ()=> {
       render(<App store={store}  />, container );
    });

    expect(fetchSpy).toBeCalledWith(`https://tech-services-1000201953.uc.r.appspot.com/developers`);
});


