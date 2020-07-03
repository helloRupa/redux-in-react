import React from 'react';
import Details from './Details';
import Menu from './Menu';
import Form from './Form';

function PeacockPage() {
    console.log('rendering Peacock Page');

    return (
      <>
        <h1>Peacock Page</h1>
        <Menu />
        <Details />
        <Form />
      </>
    );
}

export default PeacockPage;