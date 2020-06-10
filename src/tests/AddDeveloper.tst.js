// import React from 'react';
// import { unmountComponentAtNode } from "react-dom";
// import { render } from '@testing-library/react';
// import { act } from "react-dom/test-utils";
// import configureStore from 'redux-mock-store';
// import App from '../components/App';
// import Developer from '../models/developer';
// import devActions from '../reducers/devBios';


// // const initialState = {developer:[]};
// // const mockStore = configureStore();
// // let store, fetchSpy, fetchDevsSpy;
// // let container = null;
// const fakeDevs = [
//   new Developer("Jason","Monroe","JavaScript",2008),
//   new Developer("Bob","Monroe","C",1970),
// ];

// // const fetchPromiseResolve = Promise.resolve(JSON.stringify(fakeDevs));
// // const fetchDevsPromiseResolve = devActions.getAllBiosActionCreator(fakeDevs);

// // beforeEach(()=>{
// //   store = mockStore(devActions.reducer,initialState);
// //   container = document.createElement("div");
// //   document.body.appendChild(container);
// //   fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() =>
// //     Promise.resolve({
// //       json: () => fetchPromiseResolve
// //     })
// //   );
// //   fetchDevsSpy = jest.fn(()=>fetchDevsPromiseResolve);
  
// // });


// it('addBioActionCreator should produce proper action object',() => {

    
//     const actualObject = devActions.addBioActionCreator(fakeDevs[0]);

//     const expectedObject = { type:'ADD_DEVELo'}
//     console.log(wrapper.props().store.getActions());
//     expect(fetchSpy).toHaveBeenCalled();
    
//     expect(fetchDevsSpy).toHaveBeenCalled();

// });



