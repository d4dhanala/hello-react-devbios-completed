import Developer from '../models/developer';
import devActions from '../reducers/devBios';

const fakeDevs = [
  new Developer("Jason","Monroe","JavaScript",2008),
  new Developer("Bob","Monroe","C",1970),
];

it('addBioActionCreator should produce proper action object',() => {

    const actualObject = devActions.addBioActionCreator(fakeDevs[0]);
    const expectedObject = { type:'ADD_BIO',developer:fakeDevs[0]}

    expect(actualObject).toStrictEqual(expectedObject);

});



