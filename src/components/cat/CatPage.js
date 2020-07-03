import React from 'react';
import Details from '../shared/Details';
import Menu from '../shared/Menu';
import Form from '../shared/Form';
import { addCat, selectCat } from '../../actions/catActions';

const getCat = () => window.store.getState().cat.selectedCat;
const getCats = () => window.store.getState().cat.cats;

const dispatchAddCat = cat => {
  window.store.dispatch(addCat(cat));
};

const dispatchSelectCat = cat => {
  window.store.dispatch(selectCat(cat));
};

function CatPage() {

    console.log('rendering CatPage');

    return (
      <>
        <h1>Cat Page</h1>
        <Menu getItems={getCats} animal={'Cat'} select={dispatchSelectCat} />
        <Details getItem={getCat} animal={'Cat'} />
        <Form add={dispatchAddCat} select={dispatchSelectCat} animal={'Cat'} />
      </>
    );
}

export default CatPage;