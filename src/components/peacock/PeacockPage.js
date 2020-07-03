import React from 'react';
import Details from '../shared/Details';
import Menu from '../shared/Menu';
import Form from '../shared/Form';
import { addPeacock, selectPeacock } from '../../actions/peacockActions';

const dispatchAddPeacock = peacock => {
  window.store.dispatch(addPeacock(peacock));
};

const dispatchSelectPeacock = peacock => {
  window.store.dispatch(selectPeacock(peacock));
};

const getPeacock = () => window.store.getState().peacock.selectedPeacock;
const getPeacocks = () => window.store.getState().peacock.peacocks;

function PeacockPage() {
    console.log('rendering Peacock Page');

    return (
      <>
        <h1>Peacock Page</h1>
        <Menu getItems={getPeacocks} animal={'Peacock'} select={dispatchSelectPeacock} />
        <Details getItem={getPeacock} animal={'Peacock'} />
        <Form add={dispatchAddPeacock} select={dispatchSelectPeacock} animal={'Peacock'} />
      </>
    );
}

export default PeacockPage;